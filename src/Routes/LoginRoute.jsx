import React from 'react';
import { Route, Navigate } from 'react-router-dom';
// import { isAuth } from '../Helpers/Auth';

// interface IProps {
//   component: React.FC;
//   path: string[];
// }

const LoginRoute = (props) => {
  // const condition = isAuth();
  const condition = localStorage.getItem('isAuth');
  // const condition = localStorage.getItem('isAuth');
  // return !condition ? <Route path={[...props.path]} component={props.component} /> : <Navigate to="/" />;
  return;
};
export default LoginRoute;
