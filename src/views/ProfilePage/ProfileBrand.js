import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FolderIcon from '@material-ui/icons/Folder';

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
import HeaderLinksBrand from "components/Header/HeaderLinksBrand";


import { connect } from 'react-redux'

import profile from "assets/img/logo-company.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import "../ProfilePage/App.css"




function ProfileBrandPage(props) {




  console.log('TOKEN BABY', props)

  const [companyDetails, setCompanyDetails] = useState([])



  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/branddetails?brandToken=${props.token}`)
      const jsonResponse = await response.json()

      setCompanyDetails(jsonResponse.brandProfil)
    }
    fetchData()
  }, [])

  const useStyles = makeStyles(styles);
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
        rightLinks={<HeaderLinksBrand />}
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
                    <h3 className={classes.title}>{companyDetails.firstName}</h3>
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
            <div className={classes.description}>
              <h8>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
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
                      tabContent: (
                      
                        
                        <GridContainer justify="center" direction="column">
                          <GridItem xs={12}> 
                          <TextField color="primary"  label={companyDetails.firstName}/>
                          </GridItem>
                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={companyDetails.lastName}/>
                          </GridItem>

                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={companyDetails.phone}/>
                          </GridItem>

                          <GridItem xs={12}>
                          <TextField color="primary" disabled id="standard-disabled" label={companyDetails.email}/>
                          </GridItem>
                         


                          
                        </GridContainer>

                        
                        

                      )
                    },
                    {
                      tabButton: "Current Campaign",
                      tabIcon: CheckCircleIcon,
                      tabContent: (
                        <GridContainer justify="center" direction="column">
                          <GridItem xs={12}>
                            <img
                              alt="currentCampaign1"
                              src={"https://pbs.twimg.com/media/CWH5mtYXAAImgdt.jpg"}
                              className={navImageClasses}
                            />

                          </GridItem>
                          
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Ended Campaign",
                      tabIcon: FolderIcon,
                      tabContent: (
                        <GridContainer justify="center" direction="column">
                          <GridItem xs={12}>
                            <img
                              alt="endedCampaign1"
                              src={"https://esports-marketing-blog.com/wp-content/uploads/esport-sponsoring-coca-cola-league-of-legends-riot-games.jpg"}
                              className={navImageClasses}
                            />

                          </GridItem>

                          <GridItem xs={12}>
                            <img
                              alt="endedCampaign1"
                              src={"https://www.influenth.com/wp-content/uploads/2016/10/coca-cola-gaming-awards-youtube-influenth.jpg"}
                              className={navImageClasses}
                            />

                          </GridItem>
                          
                          <GridItem xs={12}>
                            <img
                              alt="endedCampaign1"
                              src={"https://esports.com.vn/wp-content/uploads/2019/08/works-02.jpg"}
                              className={navImageClasses}
                            />

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
)(ProfileBrandPage)
