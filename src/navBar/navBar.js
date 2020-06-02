import React from 'react';
import './navBar.css';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    let history = useHistory();
    return (
        <div className="navBar">
            <div>
                <img src="https://i.imgur.com/vo5pbow.png" alt="logo" width="150px" className="logo"></img>
            </div>
            <div>
            <nav>
                <a href="/auditions" className="navEl">My Auditions </a>
                <a href="/new" className="navEl">Add New Audition</a>
                <button className="logout" onClick={ () => {
                    localStorage.removeItem("authtoken")
                    history.push('/login') 
                }}>Logout</button>
            </nav>
            </div>
        </div>
    )
}

export default NavBar;