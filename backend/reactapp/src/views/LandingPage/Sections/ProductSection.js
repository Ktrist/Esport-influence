import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import AdjustIcon from '@material-ui/icons/Adjust';
import Chat from '@material-ui/icons/Chat';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import StarIcon from '@material-ui/icons/Star';
import DateRangeIcon from '@material-ui/icons/DateRange';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center" style={{marginBottom: "50px"}}>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>One platform to manage, create and update your Influence Marketing campaign</h2>
          <h5 className={classes.description}>
          Esport-Influence is an influence marketing platform in esport that connects advertisers and video game streamers. Distribute your campaigns as a brand or join them to earn rewards as a streamer!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Market Acquisition"
              description="Market your products and services to new customers"
              icon={AdjustIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea 
              title="Nano Influencers Only"
              description="Achieve a much higher reach rate than macro-influencers"
              icon={PersonPinIcon}
              iconColor="Primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Scale your sales volumes"
              description="Scale quickly and expect consistent results"
              icon={TrendingUpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
        
      </div>
      <GridContainer justify="center" style={{marginTop:"50px", marginBottom:"50px"}}>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk about eSport</h2>
          <h5 className={classes.description}>
          The eSport market is booming, as evidenced by the audiences for major competitions such as the League of Legends and Fortnite World Championships, which set new records every year.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Define your strategy"
              description="Create your campaign using our tools"
              icon={DateRangeIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Discuss with your Influencer"
              description="Choose your influencer and discuss your objectives together"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Be the 1st"
              description="Benefit from innovative distribution media and technologies"
              icon={StarIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
        
      </div>
    </div>
  );
}
