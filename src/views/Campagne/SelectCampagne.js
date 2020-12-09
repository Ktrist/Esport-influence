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


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import CardHeader from "components/Card/CardHeader";

import image from "assets/img/signup.jpg";

// TEST MOVIE pour insertion du tableau

import Campaign from '../Campagne/campaign'
import { Row } from 'reactstrap';

const useStyles = makeStyles(styles);



export default function SelectCampagne(props) {



    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;

    // TEST MOVIE pour insertion du tableau en dur

    var CampaignData = [
        { name: "Lacoste:  E-sport // chic and sport", desc: "Lacoste:  E-sport // chic and sport", img: "/starwars.jpg", note: 6.7, vote: 5 },
        { name: "Maléfique : Le pouvoir du mal", desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un cœur ...", img: "/maleficent.jpg", note: 8.2, vote: 3 },
        { name: "Jumanji: The Next Level", desc: "L’équipe est de retour, mais le jeu a changé. Alors qu’ils retournent dans Jumanji pour secourir ...", img: "/jumanji.jpg", note: 4, vote: 5 },
        { name: "Once Upon a Time... in Hollywood", desc: "En 1969, Rick Dalton – star déclinante d'une série télévisée de western – et Cliff Booth ...", img: "/once_upon.jpg", note: 6, vote: 7 },
        { name: "La Reine des neiges 2", desc: "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses ...", img: "/frozen.jpg", note: 4.6, vote: 3 },
        { name: "Terminator: Dark Fate", desc: "De nos jours à Mexico. Dani Ramos, 21 ans, travaille sur une chaîne de montage dans une usine automobile...", img: "/terminator.jpg", note: 6.1, vote: 1 },
    ]

    var CampaignList = CampaignData.map((campaign, i) => {
        return (<Campaign key={i} campaignName={campaign.name} campaignDesc={campaign.desc} campaignImg={campaign.img} globalRating={campaign.note} globalCountRating={campaign.vote} />)
    })




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

                    <Row>
                        {CampaignList}
                    </Row>
                </div>  
            </div>
        </div>


    );
}
