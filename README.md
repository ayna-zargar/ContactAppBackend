# ContactApp

A backend Node.js and Express-based Contact Management API with JWT authentication and MongoDB. This project allows users to register, log in, and manage their contacts securely with protected routes.

## Features

- User registration and login with JWT authentication
- Protected routes for managing contacts
- CRUD operations for contacts (Create, Read, Update, Delete)
- MongoDB integration using Mongoose
- RESTful API design

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayna-zargar/ContactApp.git
   cd ContactApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:
   ```
   PORT=your_port_number
   CONNECTION_STRING=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## API Endpoints

### Contacts

- `GET /api/contacts`  
  Get all contacts (protected)

- `GET /api/contacts/:id`  
  Get a specific contact by ID (protected)

- `POST /api/contacts`  
  Create a new contact (protected)

- `PUT /api/contacts/:id`  
  Update a contact by ID (protected)

- `DELETE /api/contacts/:id`  
  Delete a contact by ID (protected)

### Users

- `POST /api/users/register`  
  Register a new user

- `POST /api/users/login`  
  Log in a user and receive a JWT

- `GET /api/users/current`  
  Get the current logged-in user's info (protected)

## Environment Variables

- `PORT` – Port number for the server
- `CONNECTION_STRING` – MongoDB connection string
- `ACCESS_TOKEN_SECRET` – Secret key for JWT

## Usage

After starting the server, use an API client like [Thunder Client](https://www.thunderclient.com/) or [Postman](https://www.postman.com/) to interact with the endpoints.  
Register a user, log in to receive a JWT, and use the token to access protected routes.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[ayna-zargar](https://github.com/ayna-zargar)
