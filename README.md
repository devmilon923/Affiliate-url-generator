# Affiliate URL Generator

This project is an Affiliate URL Generator that allows users to create and track affiliate links. Users can input any URL, and the application generates an affiliate link, tracking the number of clicks and visit history.

## Features

- **Generate Affiliate Links**: Users can enter any URL to create an affiliate link.
- **Track Clicks**: The application tracks how many times each affiliate link is clicked.
- **Visit History**: View all visit history for each affiliate link, including the original URL and the date of creation.
- **Content UI**: A user-friendly interface to interact with the application.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to build web applications.
- **MongoDB**: NoSQL database for storing affiliate link data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, used for data modeling.
- **Login/Create**: Users can log in, create an account, and the link will follow them.

## MVC Architecture

This project follows the Model-View-Controller (MVC) architectural pattern to separate concerns and improve code organization.

## Future Enhancements

- **Logout Functionality**: Currently not implemented but planned for future updates.

## Installation


1. Clone the repository:
   
   ```bash
   git clone https://github.com/devmilon923/affiliate-url-generator.git

2. Navigate to the project directory:
   
   ```bash
   cd <project-directory>

3. Install the dependencies:
   
   ```bash
   npm install

4. Set up your MongoDB connection in the connection.js file:
   
   ```bash
   const mongoose = require("mongoose");

   async function dbConnect() {
     return mongoose.connect(
       "Your Database URL"
     );
   }
5. Add your private JWT token in service/service.js:
   
   ```bash
   const privateKey = "Your Private Key";

6. Start the server:
   
   ```bash
   npm start
