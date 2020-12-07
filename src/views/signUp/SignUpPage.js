import React, {useState} from "react";
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

const useStyles = makeStyles(styles);


export default function SignUpPage(props) {
// STATE FOR COMPANY
const [signUpFirstNameCompany, setSignUpFirstNameCompany] = useState('')
const [signUpEmailCompany, setSignUpEmailCompany] = useState('')
const [signUpPasswordCompany, setSignUpPasswordCompany] = useState('')
const [signUpCompagnyCompany, setSignUpCompagnyCompany] = useState('')
const [signUpLastNameCompany, setSignUpLastNameCompany] = useState('')
const [signUpPhoneCompany, setSignUpPhoneCompany] = useState('')


//  STATE FOR INFLUENCER
const [signUpUsernameInfluencer, setSignUpUsernameInfluencer] = useState('')
const [signUpFirstNameInfluencer, setSignUpFirstNameInfluencer] = useState('')
const [signUpLastNameInfluencer, setSignUpLastNameInfluencer] = useState('')
const [signUpEmailInfluencer, setSignUpEmailInfluencer] = useState('')
const [signUpPhoneInfluencer, setSignUpPhoneInfluencer] = useState('')
const [signUpFollowerInfluencer, setSignUpFollowerInfluencer] = useState('')
const [signUpFavoriteGamesInfluencer, setSignUpFavoriteGamesInfluencer ] = useState('')
const [signUpTwitchInfluencer, setSignUpTwitchInfluencer ] = useState('')
const [signUpInstaInfluencer, setSignUpInstaInfluencer ] = useState('')
const [signUpFacebookInfluencer, setSignUpFacebookInfluencer  ] = useState('')
const [signUpYoutubeInfluencer, setSignUpYoutubeInfluencer  ] = useState('')





var handleSubmitSignupCompany = async () => {
    
  const data = await fetch('/sign-up', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `companyFromFront=${signUpCompagnyCompany}&firstNameFromFront=${signUpFirstNameCompany}&lastNameFromFront=${signUpLastNameCompany}&emailFromFront=${signUpEmailCompany}&phoneFromFront=${signUpPhoneCompany}&passwordFromFront=${signUpPasswordCompany}`
  })

  // const body = await data.json()

  // if(body.result == true){
  //   props.addToken(body.token)
  //   setUserExists(true)
    
  // } else {
  //   setErrorsSignup(body.error)
  // }
}


var handleSubmitSignupInfluencer = async () => {
    
  const data = await fetch('/sign-up', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `companyFromFront=${signUpCompagnyCompany}&firstNameFromFront=${signUpFirstNameCompany}&lastNameFromFront=${signUpLastNameCompany}&emailFromFront=${signUpEmailCompany}&phoneFromFront=${signUpPhoneCompany}&passwordFromFront=${signUpPasswordCompany}`
  })

  // const body = await data.json()

  // if(body.result == true){
  //   props.addToken(body.token)
  //   setUserExists(true)
    
  // } else {
  //   setErrorsSignup(body.error)
  // }
}







  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
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
          height:100,
          color:"dark"
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url("+ image +")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer style={{display: "flex"}}>
            <GridItem xs={6} sm={6} md={6}>
              <Card className={classes[cardAnimaton]} style={{backgroundColor: "transparent", color:"white"}}>
                <form className={classes.form}>
                <CardHeader className={classes.CardHeader}>
                      <h2 className={classes.title}>Sign-up Company</h2>
                  </CardHeader>
                  <CardBody>

                  <CustomInput onChange={(e) => setSignUpCompagnyCompany(e.target.value)} 
                      labelText="Company*"
                      id="company"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpFirstNameCompany(e.target.value)} 
                      labelText="Firstname*"
                      id="firstname"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpLastNameCompany(e.target.value)} 
                      labelText="Lastname*"
                      id="lastName"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpEmailCompany(e.target.value)} 
                      labelText="Email*"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />


                    <CustomInput onChange={(e) => setSignUpPhoneCompany(e.target.value)} 
                      labelText="Phone*"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />


                      <CustomInput onChange={(e) => setSignUpPasswordCompany(e.target.value)} 
                      labelText="Password*"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                  </CardBody>
                  
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={() => handleSubmitSignupCompany()} simple color="primary" size="lg">
                      CONNECTION
                    </Button>
                  </CardFooter>
                </form>
              </Card>
              </GridItem>

              <GridItem xs={6} sm={6} md={6} style={{display: "flex"}}>


              <Card className={classes[cardAnimaton]} style={{backgroundColor: "transparent", color:"white"}}>
                <form className={classes.form}>
                <CardHeader className={classes.CardHeader}>
                <h2 className={classes.title}>Sign-up Influencer</h2>
                  </CardHeader>
                  <CardBody>

                  <CustomInput onChange={(e) => setSignUpUsernameInfluencer(e.target.value)} 
                      labelText="Username*"
                      id="Username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpFirstNameInfluencer(e.target.value)} 
                      labelText="Firstname*"
                      id="firstname"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpLastNameInfluencer(e.target.value)} 
                      labelText="Lastname*"
                      id="lastName"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpEmailInfluencer(e.target.value)} 
                      labelText="Email*"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />


                    <CustomInput onChange={(e) => setSignUpPhoneInfluencer(e.target.value)} 
                      labelText="Phone*"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpFollowerInfluencer(e.target.value)} 
                      labelText="Number of followers*"
                      id="followers"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpFavoriteGamesInfluencer(e.target.value)} 
                      labelText="Favorite games"
                      id="games"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpTwitchInfluencer(e.target.value)} 
                      labelText="Twitch url"
                      id="twitch"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpInstaInfluencer(e.target.value)} 
                      labelText="Instagram url"
                      id="instagram"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpFacebookInfluencer(e.target.value)} 
                      labelText="Facebook url"
                      id="facebook"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput onChange={(e) => setSignUpYoutubeInfluencer(e.target.value)} 
                      labelText="Youtube url"
                      id="youtube"
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
