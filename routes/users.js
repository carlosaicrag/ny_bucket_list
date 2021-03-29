const express = require('express')
const router = express.Router()
const {asyncHandler} = require("./utils")
const bcrypt = require("bcrypt")
const {User} = require('../models')
const {userValidator} = require("../validations/user")
const { validationResult } = require('express-validator');
const loginReq = (req,res,next) => {
  
  if (req.session.user){    
    res.redirect("/")    
  }else{
    next()
  }
  
}

router.get("/signup", loginReq,(req,res) => {
  res.render("signup", {user: {firstname:"", lastName:"", email:"", password:"", username: ""}})
})

router.post("/",userValidator, asyncHandler(async (req,res) => {
  const {firstName, lastName, password,email,username} = req.body
  let validResults = validationResult(req).errors
  
  if (validResults.length > 0){
    const user = {firstName, lastName, password,email,username}
    res.status = 403
    res.render("signup", {user})
  }else{
    // hash the user's password before saving it to the db
    const hashedPassword = await bcrypt.hash(password,10)
    const user = await User.create({firstName,lastName,email,hashedPassword,username})
  
    req.session.user = {id: user.id,firstName: user.firstName,lastName: user.lastName}
  
    res.redirect("/authorized_home")
  }
}))

router.get('/login', loginReq ,asyncHandler(async (req, res) => {
  res.render('login')
}))

router.post('/login', asyncHandler(async (req,res) => {
  const {username,password} = req.body
  const user = await User.findOne({where: {username} })
  const isPassword = bcrypt.compare(password,user.password)

  if (isPassword){
    req.session.user = {id: user.id, firstName: user.firstName, lastName: user.lastName}
    res.redirect("/authorized_home")
  }else{
    res.render("/")
  }
}))

router.post('/logout', asyncHandler(async (req, res) => {
  // log user out by deleting user property on req.session object
  delete req.session.user
  res.redirect('/users/login')
}))


module.exports = router