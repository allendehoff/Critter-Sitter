// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // console.log(req.user)
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.body.email,
      // role: req.body.userRole
      // id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      Email: req.body.email,
      UserPassword: req.body.password,
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      PhoneNum: req.body.phoneNumber,
      ZipCode: req.body.zipCode,
      PetOwner: (req.body.userRole === "pet-owner") ? true : false,
      PetSitter: (req.body.userRole === "pet-sitter") ? true : false
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        // console.log(err);
        // console.log("hello");
        res.status(401).json(err);
      });
  });

  app.post("/api/newtrip", (req, res) => {
    console.log(req.body)
    db.trip.create({
      TripName: req.body.TripName,
      FromDate: req.body.FromDate,
      ToDate: req.body.ToDate,
      EmergencyContact: req.body.EmergencyContact,
      Comments: req.body.Comments
    })
    .then(() => {
      console.log("Successfully created new trip");
    })
    .catch(err => {
      console.log(err)
      res.status(401).json(err);
    })
  })

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
