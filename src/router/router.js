import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Service from '../redux/service';
import Tournament from "../containers/tournament";


/**
 * @desc HOC for creating private routes.
 * @param Component
 * @returns Component
 */
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    Service.isLoggedIn() ? <Component {...props} />
    : <Redirect exact
      to={{
        pathname: '/login',
        state: {from: props.location}
      }}
      />
  )}/>
);

class Router extends React.Component {

  render() {
    return (
    <BrowserRouter>
      <div style={{height: "100%", minWidth: "100%"}}>
        <Switch>
            <Route path='/' component={Tournament} />
        </Switch>
      </div>
    </BrowserRouter>
  )

  }
}



export default Router;
