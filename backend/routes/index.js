const express = require('express');
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require('crypto-js/sha256')
const encBase64 = require('crypto-js/enc-base64')

const userModel = require('../models/users')


/* GET home page. */
router.post('/sign-up/brand', async function(req, res, next) {

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if(data != null){
    error.push('User Already Exist')
  }

  if(req.body.firstNameFromFront == ''
  || req.body.lastNameFromFront == ''
  || req.body.emailFromFront == ''
  || req.body.passwordFromFront == ''
  || req.body.phoneFromFront == ''
  || req.body.entrepriseFromFront == ''
  ){
    error.push('Empty Field')
  }


  if(error.length == 0){

    var salt = uid2(32)
    var newUser = new userModel({
      firstName: req.body.firstNameFromFront,
      laststName: req.body.firstNameFromFront,
      email: req.body.emailFromFront,
      password: SHA256(req.body.passwordFromFront+salt).toString(encBase64),
      token: uid2(32),
      salt: salt,
      phone: req.body.phoneFromFront,
      role: "brand",
      entreprise: req.body.entrepriseFromFront,

    })
  
    saveUser = await newUser.save()
  
    
    if(saveUser){
      result = true
      token = saveUser.token
    }
  }
  res.json({result, saveUser, error, token})
})

module.exports = router;
