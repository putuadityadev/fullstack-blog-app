const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config({path: "./config.env"})

let userRoutes = express.Router()
const SALT_ROUNDS = 6

//Retrive all
userRoutes.route("/users").get(async (request, reponse) => {
  try {
    let db = database.getDb()
    let data = await db.collection("users").find({}).toArray()
    response.json(data)
  } catch(err) {
    response.status(500).json({
      error: err.message,
      message: "Eror fetching users"
    })
  }
});

//Retrive one
userRoutes.route("/users/:id").get(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)});

  if(ObjectId.keys(data).length > 0) {
    response.json(data)
  } else {
    throw new Error ("Data was not found")
  }
});

//Create one
userRoutes.route("/users").post(async (request, response) => {
  let db = database.getDb()
  const takenEmail = await db.collection("users").findOne({email : request.body.email})
  
  if (takenEmail) {
    response.json({message: "The email is already used!"})
  } else {
    const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS)
    
    let mongoObject = {
      name: request.body.name,
      email: request.body.email,
      password: hash,
      joinDate: new Date(),
      posts: []
    }
    let data = await db.collection("users").insertOne(mongoObject)
    response.json(data)
  }
});

//update one
userRoutes.route("/users/:id").put(async (request, response) => {
  let mongoObject = {
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    joinDate: request.body.joinDate,
    posts: request.body.posts
  }

  let db = database.getDb()
  let data = await db.collection("users").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
  response.json(data)
});

//delete one
userRoutes.route("/users/:id").delete(async (request, response) => {
  let db = database.getDb()
  let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
  response.json(data)
});

//login
userRoutes.route("/users/login").post(async (request, response) => {
  let db = database.getDb()

  const user = await db.collection("users").findOne({email: request.body.email})

  if (user) {
    let confirmPassword = await bcrypt.compare(request.body.password, user.password)

    if (confirmPassword) {
      const token = jwt.sign(user, process.env.SECRETKEY, {expiresIn: "1h"})
      response.json({ success: true, token });
    } else {
        response.json({ success: false, message: "Incorrect password!" });
    }

  } else {
    response.json({success: false, message: "User not found!"})
  }
})

module.exports = userRoutes;