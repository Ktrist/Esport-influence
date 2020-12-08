import React, { useState } from "react";
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
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CardHeader from "components/Card/CardHeader";

import image from "assets/img/signup.jpg";

import {connect} from 'react-redux'


const useStyles = makeStyles(styles);


function SignUpInfluencer(props) {

  // GLOBAL STATE 
  const [signUpFirstName, setSignUpFirstName] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpLastName, setSignUpLastName] = useState('')
  const [signUpPhone, setSignUpPhone] = useState('')
  const [signUpUsernameInfluencer, setSignUpUsernameInfluencer] = useState('')
  const [signUpFollowerInfluencer, setSignUpFollowerInfluencer] = useState('')
  const [signUpFavoriteGamesInfluencer, setSignUpFavoriteGamesInfluencer] = useState('')
  const [signUpUrlSocialNetworkInfluencer, setSignUpUrlSocialNetworkInfluencer] = useState('')


  var handleSubmitSignupInfluencer = async () => {
    console.log("HELLO WORLD")

    const data = await fetch('/sign-up/influencer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `firstNameFromFront=${signUpFirstName}&lastNameFromFront=${signUpLastName}&emailFromFront=${signUpEmail}&phoneFromFront=${signUpPhone}&passwordFromFront=${signUpPassword}&usernameFromFront=${signUpUsernameInfluencer}&numberFollowerFromFront=${signUpFollowerInfluencer}&favoriteGameFromFront=${signUpFavoriteGamesInfluencer}&urlSocialNetworkFromFront=${signUpUrlSocialNetworkInfluencer}`
    })
    console.log(data.body + "HELLO WORLD")

    // const body = await data.json()

    // if(body.result == true){
    //   props.addToken(body.token)
    //   setUserExists(true)

    // } else {
    //   setErrorsSignup(body.error)
    // }
  }


  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Esport-Influence"
        rightLinks={<HeaderLinks />}
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
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">

            <GridItem xs={6} sm={6} md={6} style={{ display: "flex" }}>


              <Card className={classes[cardAnimaton]} style={{ backgroundColor: "transparent", color: "white" }}>
                <form className={classes.form}>
                  <CardHeader className={classes.CardHeader}>
                    <h2 className={classes.title}>Sign-up Influencer</h2>
                  </CardHeader>
                  <CardBody>

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpUsernameInfluencer(e.target.value)
                      }}
                      labelText="Username*"
                      id="Username"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpFirstName(e.target.value)
                      }}
                      labelText="Firstname*"
                      id="firstname"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpLastName(e.target.value),
                      }}
                      labelText="Lastname*"
                      id="lastName"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                      <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpPassword(e.target.value),
                      }}
                        labelText= "Password*"
                        id="password"
                      
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpEmail(e.target.value)
                      }}
                      labelText="Email*"
                      id="email"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />


                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpPhone(e.target.value),
                      }}
                      labelText="Phone*"
                      id="phone"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpFollowerInfluencer(e.target.value),
                      }}
                      labelText="Number of followers*"
                      id="followers"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpFavoriteGamesInfluencer(e.target.value),
                      }}
                      labelText="Favorite games"
                      id="games"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignUpUrlSocialNetworkInfluencer(e.target.value),
                      }}
                      labelText="URL Social Network "
                      id="Social Network"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={() => handleSubmitSignupInfluencer()} simple color="primary" size="lg">
                      CONNECTION
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

      </div>
    </div>


  );
}

function mapDispatchToProps(dispatch){
  return {
    addToken: function(token){
      dispatch({type: 'addToken', token: token})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUpInfluencer)
