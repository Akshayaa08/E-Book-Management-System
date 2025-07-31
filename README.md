# E-Book-Management-System
An E-Book Management System built with React (Vite) for the frontend and Node.js + Express + MongoDB for the backend. This project provides a platform to browse, read, and manage e-books with secure user authentication and subscription plans.
Here’s a **GitHub repository description** you can use when uploading your **E-Book Management System** project:

---
## 🚀 Features

* **User Authentication**

  * Sign Up and Login with JWT authentication
* **Subscription Plans**

  * Choose between **Basic** and **Premium** plans
  * Premium users get access to exclusive books
* **Book Management**

  * Browse available books
  * Check out books with a **return date**
* **Responsive UI**

  * Built with **React** and styled using **Bootstrap**
* **Backend APIs**

  * RESTful APIs for authentication, book management, and subscriptions

---
## ⚙️ Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/ebook-management-system.git
cd ebook-management-system
```

### 2. Setup Backend

```sh
cd ebook-backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```sh
node server.js
```

### 3. Setup Frontend

```sh
cd ../my_app
npm install
npm run dev
```

Open the app at:
👉 `http://localhost:5173`

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite), Bootstrap
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas
* **Authentication**: JWT + bcrypt.js

---

## 📌 Future Enhancements

* Book rating & reviews
* Payment gateway integration for subscriptions
* Cloud storage for e-book uploads
* Admin dashboard for analytics
