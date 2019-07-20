import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

import Login from './components/Login';
import NoMatch from './components/NoMatch';
import CreateDepartment from './components/CreateDepartment';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={Products} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-department" component={CreateDepartment} />


        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
