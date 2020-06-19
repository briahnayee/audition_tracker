import React, { useState, useEffect } from 'react';
import './AuditionDetail.css';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../navBar/navBar.js';


const AuditionDetail = (props) => {

    const [audition, setAudition] = useState({})

    useEffect(() => {
        const headers = new Headers()
        headers.append('authtoken', localStorage.getItem('authtoken'))
        fetch(process.env.REACT_APP_API_URL + `auditions/${props.match.params.id}`, { headers: headers, method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAudition(data)
            })
    }, [])

    console.log(props)

    return (
        <>
            <NavBar />
            <div className='auditionRectangle'>
                <h1>Audition Detail</h1>
                <div className="inline">
                    <div className="column detailItem">
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
                </div>
                <div className='notes'>
                    <h4>Notes</h4>
                    {audition.notes}
                </div>
                <Link to='/auditions' className="smallButton">Back</Link>
                <Link to={`/updateaudition/${audition.id}`} className="smallButton">Edit</Link>
            </div>
        </>
    )
}

export default withRouter(AuditionDetail);