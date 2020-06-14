import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="purpleRectangle">
                <div className="watermarked" />
                <img src="https://i.imgur.com/fCh3QWR.png" alt="logo" width="300px" className="logo"></img>
                <h3 className="subtitle" id="subheading">Keep track of your auditions, see which casting directors you’ve met, calculate your booking ratio, and more!</h3>
                <Link className='bigButton' to='/login'>Login</Link>
                <Link className='bigButton' to='/createaccount'>Signup</Link>
            </div>
        </div>
    )
}

export default LandingPage;