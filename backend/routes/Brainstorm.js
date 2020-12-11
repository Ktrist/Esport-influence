// router.post('/addcampaign', async function(req, res, next) {
  
//     // We want to update our onGoingTicket for our user
//     var user = await userModel.findOne({token:req.body.token})
//     var campagne = new campagneModel({
//       campaignName: req.body.nameCampaignFromFront,
//       dateStart: req.body.dateStartFromFront,
//       dateEnd: req.body.dateEndFromFront,
//       status:'created',
//       description: req.body.descriptionFromFront,
//       audienceCriteria: req.body.audienceFromFront,
//       uploadedDoc: req.body.uploadDocFromFront,
//       brand_id: user._id // id de la marque récupérer a la ligne 175 avec le token 
//     })
//       var campagneSave = await campagne.save()
//      user.campagnes.push(campagneSave._id) // ajouter la nouvelle id de la creation de campagne
  
//     var userSaved = await user.save()
  
//     console.log(userSaved)
  
//     res.json({userSaved})
    
//   });

useEffect(() => {
    async function fetchData() {
    const response = await fetch('/addcampaign')
    const jsonResponse = await response.json()
    setCampaignList(jsonResponse.campaignListItem)
}
fetchData()
  }, [])
//   var campagne = await campagneModel.findOne({id:req.body.id})
//   .updateOne({}, { influencer_id: req.body.id, status:"waiting" });

//   var campagneSaved = await campagne.save()

//   res.json({campagneSaved})
  
// });
  