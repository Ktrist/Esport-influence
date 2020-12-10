import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpBrand from "views/signUp/SignUpBrand.js"
import SignUpInfluencer from "views/signUp/SignUpInfluencer.js"
import CreateCampaign from "views/Campagne/CreateCampaign.js"
import 'bootstrap/dist/css/bootstrap.min.css';

import MyNetwork from 'views/MessengerPage/Components/MyNetwork';
import Messaging from 'views/MessengerPage/Components/Messaging';
import Login from 'views/MessengerPage/Components/Login';

import './views/MessengerPage/App.css'

import token from './reducers/token'
import campaign from './reducers/campaign'

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import SelectCampagne from "views/Campagne/SelectCampagne.js";
import CampaignApply from "views/Campagne/CampaignApply.js";

var hist = createBrowserHistory();

const store = createStore(combineReducers({token, campaign}))

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" exact component={ProfilePage} />
      <Route path="/create-campaign" exact component={CreateCampaign} />
      <Route path="/login-page" exact component={LoginPage} />
      <Route path="/sign-up/brand" exact component={SignUpBrand} />
      <Route path="/sign-up/influencer" exact component={SignUpInfluencer} />
      <Route path="/select-campaign" exact component={SelectCampagne} />
      <Route path="/campaign-apply/:id"  component={CampaignApply} />
      <Route path="/mynetwork" exact component={MyNetwork}/>
      <Route path="/messaging" exact component={Messaging}/>
      <Route path="/login-messagerie" exact component={Login}/>
      <Route path="/" exact component={LandingPage} />
    </Switch>
  </Router>
  </Provider>
,
  document.getElementById("root")
);
