import React, { useState, useEffect }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import {Col} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { createAwait } from 'typescript';




function ChoiceInfluencer(props) {
    const [returnCampaignDetailList, setReturnCampaignDetailList] = useState([])
    const [returnInfluenceur, setReturnInfluenceur] = useState([])
 





    useEffect(() => {
        async function fetchData() {
        const response = await fetch(`/get-influencer-request-list?brandToken=${props.token}`)
        const jsonResponse = await response.json()
        console.log('jsonR',jsonResponse)
        setReturnCampaignDetailList(jsonResponse.returnCampaignDetail)
        setReturnInfluenceur(jsonResponse.influenceur)


    }
    fetchData()
      }, [props.token])

      console.log("infos campagne", returnCampaignDetailList);


      const updateStatusAcc = async () => {


        var UpdateStatusAccepted = {...returnCampaignDetailList}
        UpdateStatusAccepted.status = 'accept'
        console.log(UpdateStatusAccepted)

        setReturnCampaignDetailList(UpdateStatusAccepted)


        const data = await fetch('/update-request-acc', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })
       
       
    }

    const updateStatusRef = async () => {


      var UpdateStatusRefused = {...returnCampaignDetailList}
      UpdateStatusRefused.status = 'refused'
      console.log(UpdateStatusRefused)

      setReturnCampaignDetailList(UpdateStatusRefused)

        const data = await fetch('/update-request-ref', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })


    }

    if(status == 'accept '){
   
        return <Redirect to='/choiceinfluencer' />
      } else if (status == 'waiting '){

        return <Redirect to='/select-campaign' />
    
      }

    const styles = {
        ...imagesStyles,
        cardTitle,
      };
      
      const useStyles = makeStyles(styles);
      const classes = useStyles();

     if(returnCampaignDetailList.status == 'waiting'){
        return <Col xs="12" lg="6" xl="4"  key={props.token}>
        <Card style={{ width: "20rem" }}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src='/generique.jpg'
          alt="Card-img-cap"
        />
          <CardBody>
            <h4 className={classes.cardTitle}>{returnCampaignDetailList.campaignName}</h4>
            <h4 className={classes.cardTitle}>{returnCampaignDetailList.status}</h4>
            <h4 className={classes.cardTitle}>{returnInfluenceur.firstName}</h4>
            <h4 className={classes.cardTitle}>{returnInfluenceur.favoriteGame}</h4>
            <h4 className={classes.cardTitle}>{returnInfluenceur.numberFollower}</h4>
  
            <p>HH</p>
            
            <Button onClick={() =>updateStatusAcc()} color="primary">Accepter</Button>
            <Button onClick={() =>updateStatusRef()}  color="secondary">Refuser</Button>
  
          </CardBody>
        </Card>
      </Col >
      } else if (returnCampaignDetailList.status == 'accept'){
        return <Col xs="12" lg="6" xl="4"  key={props.token}>
        <Card style={{ width: "20rem" }}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src='/generique.jpg'
          alt="Card-img-cap"
        />
          <CardBody>
            <h4 className={classes.cardTitle}>{returnCampaignDetailList.campaignName}</h4>
  
            <h4 className={classes.cardTitle}>{returnInfluenceur.firstName}</h4>
            <h4 className={classes.cardTitle}>{returnInfluenceur.favoriteGame}</h4>
            <h4 className={classes.cardTitle}>{returnInfluenceur.numberFollower}</h4>

           
            <h4 className={classes.cardTitle}>LINK TO MESSAGE</h4>

            <h4 className={classes.cardTitle}>{returnCampaignDetailList.status}</h4>
  
          </CardBody>
        </Card>
      </Col >
    
      } else {
       return <h4 className={classes.cardTitle}>NO REQUEST</h4>

      } 

      




    //   const requestReturn = (
      
    //   <Col xs="12" lg="6" xl="4"  key={props.token}>
    //   <Card style={{ width: "20rem" }}>
    //   <img
    //     style={{height: "180px", width: "100%", display: "block"}}
    //     className={classes.imgCardTop}
    //     src='/generique.jpg'
    //     alt="Card-img-cap"
    //   />
    //     <CardBody>
    //       <h4 className={classes.cardTitle}>{returnCampaignDetailList.campaignName}</h4>
    //       <h4 className={classes.cardTitle}>{returnCampaignDetailList.status}</h4>

    //       <h4 className={classes.cardTitle}>{returnInfluenceur.firstName}</h4>
    //       <h4 className={classes.cardTitle}>{returnInfluenceur.favoriteGame}</h4>
    //       <h4 className={classes.cardTitle}>{returnInfluenceur.numberFollower}</h4>

    //       <p>HH</p>

    //       <Button onClick={() =>updateStatusAcc()} color="primary">Accepter</Button>
    //       <Button onClick={() =>updateStatusRef()}  color="secondary">Refuser</Button>

    //     </CardBody>
    //   </Card>
    // </Col >)

   
  // return returnCampaignDetailList ? requestReturn : <p>No request</p>

}

      
function mapStateToProps(state) {
    return { token: state.token }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCampaignList: function (campaign) {
            dispatch({
                type: 'addCampaign',
                campaignAdded: campaign
            })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoiceInfluencer)






