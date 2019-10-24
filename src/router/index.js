import React from 'react';
import Loadable from 'react-loadable';

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {HashRouter, Route, Switch, history } from 'react-router-dom';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../store/history'
// import { Route, Switch} from 'react-router-dom';

import Loading from '../pages/home/index';
// import staff from '../pages/companyInfo/staff/index';

const Home = Loadable({
    loader: () => import('../pages/home/index'),
    loading: Loading,
    delay: 0
})
const Staff = Loadable({
    loader: () => import('../pages/companyInfo/staff/index'),
    loading: Loading,
    delay: 0
})
const Department = Loadable({
    loader: () => import('../pages/companyInfo/department/index'),
    loading: Loading,
    delay: 0
})
const Role = Loadable({
    loader: () => import('../pages/companyInfo/role/index'),
    loading: Loading,
    delay: 0
})
const Approver = Loadable({
    loader: () => import('../pages/companyInfo/approver/index'),
    loading: Loading,
    delay: 0
})


const getRouter = () => (
    <Router history={history}>
        <div className="body-content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="/home" to="/" />
                <Route path="/test1" component={Staff} />
                <Route path="/test2" component={Department} />
                <Route path="/test3" component={Role} />
                <Route path="/test4" component={Approver} />
            </Switch>
        </div>
    </Router>
);
export default getRouter;