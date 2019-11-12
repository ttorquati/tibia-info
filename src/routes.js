import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import history from './services/history';

import Home from './pages/Home/Home';
import Character from './pages/Character/Character';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:name" component={Character} />
      </Switch>
    </Router>
  );
};

export default Routes;
