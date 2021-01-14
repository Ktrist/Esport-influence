import React, { useState, useEffect }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import {Col, Row} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { createAwait } from 'typescript';
import RequestList from './RequestList';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinksInfluencer from "components/Header/HeaderLinksInfluencer.js";


import image from "assets/img/signup.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import "views/MessengerPage/App.css"



function RequestInfluencer(props) {

    const [returnCampaignDetailList, setReturnCampaignDetailList] = useState([])
    const [returnBrand, setReturnBrand] = useState([])
 



    useEffect(() => {
        async function fetchData() {
        const response = await fetch(process.env.REACT_APP_BACKEND + `/get-request-list-influencer?influencerToken=${props.token}`)
        const jsonResponse = await response.json()
        console.log('jsonR',jsonResponse)
        setReturnCampaignDetailList(jsonResponse.returnCampaignDetail)
        setReturnBrand(jsonResponse.brand)


    }
    fetchData()
      }, [props.token])

      console.log("infos campagne", returnCampaignDetailList);

      var returnRequestList = returnCampaignDetailList.map((mycampaign, i) => {
    
        return (<RequestList key={i} campaignName={mycampaign.campaignName} campaignStatus={mycampaign.status} campaignDesc={mycampaign.description} campaignUpload={mycampaign.uploadedDoc}/>)
    })

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          marginLeft: 30,
          border: "1mm ridge black"
        },
        media: {
          height: 140,
        },
      });

      const classes = useStyles();
      const { ...rest } = props;

      if(returnCampaignDetailList.status == 'Waiting' || 'Accepted'|| 'Refused'){
        return<div>
        <Header
          color="transparent"
          brand="Esport-Influence"
          rightLinks={<HeaderLinksInfluencer />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "dark"
          }}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: '100vh',
          }}
          >

        <div className="users" key={props.token}>

            <div className="current-user-container" style={{marginTop: "125px", marginRight:"950px"}}>

                <div>

                    <div className="current-user-info">

                        <h5>My last requests</h5>

                    </div>

                </div>

            </div>

        </div>
        <Row>
        {returnRequestList}
        </Row>
        </div> 
        </div>

      }  else {
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
)(RequestInfluencer)






