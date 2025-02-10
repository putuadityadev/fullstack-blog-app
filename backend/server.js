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

app.listen(PORT, () => {
  connect.connectToServer()
  console.log(`server is running on port: ${PORT}`)
});