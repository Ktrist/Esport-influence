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
    border: "1mm ridge black"
  },
  media: {
    height: 140,
  },
});


function Campaign(props) {

  // const [watchMovie, setWatchMovie] = useState(0);
  // const [selected, setSelected] = useState(false);
  // const [myRatingMovie, setMyRatingMovie] = useState(0);
  const classes = useStyles();


  // var likeClick = () => {
  //   setSelected(true);

  // }

  // var watchClick = () => {
  //   setWatchMovie(watchMovie + 1);
  //   console.log("click détécté");
  // }


  // ETOILE AVIS PERSO

  // var starsClick = (rating) => {
  //   if (rating < 0) {
  //     rating = 0
  //   }
  //   if (rating >= 5) {
  //     rating = 5
  //   }
  //   setMyRatingMovie(rating)
  // }

  // var tabRating = []
  // for (var i = 0; i < 5; i++) {
  //   var color = {}
  //   if (i < myRatingMovie) {
  //     color = { color: '#f1c40f' }
  //   }
  //   tabRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  // }

  // var tabGlobalRating = []

  // for (var i = 0; i < 5; i++) {
  //   var color = {}
  //   if (i < tabGlobalRating) {
  //     color = { color: '#f1c40f' }
  //   }

  //   tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  // }

  // var colorHeart = { cursor: 'pointer' }
  // if (selected === true) {
  //   colorHeart = { color: "#e74c3c", cursor: 'pointer' };
  // }


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
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





