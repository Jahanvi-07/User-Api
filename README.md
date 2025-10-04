# User-Api

A RESTful API designed to manage user data, providing endpoints for creating, retrieving, updating, and deleting user information.

## 🚀 Features

* **User Management**: Create, read, update, and delete user profiles.
* **Data Validation**: Ensures all user data adheres to specified formats.
* **Authentication**: Secure endpoints with token-based authentication.
* **Error Handling**: Comprehensive error messages for better debugging.

## ⚙️ Technologies Used

* **Node.js**: JavaScript runtime for building the API.
* **Express.js**: Web framework for building the API.
* **MongoDB**: NoSQL database for storing user data.
* **Mongoose**: ODM for MongoDB to model user data.
* **JWT**: JSON Web Tokens for secure authentication.

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Jahanvi-07/User-Api.git
cd User-Api
npm install
```

## 🔧 Setup

1. **Environment Variables**: Create a `.env` file in the root directory and add the following:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

2. **Database**: Ensure MongoDB is running locally or use a cloud service like MongoDB Atlas.

3. **Start the Server**:

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:5000`.

## 🧪 Testing

To run tests, ensure you have [Jest](https://jestjs.io/) installed:

```bash
npm install --save-dev jest
```

Run the tests:

```bash
npm test
```

