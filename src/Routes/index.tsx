import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import LoginRoute from './LoginRoute';
//Pages
import SigninComponent from '../pages/Login';
import createServer from "../pages/Create-Server";
import NotFoundComponent from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Servers from "../pages/Servers";

const Index: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <Switch>
        <LoginRoute path={['/oauth']} component={SigninComponent} />
        <GuardRoute exact={true} path={['/', '/create-server']} component={createServer} />
        <GuardRoute exact path={['/dashboard']} component={Dashboard} />
          <GuardRoute exact path={['/servers']} component={Servers} />
        {/*<GuardRoute exact path={['/server-plans']} component={ServerPlans} />*/}
        {/*<GuardRoute exact path={['/server-plans/new-server-plan']} component={NewServerPlan} />*/}
        {/*<GuardRoute exact path={['/server-plan/:id']} component={PlanViewComponent} />*/}
        {/*<GuardRoute exact path={['/service-default-quota']} component={DefaultQuotaComponent} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services']} component={ServicesComponent} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services/:id/actions']} component={ServiceJenkinsActions} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services/:id/plans']} component={ServiceResourcePlans} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services/:id/reports']} component={ServiceReports} />*/}
        <GuardRoute exact path={['*']} component={NotFoundComponent} />
      </Switch>
    </Router>
  );
};

export default Index;
