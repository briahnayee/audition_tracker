import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const userInfo = {
            email: email,
            password: password
        }
        fetch("http://localhost:3001/login", {
            headers: headers,
            method: "POST",
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success == true) {
                    localStorage.setItem("authtoken", data.message)
                    window.location.href = '/auditions'
                }
            })
    }

    return (
        <section>
            <div className="loginPage">
                <div className="purpleRectangle">
                    <h1 className="header">LogIn</h1>
                    <div className="space"></div>
                    <form className="form">
                        <div className="singleInput">
                            <label className="label Login__label">Email:</label>
                            <input className='smallText' name='email' onChange={e => {
                                setEmail(e.target.value)
                            }} required pattern='.{2,}' />
                        </div>
                        <div className='singleInput'>
                            <label className="label Login__label">Password:</label>
                            <input className="smallText" name='password' type='password' onChange={e => {
                                setPassword(e.target.value)
                            }} required pattern='.{3,}' />
                        </div>
                    </form>
                    <div className="space"></div>
                    <button onClick={login} className="bigButton">LogIn</button>
                    <Link to='/' className="bigButton">Back</Link>
                </div>
            </div>
        </section>
    )
}

export default LogIn;