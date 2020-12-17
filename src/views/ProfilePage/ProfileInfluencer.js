import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import Favorite from "@material-ui/icons/Favorite";
import WorkIcon from '@material-ui/icons/Work';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from '@material-ui/core/TextField';
import HeaderLinksInfluencer from "components/Header/HeaderLinksInfluencer";


import profile from "assets/img/faces/christian.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { connect } from 'react-redux'

import "../ProfilePage/App.css"
import { green } from "@material-ui/core/colors";







function ProfilePage(props) {

  const useStyles = makeStyles(styles);

  console.log('TOKEN BABY', props)

  const [influencerDetails, setInfluencerDetails] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/influencerdetails?influencerToken=${props.token}`)
      const jsonResponse = await response.json()

      setInfluencerDetails(jsonResponse.influencerProfil)
    }
    fetchData()
  }, [])






  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);



  return (

    <div>
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


      <Parallax small filter image={require("assets/img/signup.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{influencerDetails.userName}</h3>
                  </div>
                  <div>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Link to="https://www.twitch.tv/remir95">
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitch"} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h8>
              {influencerDetails.bio}
              </h8>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              
                <NavPills 
               
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Infos",
                      tabIcon: InfoIcon,
                      tabContent:(
                     
                        <GridContainer justify="center" direction="column">
                          <GridItem xs={12}>
                          <TextField color="primary"  label={influencerDetails.firstName}/>
                          </GridItem>
                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={influencerDetails.lastName}/>
                          </GridItem>

                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={influencerDetails.phone}/>

                          </GridItem>

                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={influencerDetails.email}/>
                          </GridItem>


                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={influencerDetails.numberFollower}/>
                          </GridItem>
                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={influencerDetails.favoriteGame}/>
                          </GridItem>

                          

                        </GridContainer>



                      )
                    },
                  
                    {
                      tabButton: "My Last Campaign",
                      tabIcon: WorkIcon,
                      tabContent: (
                        <GridContainer justify="center" direction="column">
                          <GridItem xs={12}>
                            <img
                              alt="Campaign1"
                              src={"https://static1-fr.millenium.gg/articles/1/36/76/71/@/1376523-100786693-2721571934743621-147347026412044288-o-article_m-1.jpg"}
                              className={navImageClasses}
                            />

                          </GridItem>


                          <GridItem xs={12}>
                            <img
                              alt="Campaign2"
                              src={"https://www.stevenagefc.com/siteassets/image/burger-king-stevenage-challenge/stevenage-pr.jpg/Large"}
                              className={navImageClasses}
                            />

                          </GridItem>

                          <GridItem xs={12}>
                            <img
                              alt="Campaign3"
                              src={"https://images.contentstack.io/v3/assets/bltad9188aa9a70543a/bltf5e67a12a9bcabc8/5f6be4ec5e85ad4dee1914be/20200923_Axe_Worlds_1600x900.jpg?width=3200&height=1800"}
                              className={navImageClasses}
                            />

                          </GridItem>

                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite Game",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center" style={{ marginTop: "50px" }}>
                          <GridItem xs={12} lg={6}>
                            <img
                              alt="game1"
                              src={"https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg"}
                              className={navImageClasses}
                            />
                            <h7>League of Legends</h7>

                          </GridItem>


                          <GridItem xs={12} lg={6}>
                            <img
                              alt="game2"
                              src={"https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Warzone-285x380.jpg"}
                              className={navImageClasses}
                            />
                            <h7>Call of Duty: Warzone</h7>

                          </GridItem>

                          <GridItem xs={12} lg={6}>
                            <img
                              alt="game3"
                              src={"https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2021-285x380.jpg"}
                              className={navImageClasses}
                            />
                            <h7>Fifa 21</h7>

                          </GridItem>

                          <GridItem xs={12} lg={6}>
                            <img
                              alt="game4"
                              src={"https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-285x380.jpg"}
                              className={navImageClasses}
                            />
                            <h7>Rocket League</h7>

                          </GridItem>

                          <GridItem xs={12} lg={6}>
                            <img
                              alt="game5"
                              src={"https://static-cdn.jtvnw.net/ttv-boxart/NBA%202K21-285x380.jpg"}
                              className={navImageClasses}
                            />
                            <h7>NBA 2K21</h7>

                          </GridItem>

                        </GridContainer>
                      )
                    }
                  ]}
                
                />
             
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );

}

function mapStateToProps(state) {
  return { token: state.token }
}

export default connect(
  mapStateToProps,
  null
)(ProfilePage)