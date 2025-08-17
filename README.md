Authentication & Authorization API

A production-ready backend API built with Node.js, Express.js, MongoDB, Mongoose, JWT, and bcrypt.
This project provides secure user authentication and role-based authorization, making it suitable for modern web applications.

🚀 Features

User Registration & Login – Secure signup and login using hashed passwords.

JWT Authentication – Stateless authentication with JSON Web Tokens.

Password Security – Encrypted password storage using bcrypt.

Role-Based Authorization – Access control for protected routes (e.g., user, admin).

Profile Management – Fetch authenticated user profile details.

Logout Functionality – Secure token invalidation.

MongoDB Integration – Persistent storage using Mongoose ODM.

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Security: bcrypt, JWT

Tools: Nodemon, dotenv

📌 API Endpoints
Auth Routes

POST /api/auth/register → Register a new user

POST /api/auth/login → Login user and return JWT

POST /api/auth/logout → Logout user

User Routes

GET /api/users/profile → Get logged-in user profile (protected)

GET /api/users/all → Get all users (admin-only, protected)

⚙️ Setup & Installation

Clone the repo

git clone https://github.com/your-username/auth-api.git
cd auth-api


Install dependencies

npm install


Setup environment variables (.env file)

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the serve.
npm run dev

🔒 Security Practices

Passwords are hashed before storing in the database.
Tokens are signed with a secret key.
Sensitive routes are protected with middleware.

📖 Learning Outcome

This project demonstrates how to:
Implement secure authentication & authorization in Express.js.
Manage user sessions with JWT.
Apply role-based access control (RBAC).
Integrate MongoDB with Mongoose models.

📌 Future Improvements

Refresh tokens for extended sessions.
Email verification & password reset.
2FA (Two-Factor Authentication).
Rate limiting for brute-force protection.
