const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3")
const multer = require("multer")
const upload = multer()

let awsRoutes = express.Router()

const s3Bucket = "blogstoragemern"
const s3Client = new S3Client({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});



//Retrive one
awsRoutes.route("/images/:id").get(verifyToken, async (request, response) => {
  try {
    const id = request.params.id
    const bucketParams = {
      Bucket: s3Bucket,
      Key: id
    }

    const data = await s3Client.send(new GetObjectCommand(bucketParams))
    const contentType = data.ContentType
    const srcString = await data.Body.transformToString('base64')
    const imageSource = `data:${contentType};base64,${srcString}`

    response.json({ data: imageSource })
  } catch (error) {
    console.error("Error getting image:", error)
    response.status(500).json({ message: "Error retrieving image" })
  }
});

//Create one
awsRoutes.route("/images").post(upload.single('file'), async (request, response) => {
  const file = request.file
  
  const bucketParams = {
    Bucket: s3Bucket,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  }

  const data = await s3Client.send(new PutObjectCommand(bucketParams))
  response.json(data)
})


function verifyToken(request, response, next) {
  const authHeaders = request.headers["authorization"]
  const token = authHeaders && authHeaders.split(' ')[1]
  if(!token) {
    return response.status(401).json({message: "Authentication token is missing"})
  }

  jwt.verify(token, process.env.SECRETKEY, (error, user) => {
    if(error) {
      return response.status(403).json({message: "Invalid Token"})
    }

    request.body.user = user
    next()
  })
}

module.exports = awsRoutes;