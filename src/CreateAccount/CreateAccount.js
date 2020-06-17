import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
        fetch(process.env.REACT_APP_API_URL + "createaccount", {
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
        <section className='createAccount'>
            <div className="purpleRectangle">
                <h1 className="header">New Account</h1>
                <div className='space'></div>
                <form className='form'>
                    <div className='singleInput'>
                        <label className="label">Name: </label>
                        <input className='smallText' name='name' onChange={e => {
                            setName(e.target.value)
                        }} required pattern='.{2,}' />
                    </div>
                    <div className='singleInput'>
                        <label className="label">Email: </label>
                        <input className='smallText' name='email' onChange={e => {
                            setEmail(e.target.value)
                        }} required pattern='.{2,}' />
                    </div>
                    <div className='singleInput'>
                        <label className="label">Password: </label>
                        <input className='smallText' name='password' type='password' onChange={e => {
                            setPassword(e.target.value)
                        }} required pattern='.{3,}' />
                    </div>
                </form>
                <div className='space'></div>
                <div>
                    <button className="bigButton" onClick={createAccount}>Submit</button>
                    <Link to='/' className='bigButton'>Back</Link>
                </div>
            </div>
        </section>
    )
}

export default CreateAccount;