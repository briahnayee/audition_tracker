import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Auditions from './Auditions';
import AuditionDetail from './AuditionDetail/AuditionDetail';
import NewAudition from './NewAudition/NewAudition';
import DeleteAudition from './DeleteAudition/DeleteAudition';
import UpdateAudition from './UpdateAudition/UpdateAudition';

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
        <Route path='/detail'>
            <AuditionDetail />
        </Route>
        <Route path='/new'>
            <NewAudition />          
        </Route>
        <Route path='/deleteaudition'>
            <DeleteAudition />
        </Route>
        <Route path='/updateaudition'>
          <UpdateAudition />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
