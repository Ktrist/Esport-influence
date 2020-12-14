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
    const [returnCampaignDetailList, setReturnCampaignDetailList] = useState([])
    const [returnInfluenceur, setReturnInfluenceur] = useState([])
    const [influencerSatusList, setInfluencerSatusList] = useState([])


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

      console.log(returnInfluenceur)

      const updateStatusAcc = async () => {

        const data = await fetch('/update-request-acc', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })

        console.log(data.body + "update status Accepter")

    }

    const updateStatusRef = async () => {

        const data = await fetch('/update-request-ref', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${props.token}`
        })

        console.log(data.body + "update status Refuser")

    }
  //   var statusList = returnCampaignDetailList.map((ChoiceInfluencer,i) => {
  //     var result = influencerSatusList.find(element => element.status == ChoiceInfluencer.status)
  //     var status = "Refused"
  //     if (result != "Refused") {
  //         status = "Accepted"
  //       }    
  //     return (<resquestReturn key={i}  campaignName={returnCampaignDetailList.campaignName}/>)
  // })

  // var movieList = moviesData.map((movie, i) => {
  //   var result = moviesWishList.find(element => element.name == movie.name)
  //   var isSee = false
  //   if (result != undefined) {
  //     isSee = true
  //   }
  //   return (<Movie key={i} movieSee={isSee} handleClickDeleteMovieParent={handleClickDeleteMovie} handleClickAddMovieParent={handleClickAddMovie} movieName={movie.title} movieDesc={movie.overview} movieImg={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} globalRating={movie.vote_average} globalCountRating={movie.vote_count} />)
  // })

    const styles = {
        ...imagesStyles,
        cardTitle,
      };
      
      const useStyles = makeStyles(styles);
      const classes = useStyles();
      
      const requestReturn = (
      
      <Col xs="12" lg="6" xl="4"  key={props.token}>
      <Card style={{ width: "20rem" }}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src='/generique.jpg'
        alt="Card-img-cap"
      />
        <CardBody>
          {/* <h4 className={classes.cardTitle}>{status}</h4> */}
          <h4 className={classes.cardTitle}>{returnCampaignDetailList.campaignName}</h4>

          <p>HH</p>

          <Button onClick={() =>updateStatusAcc()} color="primary">Accepter</Button>
          <Button onClick={() =>updateStatusRef()}  color="secondary">Refuser</Button>

        </CardBody>
      </Card>
    </Col >)
   
  return returnCampaignDetailList ? requestReturn : <p>Loading</p>

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






