import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

import profile from "assets/img/coca-logo.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { influencerUsers } from "./Influencer-list";

// import './AppInfluence.css'


export default function ProfilePage(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  
  
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
                    <h6>Campaign Title</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra, neque ut aliquet sagittis, est massa facilisis elit, ac tristique velit elit non dolor. In quam metus, aliquet sed ex sed, tempor ultricies dolor. Praesent in scelerisque neque. Phasellus vel diam quis mi porttitor fringilla.
              </p>
            </div>

            <div className="users-containers" style={{marginTop: "30px"}}>
            
            <ul>
                { influencerUsers.map(user =>
    
                <li key={user.id} className="user">
                  
                <picture className="user-picture">
                <img src={user.photoUrl} alt={`${user.name}`} />
                </picture>


                <div className="user-info-container">

                <div className="user-info">

                    <h4>{user.name}</h4>
                    <p>{user.info}</p>
                    

                </div>

                <div className="user-action">

                  <button onClick={(userId) => this.handleClick(user.id)}>Message</button>

                </div>

                </div>
                
    
                </li>
                )}

            </ul>

        </div>

          </div>
        </div>
      </div>
    </div>
  );

}
