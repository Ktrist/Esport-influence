import React, { useState } from "react";
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
import CardHeader from "components/Card/CardHeader";

import image from "assets/img/signup.jpg";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'

const useStyles = makeStyles(styles);


function CreateCampaign(props) {

    // GLOBAL STATE 
    const [nameCampaign, setNameCampaign] = useState('')
    const [description, setDescription] = useState('')
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
    const { ...rest } = props;
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
                                        <h2 className={classes.title}>Création de votre campagne de communication</h2>
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
                                            <DatePicker selected={dateStart} onChange={date => setStartDate(date)} />

                                            <DatePicker selected={dateEnd} onChange={date => setEndDate(date)} />


                                        <CustomInput inputProps={{ onChange: (e) => setDescription(e.target.value), }}
                                            labelText="Description"
                                            id="description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />

                                        <CustomInput inputProps={{ onChange: (e) => setAudience(e.target.value), }}
                                            labelText="Audience criteria"
                                            id="audience"
                                            formControlProps={{
                                                fullWidth: true
                                                                                }}
                                        />


                                        <CustomInput inputProps={{ onChange: (e) => setUploadDoc(e.target.value), }}
                                            labelText="Upload document"
                                            id="uploadDoc"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />

                                    </CardBody>

                                    <CardFooter className={classes.cardFooter}>
                                        <Button onClick={() => handleSubmitCampaign()} color="primary" size="lg">
                                            Valider                    </Button>
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
