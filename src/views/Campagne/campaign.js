import React, { useState }  from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faStar} from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 30,
    border: "1mm ridge black",
  },
  media: {
    height: 140,
    
  },
});

function Campaign(props) {

  const classes = useStyles();



  return (
    <Card className={classes.root} style={{backgroundColor: 'transparent', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
      <CardMedia
        className={classes.media}
        image={props.campaignUpload} style={{}}
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {props.campaignName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.campaignDesc}
          </Typography>
          </CardContent>
      <Link to = {`/campaign-apply/${props.campaignId}`}><Button color="primary">Select Campaign</Button></Link>
    </Card>


  );
}

export default Campaign;





