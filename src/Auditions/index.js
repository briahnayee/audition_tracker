import React, { useEffect, useState } from 'react';
import './Auditions.css';
import AuditionTable from '../AuditionTable/AuditionTable.js';
import Statistics from '../Statistics/Statistics.js';
import NavBar from '../navBar/navBar.js';

const Auditions = () => {

    const [auditions, setAuditions] = useState([])

    useEffect(() => {
        const headers = new Headers()
        headers.append('authtoken', localStorage.getItem('authtoken'))
        fetch("http://localhost:3001/auditions", { headers: headers, method: "GET" })
            .then(response => response.json())
            .then(data => {
                setAuditions(data)
            })
    }, [])

    return (
        <>
            <NavBar />
            <div className='auditionRectangle'>
                <h1>Bree's Auditions</h1>
                <AuditionTable auditions={auditions} />
            </div>
        </>
    )
}



export default Auditions;