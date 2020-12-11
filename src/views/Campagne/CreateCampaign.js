import React, { useState } from "react";
import {Link, Redirect} from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js"
import { connect } from 'react-redux'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CardHeader from "components/Card/CardHeader";

import image from "assets/img/signup.jpg";

import "../Campagne/App.css"
import { purple } from "@material-ui/core/colors";

import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';



const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: purple,
    },
  });

const useStyles = makeStyles(styles);

const themeStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'purple',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'purple',
        },
    }},
    // input: {
    //   display: 'show',
    // },
  }));


function CreateCampaign(props) {

    // GLOBAL STATE 
    const [nameCampaign, setNameCampaign] = useState('')
    const [description, setDescription] = useState('Controlled')
    const [audience, setAudience] = useState('')
    const [uploadDoc, setUploadDoc] = useState('')
    const [dateStart, setStartDate] = useState(new Date());
    const [dateEnd, setEndDate] = useState(new Date());


    var handleSubmitCampaign = async () => {

        const data = await fetch('/addcampaign', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `nameCampaignFromFront=${nameCampaign}&dateStartFromFront=${dateStart}&dateEndFromFront=${dateEnd}&descriptionFromFront=${description}&audienceFromFront=${audience}&uploadDocFromFront=${uploadDoc}&token=${props.token}`
        })

        console.log(data.body + "HELLO add campaign")

    }

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const themeClasses = themeStyles();
    const { ...rest } = props;

    const minSubscribers = [
        {
          value: 'Number',
          label: '0 - 500',
        },
        {
          value: 'EUR',
          label: '500 - 1000',
        },
        {
          value: 'BTC',
          label: '1000 - 5000 ',
        },
        {
          value: 'JPY',
          label: '10k+',
        },
      ];

      const maxSubscribers = [
        {
          value: 'Number',
          label: '500 - 1000',
        },
        {
          value: 'EUR',
          label: '1000 - 5000',
        },
        {
          value: 'BTC',
          label: '5000 - 10000 ',
        },
        {
          value: 'JPY',
          label: '10k+',
        },
      ];
    
          return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="Esport-Influence"
                rightLinks={<HeaderLinks />}
                leftLinks={"/landing-page"}
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
                        <GridItem xs={6} sm={6} md={6}>
                            <Card className={classes[cardAnimaton]} style={{ backgroundColor: "transparent", color: "white" }}>
                                <form className={classes.form}>
                                    <CardHeader className={classes.CardHeader}>
                                        <h2 className={classes.title}>Create your Campaign</h2>
                                    </CardHeader>
                                    <CardBody>

                                        <CustomInput inputProps={{ onChange: (e) => setNameCampaign(e.target.value), }}
                                            labelText="Campaign name"
                                            id="nameCampaign"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />

                                            {/* Penser à mettre au format FR et à créer des conditions pour ne pas pouvoir mettre anterieur.  */}
                                            <div>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                                <Grid container justify="space-around">
                                                <ThemeProvider theme={defaultMaterialTheme}>
                                                    <KeyboardDatePicker
                                                    
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="start-date"
                                                    label="Start Date"
                                                    value={dateStart}
                                                    onChange={date => setStartDate(date)}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    />
                                                    </ThemeProvider>

                                                    <ThemeProvider theme={defaultMaterialTheme}>
                                                    <KeyboardDatePicker
                                                    margin="normal"
                                                    id="end-date"
                                                    label="End Date"
                                                    format="MM/dd/yyyy"
                                                    value={dateEnd}
                                                    onChange={date => setEndDate(date)}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                    />
                                                    </ThemeProvider>
                                                </Grid>
                                                </MuiPickersUtilsProvider>
                                                </div>


                                        {/* <CustomInput inputProps={{ onChange: (e) => setDescription(e.target.value), }}
                                            labelText="Description"
                                            id="description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        /> */}

                                        <form className={themeClasses.root} noValidate autoComplete="off">
                                            <TextField
                                            id="outlined-multiline-static"
                                            label="Description"
                                            multiline
                                            rows={4}
                                            defaultValue="Describe your campaign"
                                            variant="outlined"
                                            />
                                        </form>


                                        {/* <CustomInput inputProps={{ onChange: (e) => setAudience(e.target.value), }}
                                            labelText="Audience criteria"
                                            id="audience"
                                            formControlProps={{
                                                fullWidth: true
                                                                                }}
                                        /> */}

                                        <form noValidate autoComplete="off">
                                            <div style={{paddingTop:'30px'}}>
                                                <TextField className="size-subscribers"
                                                id="standard-select-currency"
                                                select
                                                label="Subscribers min."
                                                value={audience}
                                                onChange={setAudience}
                                                helperText="Please select min/max subscribers"
                                                >
                                                {minSubscribers.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                                </TextField>
                                                <TextField
                                                id="standard-select-currency-max"
                                                select
                                                label="Subscribers max."
                                                value={audience}
                                                onChange={setAudience}
                                                helperText="Please select your max. subscribers"
                                                >
                                                {maxSubscribers.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                                </TextField>
                                            </div>
                                        </form>

                                        <div className={classes.root} style={{marginTop: '80px'}}
                                        >{"Share your campaign files"}
                                        </div>
                                        <div className={themeClasses.root} style={{marginBottom: '80px'}}>
                                        <input
                                        accept="image/*"

                                        // UPLOAD DOC
                                        value={setUploadDoc}
                                        className={themeClasses.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        />
                                        </div>

                                    </CardBody>

                                    <CardFooter className={classes.cardFooter}>
                                        <Button onClick={() => handleSubmitCampaign()} color="primary" size="lg">
                                            Confirm
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
)(CreateCampaign)
