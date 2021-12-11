import React from "react";
import {Route , Redirect} from "react-router-dom";

const GuardRoute = () => {
    const isAuth = localStorage.getItem('isAuth');

    return(<Route />);
};

export default GuardRoute;