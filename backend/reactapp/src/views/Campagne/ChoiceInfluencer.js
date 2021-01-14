import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// core components
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinksBrand from "components/Header/HeaderLinksBrand.js";

import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.js";
import ButtonBase from '@material-ui/core/ButtonBase';

import image from "assets/img/signup.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

import "views/MessengerPage/App.css"




function ChoiceInfluencer(props) {
  const [returnCampaignDetailList, setReturnCampaignDetailList] = useState([])
  const [returnInfluenceur, setReturnInfluenceur] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_BACKEND + `/get-influencer-request-list?brandToken=${props.token}`)
      const jsonResponse = await response.json()
      console.log('jsonR', jsonResponse)
      setReturnCampaignDetailList(jsonResponse.returnCampaignDetail)
      setReturnInfluenceur(jsonResponse.influenceur)
    }

    fetchData()
  }, [props.token])

  console.log("infos campagne", returnCampaignDetailList);
  const updateStatusAcc = async () => {
    var UpdateStatusAccepted = { ...returnCampaignDetailList }
    UpdateStatusAccepted.status = 'Accepted'
    console.log(UpdateStatusAccepted)

    setReturnCampaignDetailList(UpdateStatusAccepted)

    const data = await fetch(process.env.REACT_APP_BACKEND + '/update-request-acc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `token=${props.token}`
    })


  }

  const updateStatusRef = async () => {


    var UpdateStatusRefused = { ...returnCampaignDetailList }
    UpdateStatusRefused.status = 'Refused'
    console.log(UpdateStatusRefused)

    setReturnCampaignDetailList(UpdateStatusRefused)

    const data = await fetch(process.env.REACT_APP_BACKEND + '/update-request-ref', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `token=${props.token}`
    })


  }

  const gridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const gridClasses = gridStyles();

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

  if (returnCampaignDetailList.status == 'Waiting') {

    return (
      <div>
        
        <Header
          absolute
          color="transparent"
          brand="Esport-Influence"
          rightLinks={<HeaderLinksBrand />}
          fixed
          changeColorOnScroll={{
            height: 100,
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

            <div className="current-user-container" style={{ marginTop: "85px" }}>

              <div>


                <div className="current-user-info">

                  <h3>{returnCampaignDetailList.campaignName}</h3>

                </div>
              </div>

            </div>

            <div className="users-container" style={{ marginTop: "280px" }}>

              <ul>

                <li className="user">
                 

                  <div className="user-info-container">

                    <div className="user-info">
                    
                      <h4>{returnInfluenceur.userName}</h4>
                      <p>Name: {returnInfluenceur.firstName}</p>
                      <p>Bio: {returnInfluenceur.bio}</p>
                      <p>Status: {returnCampaignDetailList.status}</p>
                      <p>Followers: {returnInfluenceur.numberFollower}</p>

                    </div>

                    <div className="user-action">

                      <Button onClick={() => updateStatusAcc()} color="primary">Accept</Button>
                      <Button onClick={() => updateStatusRef()} color="primary">Refuse</Button>
                    </div>

                  </div>

                </li>

                <div className={classes.description}>
                  <p>
                    {returnInfluenceur.description}        
              </p>
                </div>

                <div>
                  <div>
                    <GridContainer justify="left">
                      <Grid item>
                        <ButtonBase className={gridClasses.image} style={{ marginLeft: "30px" }}>
                          <img className={gridClasses.img} src={"https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-512.png"} width='45%' /><h3>Twitch</h3>
                        </ButtonBase>
                      </Grid>
                    </GridContainer>

                    <GridContainer justify="left" style={{ marginTop: '15px' }}>
                      <Grid item>
                        <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg"} width='35%' />
                      </Grid>
                      <Grid item>
                        <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"} width='35%' />
                      </Grid>
                      <Grid item>
                        <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"} width='35%' />
                      </Grid>
                    </GridContainer>

                    <GridContainer justify="left">
                      <Grid item>
                        <ButtonBase className={gridClasses.image} style={{ marginLeft: "45px", marginTop: "20px" }}>
                          <img className={gridClasses.img} src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"} width='45%' /><h3>YouTube</h3>
                        </ButtonBase>
                      </Grid>
                    </GridContainer>

                    <GridContainer justify="left" style={{ marginTop: '15px' }}>
                      <Grid item>
                        <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"} width='35%' />
                      </Grid>
                      <Grid item>
                        <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"} width='35%' />
                      </Grid>
                    </GridContainer>

                  </div>
                </div>

              </ul>

            </div>

          </div>
        </div>
      </div>
    )

  } else if (returnCampaignDetailList.status == 'Accepted') {

    return <div>
      <Header
        absolute
        color="transparent"
        brand="Esport-Influence"
        rightLinks={<HeaderLinksBrand />}
        fixed
        changeColorOnScroll={{
          height: 100,
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

          <div className="current-user-container" style={{ marginTop: "85px" }}>

            <div>

              <div className="current-user-info">

                <h3>{returnCampaignDetailList.campaignName}</h3>

              </div>
            </div>

          </div>

          <div className="users-container" style={{ marginTop: "280px" }}>

            <ul>

              <li className="user">
              

                <div className="user-info-container">

                  <div className="user-info">

                    <h4>Firstname Influencer: {returnInfluenceur.firstName}</h4>
                    <p>Status: {returnCampaignDetailList.status}</p>
                    <p>Followers: {returnInfluenceur.numberFollower}</p>

                  </div>

                </div>

              </li>

              <div className={classes.description}>
                <p>
                  {returnInfluenceur.description}
            </p>
              </div>

              <div>
                <div>
                  <GridContainer justify="left">
                    <Grid item>
                      <ButtonBase className={gridClasses.image} style={{ marginLeft: "30px" }}>
                        <img className={gridClasses.img} src={"https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-512.png"} width='45%' /><h3>Twitch</h3>
                      </ButtonBase>
                    </Grid>
                  </GridContainer>

                  <GridContainer justify="left" style={{ marginTop: '15px' }}>
                    <Grid item>
                      <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg"} width='35%' />
                    </Grid>
                    <Grid item>
                      <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"} width='35%' />
                    </Grid>
                    <Grid item>
                      <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"} width='35%' />
                    </Grid>
                  </GridContainer>

                  <GridContainer justify="left">
                    <Grid item>
                      <ButtonBase className={gridClasses.image} style={{ marginLeft: "45px", marginTop: "20px" }}>
                        <img className={gridClasses.img} src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"} width='45%' /><h3>YouTube</h3>
                      </ButtonBase>
                    </Grid>
                  </GridContainer>

                  <GridContainer justify="left" style={{ marginTop: '15px' }}>
                    <Grid item>
                      <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"} width='35%' />
                    </Grid>
                    <Grid item>
                      <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"} width='35%' />
                    </Grid>
                  </GridContainer>

                </div>
              </div>

            </ul>

          </div>

        </div>
      </div>
    </div>


  } else {
    return <div>
      <Header
        absolute
        color="transparent"
        brand="Esport-Influence"
        rightLinks={<HeaderLinksBrand />}
        fixed
        changeColorOnScroll={{
          height: 100,
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

          <div className="current-user-container" style={{ marginTop: "85px" }}>

            <div>

              <picture className="current-user-picture">
                <img alt={"brand"} src={returnCampaignDetailList.uploadedDoc} />
              </picture>

              <div className="current-user-info">

                <h3>{returnCampaignDetailList.campaignName}</h3>

              </div>
            </div>

          </div>

          <div className="users-container" style={{ marginTop: "280px" }}>

            <ul>

              <li className="user">

                <div className="user-info-container">

                  <h3>No request</h3>

                </div>

              </li>

            </ul>

          </div>

        </div>
      </div>
    </div>

  }

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






