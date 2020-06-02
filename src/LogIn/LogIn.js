import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
            <h1>LogIn</h1>
            <form>
                <label>
                    <span>Email: </span>
                    <input name='email' onChange={e => {
                        setEmail(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Password: </span>
                    <input name='password' type='password' onChange={e => {
                        setPassword(e.target.value)

                    }} required pattern='.{3,}' />
                </label>
            </form>
            <button onClick={login}>LogIn</button>
        </section>
    )
}

export default LogIn;