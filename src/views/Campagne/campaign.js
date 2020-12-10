import React, { useState }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import {Col} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);


function Campaign(props) {

  const [watchMovie, setWatchMovie] = useState(0);
  const [selected, setSelected] = useState(false);
  const [myRatingMovie, setMyRatingMovie] = useState(0);
  const classes = useStyles();


  var likeClick = () => {
    setSelected(true);

  }

  var watchClick = () => {
    setWatchMovie(watchMovie + 1);
    console.log("click détécté");
  }


  // ETOILE AVIS PERSO

  var starsClick = (rating) => {
    if (rating < 0) {
      rating = 0
    }
    if (rating >= 5) {
      rating = 5
    }
    setMyRatingMovie(rating)
  }

  var tabRating = []
  for (var i = 0; i < 5; i++) {
    var color = {}
    if (i < myRatingMovie) {
      color = { color: '#f1c40f' }
    }
    tabRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  }

  var tabGlobalRating = []

  for (var i = 0; i < 5; i++) {
    var color = {}
    if (i < tabGlobalRating) {
      color = { color: '#f1c40f' }
    }

    tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  }

  var colorHeart = { cursor: 'pointer' }
  if (selected === true) {
    colorHeart = { color: "#e74c3c", cursor: 'pointer' };
  }


  return (
    <Col xs="12" lg="6" xl="4">
      <Card style={{ width: "20rem" }}>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src='/generique.jpg'
        alt="Card-img-cap"
      />
        <CardBody>
          <h4 className={classes.cardTitle}>{props.campaignName}</h4>
          <p>{props.campaignDesc}</p>
          <Button color="primary">Select Campaign</Button>
        </CardBody>
      </Card>
    </Col >

  );
}

export default Campaign;





