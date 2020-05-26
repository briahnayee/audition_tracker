import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Auditions from './Auditions';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <h1>Hello world!</h1>
        </Route>
        <Route path='/auditions'>
            <Auditions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
