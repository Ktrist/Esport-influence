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

import token from './reducers/token'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'


var hist = createBrowserHistory();

const store = createStore(combineReducers({token}))

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/create-campaign" component={CreateCampaign} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/sign-up/brand" component={SignUpBrand} />
      <Route path="/sign-up/influencer" component={SignUpInfluencer} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
  </Provider>
,
  document.getElementById("root")
);
