import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
    let history = useHistory();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = () => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const userInfo = {
            name: name,
            email: email,
            password: password
        }
        console.log(userInfo)
        fetch("http://localhost:3001/createaccount", {
            headers: headers,
            method: "POST",
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                history.push('/auditions')
            })
    }

    return (
        <section>
            <h1>New Account</h1>
            <form>
                <label>
                    <span>Name: </span>
                    <input name='name' onChange={e => {
                        setName(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Email: </span>
                    <input name='email' onChange={e => {
                        setEmail(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Password: </span>
                    <input name='password' onChange={e => {
                        setPassword(e.target.value)
                    }} required pattern='.{3,}' />
                </label>
            </form>
            <button onClick={createAccount}>Create Account</button>
        </section>
    )
}

export default CreateAccount;