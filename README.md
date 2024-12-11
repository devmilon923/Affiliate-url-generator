# Affiliate URL Generator

This project is an Affiliate URL Generator that allows users to create and track affiliate links. Users can input any URL, and the application generates an affiliate link, tracking the number of clicks and visit history with ip address.

## Features

- **Generate Affiliate Links**: Users can enter any URL to create an affiliate link.
- **Track Clicks**: The application tracks how many times each affiliate link is clicked.
- **Visit History**: View all visit history for each affiliate link, including the original URL, the date of creation with IP address who visited the link.
- **Content UI**: A user-friendly interface to interact with the application.
- **Login/Create**: Users can log in, create an account, and the link will follow them.
- **Role-Based Authentication**: Users can log in, create an account, and access links based on their roles.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to build web applications.
- **MongoDB**: NoSQL database for storing affiliate link data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, used for data modeling.

## MVC Architecture

This project follows the Model-View-Controller (MVC) architectural pattern to separate concerns and improve code organization.

## Future Enhancements

- **WebSocket Render Functionality**: Currently not implemented but planned for future updates.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devmilon923/affiliate-url-generator.git

   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Add & Set up your .env file following the env.sample file:

   ```bash
   MONGODB_URI="Your Database URL"
   PORT=3000
   PrivateKey="Your Private Key"

   ```

5. Start the server:

   ```bash
   npm start

   ```

## Role Add in your Route:

- **Update User Model**: Add one more field in your 'User' model.

  ```bash
  permission: {
     type: String,
     require: true,
     default: "NORMAL",
   },

  ```

- **Modify Your Routes**: Use role(['ADMIN','USER']) currently this two are working but following our code you can change it easily (Recommended to add this role() middlewares before auth middlewares).

  ```bash
  route.get("/", auth, role(["ADMIN", "USER"]), YourRouteController);
  ```
