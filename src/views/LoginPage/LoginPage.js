import React , { useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom'

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

import image from "assets/img/signup.jpg";
import { connect } from 'react-redux'


const useStyles = makeStyles(styles);



function LoginPage(props) {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [userExists, setUserExists] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [roleState, setRoleState]= useState('')
  const [listErrorsSignIn, setErrorsSignIn] = useState([])

 
 
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);



  const classes = useStyles();
  const { ...rest } = props;

  var handleSubmitSignIn = async () => {
 
    const data = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
    })

    const body = await data.json()
console.log(body)
    setRoleState(body.user.role)
    
    if(body.result == true){
      props.addToken(body.token)
      setUserExists(true)
      
    }  else {
      setErrorsSignIn(body.error)
    }
  }

  if(roleState == 'brand'){
    return <Redirect to='/choiceinfluencer' />
  } else if (roleState == 'influenceur'){
    return <Redirect to='/select-campaign' />

  }
  
  var tabErrorsSignin = listErrorsSignIn.map((error,i) => {
    return(<p>{error}</p>)
  })


  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Esport-Influence"
        rightLinks={<HeaderLinks />}
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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]} style={{backgroundColor: "transparent", color:"white"}}>
                <form className={classes.form}>
                  <CardBody>
                  <CustomInput
                      inputProps={{
                        onChange: (e) => setSignInEmail(e.target.value)
                      }}
                      labelText="Email*"
                      id="Email"

                      formControlProps={{
                        fullWidth: true
                      }}
                    />

                    <CustomInput
                      inputProps={{
                        onChange: (e) => setSignInPassword(e.target.value)
                      }}
                      labelText="password"
                      id="password"
                      type="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button onClick={() => handleSubmitSignIn()} variant="contained" color="primary" size="lg">
                      CONNEXION
                    </Button>
                  </CardFooter>
                </form>
              </Card>

            </GridItem>
          </GridContainer>
        </div>
      </div>
<<<<<<< HEAD
=======


>>>>>>> c09401e9e72b98ebde14af9e176ecac7045b584e
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
)(LoginPage)
