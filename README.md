# PackTracker

## Application Demo
**[Live Application](https://packtracker-app.herokuapp.com/ "packTracker")**

<i class="fas fa-arrow-circle-right"></i> **Demo user:**

Username: sampleuser<br>
Password: samplepassword

## Description

 A simple web app for tracking trip packing.

## API Documentation

**api/users/ endpoint:**

```
POST          : create a new user
```

**api/packList/ endpoint:**
```
Requires authentification.

PUT/:id       : Update a packing list
POST          : Create a new packing list
GET/db/:id    : Display all saved packing lists for the logged in user
GET/:id       : Display selected packing list
DELETE/:id    : Delete a packing list
```

## Screenshots

![Landing Page](https://raw.githubusercontent.com/laursnow/PackTracker-Client/master/screenshots/landing.jpg "landing page")
Landing screen. User can select from several options from the navigation menu.

![Login](https://raw.githubusercontent.com/laursnow/PackTracker-Client/master/screenshots/login.jpg "login")
Login form. User can enter their username & password to access their packing lists saved through the application.

![Register](https://raw.githubusercontent.com/laursnow/PackTracker-Client/master/screenshots/register.jpg "register")
New users register with a username, password and valid e-mail address.

![Create](https://raw.githubusercontent.com/laursnow/PackTracker-Client/master/screenshots/create.jpg "create")
User interface for creating a new packing list.

![Dashboard](https://raw.githubusercontent.com/laursnow/PackTracker-Client/master/screenshots/db.jpg "dashboard")
Users are shown all of their saved packing lists and chose one specific entry with which to futher interact. Packing lists can also be deleted from this view.

![View/edit packing list](https://raw.githubusercontent.com/laursnow/PackTracker-Client/master/screenshots/view.jpg "view/edit list")
Interface for viewing and editing individual packing lists.

## App v2.0 Goals

* Printable lists
* Custom categorization of items
* Most commonly packed items/suggested items based on prior packing lists (so you'll never forget your toothbrush again!)

## Technology

This application utilizes React, Redux, Javascript, CSS, node.js, Express, Passport, Mocha/Chai (server unit testing), Enzyme/Jest (client unit testing) and MongoDB.