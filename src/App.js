import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Auditions from './Auditions';
import AuditionDetail from './AuditionDetail/AuditionDetail';
import NewAudition from './NewAudition/NewAudition';
import DeleteAudition from './DeleteAudition/DeleteAudition';
import UpdateAudition from './UpdateAudition/UpdateAudition';
import CreateAccount from './CreateAccount/CreateAccount';
import LogIn from './LogIn/LogIn';
import LandingPage from './LandingPage/LandingPage';

function App() {
  const loggedIn = localStorage.getItem('authtoken')
  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact>
            <div className="watermarked" />
            <LandingPage />
          </Route>
          <Route path='/auditions'>
            {loggedIn && <Auditions />}
            {!loggedIn && <LogIn />}
          </Route>
          <Route path='/detail/:id'>
            {loggedIn && <AuditionDetail />}
            {!loggedIn && <LogIn />}
          </Route>
          <Route path='/new'>
            {loggedIn && <NewAudition />}
            {!loggedIn && <LogIn />}
          </Route>
          <Route path='/deleteaudition/:id'>
            {loggedIn && <DeleteAudition />}
            {!loggedIn && <LogIn />}
          </Route>
          <Route path='/updateaudition/:id'>
            {loggedIn && <UpdateAudition />}
            {!loggedIn && <LogIn />}
          </Route>
          <Route path='/createaccount'>
            <div className="watermarked" />
            <CreateAccount />
          </Route>
          <Route path='/login'>
            <div className="watermarked" />
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
