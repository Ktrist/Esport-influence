import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import { Col } from 'reactstrap';
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLinksBrand from "components/Header/HeaderLinksBrand.js";

import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'
import { createAwait } from 'typescript';
import MyCampaignList from './mycampaignList';
import image from "assets/img/signup.jpg";





function MyCampaign(props) {
    const [myCampaignList, setMyCampaignList] = useState([])
    const [companyCampaign, setCompanyCampaign] = useState([])






    useEffect(() => {
        async function fetchData() {
            const response = await fetch(process.env.REACT_APP_BACKEND + `/mycampaign?companyToken=${props.token}`)
            const jsonResponse = await response.json()
            console.log('jsonR', jsonResponse)
            setMyCampaignList(jsonResponse.myCampaign)
            setCompanyCampaign(jsonResponse.company)


        }

        fetchData()
    }, [props.token])

    console.log("company", companyCampaign);
    console.log("list campagne", myCampaignList);
   

    var returnList = myCampaignList.map((mycampaign, i) => {
    
        return (<MyCampaignList key={i} campaignName={mycampaign.campaignName} campaignDesc={mycampaign.description} campaignStatus={mycampaign.status} campaignImage={mycampaign.uploadedDoc}/>)
    })


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

      const classes = useStyles();
      const { ...rest } = props;

    const myCampaignReturn = (
        <div>

            <Header
                absolute
                color="transparent"
                brand="Esport-Influence"
                rightLinks={<HeaderLinksBrand />}
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
                    backgroundPosition: "top center",
                    minHeight:"100vh"
                }}
            >
                
                <div className="users" key={props.token}>

                    <div className="current-user-container" style={{marginTop: "125px", marginRight:"950px"}}>

                        <div>


                            <div className="current-user-info">

                            {/* <h5>CompanyName:</h5> */}


                            </div>

                        </div>

                    </div>

                </div>
                    <Row>
                        {returnList}
                    </Row>
            </div>
            {/* <Redirect to="/mycampaign-apply/:id" />  */}
        </div>


    );
    return myCampaignList ? myCampaignReturn : <p>No Campaign</p>
}

//  if(returnCampaignDetailList.status == 'waiting'){
//     return <Col xs="12" lg="6" xl="4"  key={props.token}>
//     <Card style={{ width: "20rem" }}>
//     <img
//       style={{height: "180px", width: "100%", display: "block"}}
//       className={classes.imgCardTop}
//       src='/generique.jpg'
//       alt="Card-img-cap"
//     />
//       <CardBody>
//         <h4 className={classes.cardTitle}>{returnCampaignDetailList.campaignName}</h4>
//         <h4 className={classes.cardTitle}>{returnCampaignDetailList.status}</h4>
//         <h4 className={classes.cardTitle}>{returnInfluenceur.firstName}</h4>
//         <h4 className={classes.cardTitle}>{returnInfluenceur.favoriteGame}</h4>
//         <h4 className={classes.cardTitle}>{returnInfluenceur.numberFollower}</h4>

//         <p>HH</p>

//         <Button onClick={() =>updateStatusAcc()} color="primary">Accepter</Button>
//         <Button onClick={() =>updateStatusRef()}  color="secondary">Refuser</Button>

//       </CardBody>
//     </Card>
//   </Col >
//   } else if (returnCampaignDetailList.status == 'accept'){
//     return <Col xs="12" lg="6" xl="4"  key={props.token}>
//     <Card style={{ width: "20rem" }}>
//     <img
//       style={{height: "180px", width: "100%", display: "block"}}
//       className={classes.imgCardTop}
//       src='/generique.jpg'
//       alt="Card-img-cap"
//     />
//       <CardBody>
//         <h4 className={classes.cardTitle}>{returnCampaignDetailList.campaignName}</h4>

//         <h4 className={classes.cardTitle}>{returnInfluenceur.firstName}</h4>
//         <h4 className={classes.cardTitle}>{returnInfluenceur.favoriteGame}</h4>
//         <h4 className={classes.cardTitle}>{returnInfluenceur.numberFollower}</h4>


//         <h4 className={classes.cardTitle}>LINK TO MESSAGE</h4>

//         <h4 className={classes.cardTitle}>{returnCampaignDetailList.status}</h4>

//       </CardBody>
//     </Card>
//   </Col >

//   } else {
//    return <h4 className={classes.cardTitle}>NO REQUEST</h4>

//   } 









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
)(MyCampaign)






