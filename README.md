# 🚀 aBlogs - MERN Stack Blog Platform

A modern, full-stack blogging platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## ✨ Features

- 🔐 Secure user authentication and authorization
- 📝 Create, read, update, and delete blog posts
- 🖼️ Image upload functionality with AWS S3
- 💎 Beautiful UI with Material Tailwind
- 🔄 Real-time updates and responsive design
- 🛡️ Protected routes and JWT authentication

## 🛠️ Tech Stack

- **Frontend:**
  - React.js with Vite
  - Material Tailwind for UI components
  - React Router for navigation
  - Axios for API requests
  - Tailwind CSS for styling

- **Backend:**
  - Node.js & Express.js
  - MongoDB for database
  - JWT for authentication
  - AWS S3 for image storage
  - Multer for file handling

## 🚀 Getting Started

1. **Clone the repository**
git clone https://github.com/yourusername/ablogs.git

2. **Install dependencies**
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install

3. **Set up environment variables**
Create a `config.env` file in the backend directory with:
ATLAS_URI=your_mongodb_uri
SECRETKEY=your_jwt_secret
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_ACCESS_KEY_ID=your_aws_key_id

4. **Run the application**
# Frontend
npm run dev

# Backend
node server.js

## 🌟 Key Features Explained

- **User Authentication**: Secure login/signup system with JWT tokens
- **Blog Management**: Full CRUD operations for blog posts
- **Image Handling**: AWS S3 integration for image storage
- **Responsive Design**: Mobile-first approach with Material Tailwind
- **Protected Routes**: Secure routing system for authenticated users

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 💖 Acknowledgments

- Material Tailwind for the amazing UI components
- MongoDB Atlas for database hosting
- AWS for image storage solutions

---
Built with ❤️ by Putu Aditya
