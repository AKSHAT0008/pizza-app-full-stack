# 🍕 Pizza App – Full Stack Web Application

A full-stack pizza ordering application built with the MERN stack. Users can browse pizzas, view product details, manage their cart, and place orders.

## 🚀 Tech Stack

**Frontend**
- React 19
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Cloudinary
- Multer

## ✨ Features

- User registration and login
- Browse available pizza products
- View individual product details
- Add products to the shopping cart
- Update cart item quantities
- Place orders and view order confirmation
- Upload product images using Cloudinary

## 📁 Project Structure

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
│   │   ├── validation/
│   │   └── index.js
│   └── package.json
│
├── pizza-app-frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── css/
│   │   ├── helpers/
│   │   ├── layouts/
│   │   ├── Pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/AKSHAT0008/pizza-app-full-stack.git
cd pizza-app-full-stack
```

### 2. Backend Setup

```bash
cd pizza-app-backend
npm install
```

Create a `.env` file inside `pizza-app-backend/`:

```env
PORT=5500
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start the backend:

```bash
npm start
```

The backend runs at:

`http://localhost:5500`

### 3. Frontend Setup

Open a new terminal:

```bash
cd pizza-app-frontend
npm install
npm run dev
```

The frontend runs at:

`http://localhost:5173`

## 🔗 API Configuration

The frontend uses an Axios instance configured in:

`src/helpers/axiosInstance.js`

The current local development configuration points to:

`http://localhost:5500`

Requests are configured with `withCredentials` enabled.

The backend CORS configuration currently allows the local Vite frontend origin.

## 🔐 Environment Variables

Keep your actual `.env` file private. Never commit database credentials, JWT secrets, or Cloudinary API secrets to GitHub.

## 📸 Screenshots

<img width="1535" height="632" alt="image" src="https://github.com/user-attachments/assets/0cc7d288-79d7-45c3-88fb-14c7fde49719" />

<img width="1535" height="648" alt="image" src="https://github.com/user-attachments/assets/aac5b02c-b394-413d-a0b8-7493c4ce9d24" />

<img width="1516" height="458" alt="image" src="https://github.com/user-attachments/assets/1931b85e-a948-4e6e-a97c-6fe6de6ee015" />

<img width="1520" height="742" alt="image" src="https://github.com/user-attachments/assets/b204e5cd-0af7-436f-afb3-a9f69a519685" />

<img width="1521" height="695" alt="image" src="https://github.com/user-attachments/assets/2c9a8f2a-5637-4b96-8559-b61837d966b1" />

<img width="957" height="546" alt="image" src="https://github.com/user-attachments/assets/92745181-55f0-45c0-9076-5b4a46d57fdc" />

<img width="1028" height="597" alt="image" src="https://github.com/user-attachments/assets/4626f263-6bb8-4fb0-91f8-c01ea138907d" />


## 👨‍💻 Author

**Akshat**

GitHub: [AKSHAT0008](https://github.com/AKSHAT0008)

---

*Built as a full-stack development project to explore frontend state management, REST APIs, authentication, database integration, and cloud-based image uploads.*
