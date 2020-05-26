import React from 'react';
import './Auditions.css';
import AuditionTable from '../AuditionTable/AuditionTable.js';
import Statistics from '../Statistics/Statistics.js'

const data = [
    {
        id: 1234,
        userId: 1234,
        isLoggedIn: true,
        userName: 'Bree',
        project: 'Fast and Furious',
        role: 'flag girl',
        date: '5/26/20',
        castingDirector: 'Rachel Tenner',
        coaching: false,
        productionCompany: 'Universal Pictures',
        medium: 'feature film',
        source: 'manager',
        method: 'in-person',
        callback: false,
        notes: 'Taped with assoc. Rick Messina. Went well. He gave me 5 takes.'
    }
]

const Auditions = () => {
    return(
    <>
    <h1>Bree's Auditions</h1>
        <Statistics />
        <AuditionTable auditions={data} />
    </>
    )
}



export default Auditions;