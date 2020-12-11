const express = require('express');
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require('crypto-js/sha256');
const encBase64 = require('crypto-js/enc-base64');
var mongoose = require('mongoose');

const userModel = require('../models/users');
const campaignModel = require('../models/campaigns');

/* GET home page. */

router.post('/sign-up/brand', async function (req, res, next) {

  console.log('PASSING', req.body);

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('User Already Exist')
  }

  if (req.body.firstNameFromFront == ''
    || req.body.lastNameFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
    || req.body.phoneFromFront == ''
    || req.body.companyFromFront == ''
  ) {
    console.log('ERROR');
    error.push('Empty Field')
  }


  if (error.length === 0) {

    console.log('NO ERROR');

    var salt = uid2(32)
    var newUser = new userModel({
      firstName: req.body.firstNameFromFront,
      lastName: req.body.lastNameFromFront,
      email: req.body.emailFromFront,
      password: SHA256(req.body.passwordFromFront + salt).toString(encBase64),
      token: uid2(32),
      salt: salt,
      phone: req.body.phoneFromFront,
      role: "brand",
      entreprise: req.body.companyFromFront,

    })
    console.log('fName', req.body.firstNameFromFront,)

    saveUser = await newUser.save()


    if (saveUser) {
      result = true
      token = saveUser.token
    }
  }
  res.json({ result, saveUser, error, token })
})
router.post('/sign-up/influencer', async function (req, res, next) {

  console.log();

  var error = []
  var result = false
  var saveUser = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('User Already Exist')
  }

  if (req.body.firstNameFromFront == ''
    || req.body.lastNameFromFront == ''
    || req.body.userNameFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
    || req.body.phoneFromFront == ''


  ) {
    error.push('Empty Field')
  }


  if (error.length === 0) {

    var salt = uid2(32)
    var newUser = new userModel({
      firstName: req.body.firstNameFromFront,
      lastName: req.body.lastNameFromFront,
      email: req.body.emailFromFront,
      password: SHA256(req.body.passwordFromFront + salt).toString(encBase64),
      token: uid2(32),
      salt: salt,
      phone: req.body.phoneFromFront,
      role: "influenceur",
      pseudo: req.body.userNameFromFront,
      numberFollower: req.body.numberFollowerFromFront,
      favoriteGame: req.body.favoriteGameFromFront,
      urlSocialNetwork: req.body.urlSocialNetworkFromFront,
    })
    console.log('fName', req.body.firstNameFromFront,)

    saveUser = await newUser.save()


    if (saveUser) {
      result = true
      token = saveUser.token
    }
  }
  res.json({ result, saveUser, error, token })
})

router.post('/sign-in', async function (req, res, next) {

  var result = false
  var user = null
  var error = []
  var token = null

  if (req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('Empty')
  }

  if (error.length == 0) {
    const user = await userModel.findOne({
      email: req.body.emailFromFront,
    })


    if (user) {
      const passwordEncrypt = SHA256(req.body.passwordFromFront + user.salt).toString(encBase64)

      if (passwordEncrypt == user.password) {
        result = true
        token = user.token
      } else {
        result = false
        error.push('Incorrect password mother fucker')
      }

    } else {
      error.push('Incorrect email mother fucker ')
    }
  }

  console.log("back", user, result)

  res.json({ result, user, error, token })


})
router.post('/addcampaign', async function (req, res, next) {

  var user = await userModel.findOne({ token: req.body.token })
  var campaign = new campaignModel({
    campaignName: req.body.nameCampaignFromFront,
    dateStart: req.body.dateStartFromFront,
    dateEnd: req.body.dateEndFromFront,
    status: 'created',
    description: req.body.descriptionFromFront,
    audienceCriteria: req.body.audienceFromFront,
    uploadedDoc: req.body.uploadDocFromFront,
    brand_id: user._id // id de la marque récupérer a la ligne 173 avec le token 
  })
  var campaignSave = await campaign.save()
  console.log("campaignSaved", campaignSave)
  let insertId = await userModel.findOneAndUpdate({ token: req.body.token }, { campaign_id: campaignSave._id }) // ajouter la nouvelle id de la creation de campagne

  console.log('insertId', insertId)

  res.json({ campaignSave })
  console.log('camp+user', campaignSave)
});

router.get('/get-campaign-details/:id', async function(req, res, next) {

  var returnCampaign = await campaignModel.findOne({_id: req.params.id })
  console.log('params', req.params)
  res.json({returnCampaign})
});

router.post('/campaign-apply', async function(req, res, next) {
  console.log('req', req.body)
  var influencer = await userModel.findOne({ token: req.body.token })
  console.log('influ', influencer)
  let updatedCampaign = await campaignModel.findOneAndUpdate({ _id: req.body.id }, { influencer_id: influencer._id, status:"waiting" })
  res.json({updatedCampaign})
});


router.get('/get-influencer-request-list/', async function(req, res, next) {

  var brand = await userModel.findOne({ token: req.body.token })

  // var brandId = brand._id 

  var returnCampaignDetail = await campaignModel.findOne({_id: brand._id })


  console.log('campagnlistrequest', returnCampaignDetail, brand)
  
  res.json({returnCampaignDetail})
});


router.get('/addcampaign', async function(req, res, next) {

  var campaignListItem = await campaignModel.find()

  res.json({campaignListItem})
});

module.exports = router;
