import React from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComponentC from './components/ComponentC';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';







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

