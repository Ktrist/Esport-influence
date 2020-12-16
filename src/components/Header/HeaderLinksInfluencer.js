/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinksInfluencer(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>

<ListItem className={classes.listItem}><Link to = {`/profile-influencer`} ><Button color="primary">My profile </Button></Link>
            </ListItem>
            <ListItem className={classes.listItem}><Link to = {`/select-campaign`} ><Button color="primary">Select Campaign </Button></Link>
            </ListItem>

            <ListItem className={classes.listItem}>
            <Link to = {`/request-influencer-list`} ><Button color="primary">Request Sent </Button></Link>

            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to = {`/`} ><Button color="primary">Log-out </Button></Link>

            </ListItem>

        </List>
    );
}
