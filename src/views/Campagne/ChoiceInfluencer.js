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


function ChoiceInfluencer(props) {

    const [requestList, setRequestList] = useState([])
  
    useEffect(() => {
        async function fetchData() {
        const response = await fetch('/get-influencer-request-list')
        const jsonResponse = await response.json()
        setRequestList(jsonResponse.returnCampaignDetail)
    }
  
    fetchData()
      }, [])


    const styles = {
        ...imagesStyles,
        cardTitle,
      };
      
      const useStyles = makeStyles(styles);
      const classes = useStyles();
      

  return (
    <Col xs="12" lg="6" xl="4">
      <Card style={{ width: "20rem" }}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src='/generique.jpg'
        alt="Card-img-cap"
      />
        <CardBody>
          <h4 className={classes.cardTitle}>{props.campaignName}</h4>
          <p>{props.description}</p>
          <Button color="primary">Accepter</Button>
          <Button color="secondary">Refuser</Button>

        </CardBody>
      </Card>
    </Col >

  );
}

function mapStateToProps(state) {
  return { token: state.token }
}

export default connect(
  mapStateToProps,
  null
)(ChoiceInfluencer)






