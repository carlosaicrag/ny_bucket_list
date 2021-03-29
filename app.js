//nodemon is what keeps making the server constantly rerun everytime you make a change
//if you take a look at the package.json i've included a flag that allows you to use th
//This is importing the express backend 
const express = require("express");
const path = require('path');
const {asyncHandler} = require("./routes/utils")
const {Post} = require("./models")


// need this session in order to create the cookie that will be sent back and forth
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./models');

//initailizing our application to the variable app
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
//setting a key value pair that tells our app what view engine we will be using

const usersRouter = require("./routes/users")
app.set("view engine", "pug")

//app.use is a way to register middlewares in your application
/*if you do not invoke the next callback, then you will be stuck at whatever
middleware that you are at.
*/ 
//The line below makes sure that whatever request comes in is parsed correctly
app.use(express.urlencoded({extended: true}))
//this is the session middle ware
//The arguments in the session allow for customization of the cookie 
//secret key makes sure that the cookie has not been tampered with and that it is indeed coming from us
const store = new SequelizeStore({ db: sequelize });

// we need this in order to actually create the session table in postgres
store.sync()
app.use(session({secret: 'superSecret', store, saveUninitialized: false, resave: false,}))

app.use("/users", usersRouter)

app.get("/", asyncHandler( async (req,res) => {
  posts = await Post.findAll()
  res.render("home",{session: req.session.user,posts})
}))

const loginReq = (req,res,next) => {
  
  if (req.session.user){    
    next()
  }else{
    res.redirect("/")    
  }
  
}

app.get("/authorized_home", loginReq,(req,res) => {
  res.render("authorized_home", {user: req.session.user})
})

app.use((req, res, next) => {
 const err = new Error('The requested page couldn\'t be found.');
 err.status = 404;
 next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404);
    res.render('page-not-found', {
      title: 'Page Not Found',
    });
  } else {
    err.status = 403
    next(err);
  }
});


app.listen(3000, () => console.log("listening on port 3000"))

// req and res
// req is the http request that is being sent to our server 
// you can access the body of the request by doing req.body 
// you can send information back to whoever sent the request by 
// using res


// there are two middleware stacks 
// there is the "happy" middle ware meaning that everything is going good 
// and there is the error handling middleware where the next() takes in an error as an argument
// if that happens then it  knows to go to the next error handling middleware