import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import Favorite from "@material-ui/icons/Favorite";
import Check from "@material-ui/icons/Check";
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

// import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

import profile from "assets/img/faces/christian.jpg";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";




export default function ProfilePage(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  function CheckboxRadioSwitch(){
    const [checked, setChecked] = useState([24, 22]);
    const newChecked = [...checked];
    setChecked(newChecked);
    };

  
  
  return (
    <div>
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
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Vincent Gomes</h3>
                    <h6>Fifa 20 Influencer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitch"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
              </p>
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

                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="First Name"
                              id="float"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                              labelText="Last Name"
                              id="float"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>

                          <GridItem xs={12} sm={6} md={6}>
                            <CustomInput
                              labelText="Phone Number"
                              id="float"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>

                          <GridItem xs={12} sm={6} md={6}>
                            <CustomInput
                              labelText="Email"
                              id="float"
                              formControlProps={{
                                fullWidth: true
                              }}
                            />
                          </GridItem>
                        </GridContainer>

                      )
                    },
                    {
                      tabButton: "My Last Campaign",
                      tabIcon: WorkIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
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
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                onClick={() => CheckboxRadioSwitch()}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{ checked: classes.checked }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="League of Legends"
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <FormControlLabel
                              control={
                                <Checkbox

                                onClick={() => CheckboxRadioSwitch()}
                                  checkedIcon={<Check className={classes.checkedIcon} />}
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{ checked: classes.checked }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Fifa 2020"
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
