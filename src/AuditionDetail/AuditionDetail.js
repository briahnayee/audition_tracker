import React, { useState, useEffect } from 'react';
import './AuditionDetail.css';
import {Link} from 'react-router-dom';


const AuditionDetail = () => {

    const [audition, setAudition] = useState({})

    useEffect(() => {
        fetch("http://localhost:3001/auditions/0", { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setAudition(data)
            })
    }, [])

    return (
        <>
            <h1>Audition Detail</h1>
            <div className="column">
                <div>
                    <h4>Project</h4>
                    {audition.project}
                </div>
                <div>
                    <h4>Role</h4>
                    {audition.role}
                </div>
                <div>
                    <h4>Date</h4>
                    {audition.date}
                </div>
                <div>
                    <h4>Casting Director</h4>
                    {audition.castingDirector}
                </div>
                <div>
                    <h4>Coaching</h4>
                    {audition.coaching}
                </div>
            </div>
            <div className="column">
                <div>
                    <h4>Production Company</h4>
                    {audition.productionCompany}
                </div>
                <div>
                    <h4>Medium</h4>
                    {audition.medium}
                </div>
                <div>
                    <h4>Source</h4>
                    {audition.source}
                </div>
                <div>
                    <h4>Method</h4>
                    {audition.method}
                </div>
                <div>
                    <h4>Callback</h4>
                    {audition.callback}
                </div>
            </div>
            <div>
                <h4>Notes</h4>
                {audition.notes}
            </div>
            <Link to='/auditions' className="button">Back</Link>
            <Link to='/updateaudition' className="button">Edit</Link>
        </>
    )
}

export default AuditionDetail;