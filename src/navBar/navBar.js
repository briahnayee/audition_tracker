import React from 'react';
import './navBar.css';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    let history = useHistory();
    return (
        <div className="navBar">
            <div className="navAndLogo">
                <nav className='navLinks'>
                    <a href="/auditions" className="navEl label">My Auditions </a>
                    <a href="/new" className="navEl label">New Audition</a>
                    <div className="navEl label" onClick={() => {
                        localStorage.removeItem("authtoken")
                        history.push('/login')
                    }}>Logout</div>
                </nav>
                <div>
                    <img src="https://i.imgur.com/vo5pbow.png" alt="logo" width="150px" className="logo"></img>
                </div>
            </div>
        </div>
    )
}

export default NavBar;