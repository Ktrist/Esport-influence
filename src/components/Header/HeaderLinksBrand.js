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

export default function HeaderLinksBrand(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            
            <ListItem className={classes.listItem}><Link to = {`/profile-brand`} ><Button color="primary">My profile</Button></Link>
            </ListItem>
            <ListItem className={classes.listItem}><Link to = {`/create-campaign`} ><Button color="primary">Add campaign</Button></Link>
            </ListItem>
            <ListItem className={classes.listItem}><Link to = {`/mycampaign`} ><Button color="primary">My campaigns</Button></Link>
            </ListItem>

            <ListItem className={classes.listItem}><Link to = {`/choiceinfluencer`} ><Button color="primary">Requests received</Button></Link>
            </ListItem>
            
            <ListItem className={classes.listItem}><Link to = {`/`} ><Button color="primary">Log-out</Button></Link>
            </ListItem>
            

        </List>
    );
}
