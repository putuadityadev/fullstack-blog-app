const connect = require("./connect") 
const express = require("express")     
const cors = require("cors")
const posts = require("./postRoutes")
const users = require("./userRoutes")
const awsRoutes = require("./awsRoutes")
const multer = require("multer")
const upload = multer()

const app = express()
const PORT = process.env.PORT || 3000


app.use(cors({
  origin: ['http://localhost:5173', 'https://fullstack-blog-app-frontend.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json())
app.use(users)
app.use(posts)
app.use(awsRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const startServer = async () => {
  try {
    await connect.connectToServer();
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();