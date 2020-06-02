import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className="LandingPage">
        <h1>Audition Tracker</h1>
        <h3 className="subtitle">Helping actors stay organized and up their booking ratios!</h3>
        <Link className='landingButton' to='/login'>Login</Link>
        <Link className='landingButton' to='/createaccount'>Create Account</Link>
        </div>
    )
}

export default LandingPage;