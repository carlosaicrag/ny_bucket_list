const express = require('express')
const router = express.Router()
const {asyncHandler} = require("./utils")
const bcrypt = require("bcrypt")
const {User} = require('../models')


const loginReq = (req,res,next) => {
  
  if (req.session.user){    
    res.redirect("/")    
  }else{
    next()
  }
  
}

router.get("/signup", loginReq,(req,res) => {
  res.render("signup")
})

router.post("/", asyncHandler(async (req,res) => {
  const {firstName, lastName, password,email} = req.body.user
  // hash the user's password before saving it to the db
  const hashedPassword = await bcrypt.hash(password,10)
  debugger
  const user = await User.create({firstName,lastName,email,hashedPassword})

  req.session.user = {id: user.id,firstName: user.firstName,lastName: user.lastName}

  res.redirect("/authorized_home")
}))

router.get('/login', loginReq ,asyncHandler(async (req, res) => {
  res.render('login')
}))

router.post('/login', asyncHandler(async (req,res) => {
  const {firstName,password} = req.body.user
  const user = await User.findOne({where: firstName })
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