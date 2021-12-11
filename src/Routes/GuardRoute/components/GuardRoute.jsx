import React from "react";
import {Route , Navigate} from "react-router-dom";

const GuardRoute = ({ component: Component, ...restOfProps}) => {
    const isAuth = localStorage.getItem('isAuth');
    console.log(isAuth);

    return(
    <React.Fragment>
        <Route {...restOfProps}
                  render={(props) =>
                      isAuth ? <Component {...props} /> : <Navigate to="/" />
                  }
        />
    </React.Fragment>);
};

export default GuardRoute;