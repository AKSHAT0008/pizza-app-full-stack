# 🍕 Pizza App — Full Stack Food Ordering Platform

A full-stack pizza ordering application built with React, Redux Toolkit, Node.js, Express.js and MongoDB.

The application provides a platform for users to explore products, create accounts, authenticate, manage their shopping cart and place orders.

## ✨ Features

- User registration and login
- JWT-based authentication
- Product listing and product details
- Shopping cart management
- Order management
- Admin product management
- Image uploads using Cloudinary
- RESTful API architecture
- MongoDB database integration

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- Redux Toolkit
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer
- Cloudinary

## 🏗️ Project Architecture

```text
pizza-app-full-stack/
│
├── pizza-app-backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── schema/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validation/
│   ├── package.json
│   └── .env.example
│
├── pizza-app-frontend/
│   ├── public/
│   ├── src/
│   │   ├── Pages/
│   │   ├── components/
│   │   ├── helpers/
│   │   ├── layouts/
│   │   └── redux/
│   └── package.json
│
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/AKSHAT0008/pizza-app-full-stack.git
cd pizza-app-full-stack
```

### 2. Backend setup

```bash
cd pizza-app-backend
npm install
```

Create a `.env` file using `.env.example` and configure your environment variables.

Start the backend:

```bash
npm start
```

### 3. Frontend setup

Open another terminal:

```bash
cd pizza-app-frontend
npm install
npm run dev
```

### 4. Access the application

Frontend: http://localhost:5173

Backend: http://localhost:5500

## 🔐 Environment Variables

Backend environment variables are required for database connectivity, authentication and image uploads.

See `pizza-app-backend/.env.example` for the required configuration.

Never commit actual credentials or API secrets.

## 📸 Screenshots

Screenshots of the application will be added here.

## 🚀 Future Improvements

- Online payment integration
- Order tracking
- Improved search and filtering
- Responsive UI enhancements
- Deployment and production configuration

## 👨‍💻 Author

**Akshat Gupta**

GitHub: https://github.com/AKSHAT0008

---

If you find this project useful, consider giving it a ⭐ on GitHub.
