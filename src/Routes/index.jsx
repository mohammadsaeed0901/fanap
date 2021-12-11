import React from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
// import GuardRoute from './GuardRoute';
// import LoginRoute from './LoginRoute';
//Pages
import Main from '../Main';
import CreateServer from "../Pages/Create-Server";
import Servers from "../Pages/Servers";
import Server from "../Pages/Server";
import NotFoundComponent from '../Pages/NotFound';
import Dashboard from "../Pages/Dashboard";
// import ServerPlans from '../Pages/PlanList';
// import NewServerPlan from '../Pages/PlanList/Components/CreateServerPlan';
// import ServicesComponent from '../Pages/Services';
// import ServiceJenkinsActions from '../Pages/Services/Components/ServiceJenkinsActions';
// import ServiceResourcePlans from '../Pages/Services/Components/RecourcePlan/ServiceResorcePlans';
// import ServiceReports from '../Pages/Services/Components/Report/ServiceReports';
// import ReportsComponent from '../Pages/Reports';
// import DefaultQuotaComponent from '../Pages/DefaultQuota';
// import PlanViewComponent from '../Pages/PlanView';


// interface IProps {
//     path: string[];
//     exact: boolean;
//     footer?: boolean;
//     header?: boolean;
//     sidebar?: boolean;
// }

const Index = () => {
  return (
    <Router>
        <Main/>
      <Routes>
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route exact path='/create-server' element={<CreateServer/>} />
          <Route exact path='/servers' element={<Servers/>} />
          <Route exact path='/servers/:id' element={<Server/>} />
          <Route exact path='/' />
        {/*<GuardRoute exact={true} path={['/', '/service-reports']} component={ReportsComponent} />*/}
        {/*<GuardRoute exact path={['/server-plans']} component={ServerPlans} />*/}
        {/*<GuardRoute exact path={['/server-plans/new-server-plan']} component={NewServerPlan} />*/}
        {/*<GuardRoute exact path={['/server-plan/:id']} component={PlanViewComponent} />*/}
        {/*<GuardRoute exact path={['/service-default-quota']} component={DefaultQuotaComponent} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services']} component={ServicesComponent} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services/:id/actions']} component={ServiceJenkinsActions} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services/:id/plans']} component={ServiceResourcePlans} />*/}
        {/*<GuardRoute exact path={['/service-groups/:id/services/:id/reports']} component={ServiceReports} />*/}
        <Route exact path='*' element={<NotFoundComponent/>} />
      </Routes>
    </Router>
  );
};

export default Index;
