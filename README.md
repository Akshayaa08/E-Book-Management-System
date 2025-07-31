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

Perfect 👍 Thanks for sharing the screenshots of your project directories!
I'll give you a **clean folder structure** for both **Backend** and **Frontend** (based on your current setup), so you can document it in your GitHub and easily manage it.

---

# 📂 Project Folder Structure

## **Backend (`Backend/`)**

```
Backend/
│── config/                     # Database & server configurations
│   └── db.js                   # MongoDB connection file
│
│── models/                     # Database models
│   ├── User.js                 # User schema (login, signup, subscription)
│   ├── Book.js                 # Book schema (details, status, return date)
│   └── Subscription.js         # Subscription schema (Basic/Premium plans)
│
│── routes/                     # Express routes
│   ├── authRoutes.js           # Authentication routes (login/signup)
│   ├── bookRoutes.js           # Book browsing & checkout
│   └── subscriptionRoutes.js   # Subscription management
│   └── paymentRoutes.js        # Payment for premium book purchase
│
│── node_modules/               # Dependencies installed via npm
│
│── .env                        # Environment variables (MongoDB URI, JWT secret)
│── package.json                # Backend dependencies & scripts
│── package-lock.json           # Dependency lock file
│── server.js                   # Main entry point for backend server
```

---

## **Frontend (`my_app/`)**

```
my_app/
│── public/                     # Public static files
│   └── vite.svg
│
│── src/
│   ├── assets/                 # Images, icons, CSS, fonts, etc.
│   │
│   ├── components/             # React Components
│   │   ├── BookBrowsing.jsx    # Browse available books
│   │   ├── BookDetail.jsx      # View book details & checkout option
│   │   ├── Home.jsx            # Home dashboard after login
│   │   ├── Login.jsx           # Login page
│   │   ├── MyBooks.jsx         # User's borrowed books
│   │   ├── Payment.jsx         # Payment integration (for subscriptions)
│   │   ├── SubscriptionPlan.jsx# Choose between Basic/Premium
│   │   ├── trendingBooks.jsx   # Display trending books
│   │   └── UploadBook.jsx      # Admin/Contributor book upload
│   │
│   ├── App.css                 # Styling for App.jsx
│   ├── App.jsx                 # Main app component with routes
│   ├── index.css               # Global styles
│   ├── main.jsx                # React entry point
│
│── .gitignore                  # Files to ignore in GitHub
│── eslint.config.js            # ESLint configuration
│── index.html                  # Main HTML template
│── package.json                # Frontend dependencies
│── package-lock.json           # Dependency lock file
│── README.md                   # Documentation for project
│── vite.config.js              # Vite configuration
```

---

## ⚙️ Execution Flow

1. **Backend**

   * Runs on **Node.js Express server** (`server.js`).
   * Connects to **MongoDB** using `config/db.js`.
   * Exposes REST APIs for:

     * Authentication (`authRoutes.js`)
     * Book browsing & checkout (`bookRoutes.js`)
     * Subscription (`subscriptionRoutes.js`)

2. **Frontend**

   * Runs with **React (Vite)**.
   * Uses `App.jsx` for routing:

     * `/` → `Login.jsx`
     * `/home` → `Home.jsx`
     * `/books` → `BookBrowsing.jsx`
     * `/book/:id` → `BookDetail.jsx`
     * `/mybooks` → `MyBooks.jsx`
     * `/upload` → `UploadBook.jsx`
     * `/subscribe` → `SubscriptionPlan.jsx`
     * `/payment` → `Payment.jsx`

3. **Communication**

   * Frontend communicates with Backend via Axios HTTP requests.
   * JWT stored in `localStorage` is used for authentication.

---

⚡ Question for you:
Do you want me to also create a **README.md** file (with this structure, execution steps, and screenshots) so you can directly upload it to GitHub?

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
