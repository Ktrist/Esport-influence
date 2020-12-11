import React, { useState, useEffect } from "react";
import {Link, Redirect,useParams} from 'react-router-dom'
import { connect } from 'react-redux'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {Col} from 'reactstrap';



import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CardHeader from "components/Card/CardHeader";



import image from "assets/img/signup.jpg";

const useStyles = makeStyles(styles);


 function CampaignApply(props) {
    const [campaignDetails, setCampaignDetails] = useState([])
    const params = useParams();
    console.log("props.token", props.token)

    useEffect(() => {
        async function getCampaign() {
        const response = await fetch('/get-campaign-details/'+params.id)
        const jsonResponse = await response.json()
        console.log('jsonR',jsonResponse)
        setCampaignDetails(jsonResponse.returnCampaign)
    }
    getCampaign()
      }, [params])
    
    
    const applyCampaign = async () => {

        const data = await fetch('/campaign-apply', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `id=${params.id}&token=${props.token}`
        })

        console.log(data.body + "HELLO add campaign")

    }
    
  



    // const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    // setTimeout(function () {
    //     setCardAnimation("");
    // }, 700);
    const classes = useStyles();
    // const { ...rest } = props;
    const campaignReturn = (
        <Col xs="12" lg="6" xl="4" key={params.id}>
        <Card style={{ width: "20rem" }}>
        <img
          style={{height: "180px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src="..."
          alt="Card-img-cap"
        />
          <CardBody>
            <h4 className={classes.cardTitle}>{campaignDetails.campaignName}</h4>
            <p>{campaignDetails.description}</p>
            <Button onClick={() =>applyCampaign()} color="primary">Apply Campaign</Button>
          </CardBody>
        </Card>
      </Col >
    )
    return campaignDetails ? campaignReturn : <p>Loading</p>
    }
    


function mapStateToProps(state) {
    return { token: state.token }
}


 export default connect(
    mapStateToProps,
    null
)(CampaignApply)
