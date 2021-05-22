import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComponentC from './ComponentC';
import ComponentB from './ComponentB';
import ComponentA from './ComponentA';







function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ComponentA} />
        <Route exact path="/componentb" component={ComponentB} />
        <Route exact path="/componentc" component={ComponentC} />
      </Switch>
    </Router>
  );

}




export default App;

