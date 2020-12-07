import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import VerifiedUser from '@material-ui/icons/Star';
import AdjustIcon from '@material-ui/icons/Adjust';
import Chat from '@material-ui/icons/Chat';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import StarIcon from '@material-ui/icons/Star';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk about Esport</h2>
          <h5 className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a scelerisque nulla, sit amet pulvinar augue. 
          Praesent at egestas turpis. Ut scelerisque porttitor lacus, quis vehicula odio vestibulum ut. 
          Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Market Acquisition"
              description="Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat."
              icon={AdjustIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Nano Influencers Only"
              description="Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat."
              icon={VerifiedUser}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Scale your sales"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={TrendingUpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
        
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>One platform to manage, create and update your Influence marketing campaign</h2>
          <h5 className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a scelerisque nulla, sit amet pulvinar augue. 
          Praesent at egestas turpis. Ut scelerisque porttitor lacus, quis vehicula odio vestibulum ut. 
          Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Define your strategy"
              description="Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat."
              icon={AdjustIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Discuss with your Influencer"
              description="Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat."
              icon={Chat}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Be the 1st"
              description="Mauris sed aliquam augue, eget condimentum quam. In iaculis consectetur purus a tristique. Aliquam erat volutpat."
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
