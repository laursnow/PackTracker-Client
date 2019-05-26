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
POST     : create a new user
```

**api/packList/ endpoint:**
```
Requires authentification.

PUT     : Update a packing list
POST    : Create a new packing list
GET     : Display all packing lists for the logged in user
GET/:id : Display selected packing list
DELETE  : Delete a packing list
```

## Screenshots

![Login](img "login")
Landing screen. User enter their username & password to access their packing lists saved through the application.

![Register](img "register")
New users register with a username, password and valid e-mail address.

![Dashboard](db "dashboard")
Users are shown all of their saved packing lists and chose one specific entry with which to futher interact. Packing lists can also be deleted from this view.

![Edit packing list](edit"edit list")
Interface for viewing all recorded entries (sorted in descending order of each dream's recorded date). Users can scroll down and see all entries. Links for updating and deleting are included at the bottom of each individual entry.

## App v2.0 Goals

* Printable lists
* Custom categorization of items
* Most commonly packed items/suggested items based on prior packing lists (so you'll never forget your toothbrush again!)

## Technology

This application utilizes React, Redux, Javascript, CSS, node.js, Express, Passport, Mocha/Chai (server unit testing), Enzyme/Jest (client unit testing) and MongoDB.