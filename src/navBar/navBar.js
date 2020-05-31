import React from 'react';
import './navBar.css';

const navBar = () => {
    return (
        <div className="navBar">
            <div>
                <img src="https://i.imgur.com/vo5pbow.png" alt="logo" width="150px" className="logo"></img>
            </div>
            <div>
            <nav>
                <a href="/auditions" className="navEl">My Auditions</a>
                <a href="/new" className="navEl">Add New Audition</a>
                <a href='#' className="navEl">Logout</a>
            </nav>
            </div>
        </div>
    )
}

export default navBar;