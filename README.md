# burger
This app is part of UT code camp, and it focuses on creating an ORM vs. using a standard ORM like sequelize.

It is a "restaurant app" that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

Code structure:
server.js is the main file that uses express to open a port.  

Public folder:
-- client side files for styling (CSS) and front end logic (burger.js)
The app is a pretty simple CRUD application. Burger.js (front end calls the back end API for basic CRUD)

Views:
Handlebars is used to render the main view. It uses a boolean "devored" flag to decide where to render the contents of the database.

ORM/Database
A SQL database is used; when posted to heroku Jawsdb is used.
The database has a single simple table for burgers: Name, ID and Devoured flag.

THe ORM implments selectAll, UpdateOne, InsertOne, and delete.  selectAll is used for the get route; update one for the put, InsertOne for post, and delete for delete.

Controller
burger_controller.js implements the basic routes.

Database setup
schema.sql is a script to setup the database
seeds.sql is a script to add initial seeds of burger for debug.

