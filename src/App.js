import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decoded from "jwt-decode";
import setAuthToken from "./ultils/setAuthtoken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileAction";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/notfound/NotFound";
import Home from "./components/home/Home";
import Alarm from "./components/alarm/Alarm";
import Control from "./components/control/Control";
import HomeOld from "./components/home/HomeOld";
import ControlAlarm from "./components/alarm/ControlAlarm";
import MushRoom1 from "./components/mushroom/MushRoom1";
import MushRoom2 from "./components/mushroom/MushRoom2";
import Control1 from "./components/control-alarm/Control1";

// //Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decoded(localStorage.jwtToken);
  // Set user and isAutheticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    // Clear current profile
    store.dispatch(clearCurrentProfile());
    //Todo : Clear current profile
    //Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper" id="main-wrapper">
            <Switch>
              <PrivateRoute exact component={Navbar}></PrivateRoute>
            </Switch>

            <Route exact path="/" component={Landing}></Route>
            <div className="content-wrapper">
              <Route path="/login" exact component={Login}></Route>

              <Route path="/alarm" exact component={Alarm}></Route>
              <Route path="/control" exact component={Control}></Route>
              <Route
                path="/control-alarm"
                exact
                component={ControlAlarm}
              ></Route>
              <Route
                path="/nha-nam-bao-ngu"
                exact
                component={MushRoom1}
              ></Route>
              <Route
                path="/nha-nam-moi-den"
                exact
                component={MushRoom2}
              ></Route>
              <Route path="/control1" exact component={Control1}></Route>

              <Switch>
                <PrivateRoute
                  path="/home"
                  exact
                  component={Home}
                ></PrivateRoute>
              </Switch>
              <Switch>
                <PrivateRoute
                  path="/home-old"
                  exact
                  component={HomeOld}
                ></PrivateRoute>
              </Switch>

              <Switch>
                <PrivateRoute
                  path="/dashboard"
                  exact
                  component={Dashboard}
                ></PrivateRoute>
              </Switch>

              <Route path="/not-found" exact component={NotFound}></Route>
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
