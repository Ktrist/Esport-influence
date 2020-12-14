import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import {influencerRewards} from './RewardList';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import GradeIcon from '@material-ui/icons/Grade';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";


import brandLogo from "assets/img/coca-logo.png";
import Image from 'assets/img/campagn-apply.png';

import styles from "assets/jss/material-kit-react/views/profilePage.js";



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
    
    const themeStyles = makeStyles((theme) => ({
      root: {
      width: '100%',
      maxWidth: 360,
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
      backgroundColor: theme.palette.background.paper,
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'purple',
          },
          '&:hover fieldset': {
            borderColor: 'purple',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'purple',
          },
        },
    }}));
    
    const backgroundGridStyles = {
      paperContainer: {
          backgroundImage: `url(${Image})`,
      },
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

    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
      
  
// Elements à garder

{/* key={params.id}>
{campaignDetails.campaignName}
    <Button onClick={() =>applyCampaign()} color="primary">Apply Campaign</Button>
 */}


    const campaignReturn = (

      <div >
      <Header
        color="transparent"
        brand="Esport-Influence"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/signup.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{background: 'black'}}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6} key={params.id}>
                <div className={classes.profile}>
                  <div>
                    <img src={brandLogo} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title} >{campaignDetails.campaignName} Coca-Cola Campaign</h3>
                    </div>

                    <div>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fas fa-window-maximize"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper} >
                <NavPills 
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Description",
                      tabIcon: InfoIcon,

                      tabContent: (


                        <div className={classes.description} justify="center" style={{marginTop: '100px'}}>
                        <p>
                        {campaignDetails.description}
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
                        </p>
                      </div>

                      )
                    },
                    {
                      tabButton: "Games&Medias",
                      tabIcon: SportsEsportsIcon,
                      tabContent: (

                        <div>
                        <GridContainer justify="left">
                                <Grid item>
                                  <ButtonBase className={gridClasses.image} style={{marginLeft: "45px"}}>
                                    <img className={gridClasses.img} src={"https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-512.png"} width='75%' /><h3>Twitch</h3>
                                  </ButtonBase>
                                </Grid>
                        </GridContainer>
                        
                        <GridContainer justify="left" style={{marginTop: '50px'}}>
                                <Grid item>
                                    <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg"} width='60%' /><p>Counter-Strike: Global Offensive</p>
                                </Grid>
                                <Grid item>
                                    <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"} width='60%' /><p>League of Legends</p>
                                </Grid>
                                <Grid item>
                                    <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"} width='60%' /><p>FIFA 21</p>
                                </Grid>
                        </GridContainer>

                        <GridContainer justify="left">
                                <Grid item>
                                  <ButtonBase className={gridClasses.image} style={{marginLeft: "55px", marginTop: "30px"}}>
                                    <img className={gridClasses.img} src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"} width='75%' /><h3>YouTube</h3>
                                  </ButtonBase>
                                </Grid>
                        </GridContainer>
                        
                        <GridContainer justify="left" style={{marginTop: '50px'}}>
                                <Grid item>
                                    <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg"} width='60%' /><p>Fortnite</p>
                                </Grid>
                                <Grid item>
                                    <img className={gridClasses.img} src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"} width='60%' /><p>FIFA 21</p>
                                </Grid>
                        </GridContainer>

                        </div>

                        
                      )
                    },
                    {
                      tabButton: "Rewards",
                      tabIcon: GradeIcon,
                      tabContent: (
                      <div className={gridClasses.root} >
                        <ul >
                            { influencerRewards.map(rewards =>
                            
                            <li key={rewards.id} style={{marginTop: "50px",marginBottom: "30px"}}>
                            <Paper className={gridClasses.paper} style={backgroundGridStyles.paperContainer}>
                              <Grid container spacing={2}>
                                {/* <Grid item>
                                  <ButtonBase className={gridClasses.image}>
                                    <img className={gridClasses.img} src={rewards.imgUrl} />
                                  </ButtonBase>
                                </Grid> */}
                                <Grid item xs={12} sm container>
                                  <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                      <Typography gutterBottom variant="subtitle1">
                                        {rewards.title}
                                      </Typography>
                                      <Typography variant="body2" gutterBottom>
                                        {rewards.quest}
                                      </Typography>
                                      <Typography variant="body2" color="textSecondary">
                                        {rewards.desc}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="subtitle1">{rewards.reward}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Paper>
                            </li>
                            )}
                        </ul>
                      </div>
                      )
                    }
                  ]}
                />
                <Button onClick={() =>applyCampaign()} color="primary">Apply Campaign</Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>

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
