const { check} = require('express-validator');

const userValidator = [
  check("firstName")
  .exists({checkFalsy: true})
  .withMessage("firstName should not be empty")
  ,
  check("lastName")
  .exists({checkFalsy: true})
  .withMessage("LastName should not be empty")
  ,
  check("email")
  .exists({checkFalsy: true})
  .withMessage("Please Provide a value for email")
  .isEmail()
  .withMessage("Email address is not valid email")
  ,
  check("password")
  .exists({checkFalsy: true})
  .withMessage("Please provide a value for password")
  .isLength({min: 6})
  .withMessage("Password must be longer than 6 characters")
  ,
  check("username")
  .exists({checkFalsy: true})
  .withMessage("Please provide a value for username")
  .isLength({max: 50})
]

module.exports = {
  userValidator
}