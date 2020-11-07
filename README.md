# Critter Sitter App
Project 2

* ['Git Hub'](https://github.com/lisaworsham/project2)
* ['Heroku'](http://projecttwo2.herokuapp.com/)
* ['Early Concept UX Design'](https://xd.adobe.com/view/b9dc6cd7-bed3-4fef-9d17-9a2788625088-ec8f/)
* ['Pitch'](https://docs.google.com/presentation/d/1tm3dkqf8nOqXciRqlrEbQRcGtAWxNU64Ym6ECxAbIwA/edit?usp=sharing)


### Summary
* A single place where a pet owner can keep in touch with their pet sitter while away. Offers profile of the pet with all of its information. An itinerary for the owner's trip. As well as emergency contact information for the pet sitter in case they lose contact with the owner. The sitter would be able to log visits with the pet owner which will notify the owner by email as soon as it's published. 

* A pet safe application focused on safety and communication about your pet giving you piece of mind while away.

### Technology
* This project emphasizes the use of MVC. Technologies used include Javascript, MySql, NodeJs, passport for authentication, sequelize, bootstrap, and nodemailer for e-mail transactions. 

* A new e-mail account was created to facilitate e-mail transactions through nodemailer.

* UX Design and early concepts were built in Adobe XD which then faciltated concept design and initial database designs. 

* Seeds were built using Sequelize. FK were created to faciltate functioality needed by the app. Tables include:

    * user - holds Pet Owner and Pet Sitter profiles. Identification of whether a user is a Pet Sitter or Pet Owner is housed in this single table
    * tripcheckin - this houses information about each checkin by the Pet Sitter communicating to the Pet Owner
    * trip - holds information about each trip created by the Pet Owner including trip name, from and to dates and emergency contact information
    * petprofile - houses pet information for each pet created by the Pet Owner including pet type and pet food and any special information. This is considered a 1:M relationship to the user table where the Pet Owner can have multiple Pets. 

#### Coding Design
* Must Have
    * Node and Express web server
    * MySQL database with a Sequelize ORM
    * GET and POST routes for retrieving and adding new data
    * Deployed using Heroku (with data)
    * Utilize at least one new library, package, or technology that we haven’t discussed
    * Beutifully designed front end/UI
    * MVC paradigm design used
    * Good-quality coding standards (indentation, scoping, naming, etc.) - eslint used to faciltate code readability 
    * Protected API keys in Node with environment variables for both database and e-mail account
* Nice to Have
    * Used Handlebars.js as the template engine
    * Authentication used with passport
    * Used seeder in sequelize

### This project has the following features: 
* Sign Up - sign up as a Pet Owner or Pet Sitter
* Login - login as a Pet Owner or Pet Sitter. Depending on the type of user logging in, an appropriate page will be presented based on that authentication. 
* Pet Owner:
    * Create Trip
    * Add Pet
    * Edit Pet
* Pet Sitter:
    * Check in pet owner trip by sending a message via e-mail
    * View information on each pet so that the Sitter has the information necessary to care for the pet/s
* Easy, simple to use UI/UX
* Responsive design
* Authentication validation at each page/route
* E-mail notification immediately to Pet Owner by Pet Sitter during check-in

### Contributors
* Lisa Worsham - Front-end/UI development, Heroku deployment
* Tajah Johnson - sequelize seeder 
* Allen DeHoff - Back-end developer, UI/Back-end integration
* Shawn Morgan - UX concept design, Add Pet feature, e-mail nodemailer integration, project documentation, Scrum master 

### Deployed Link
* https://warm-escarpment-07278.herokuapp.com/
