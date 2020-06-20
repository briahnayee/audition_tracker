import React from 'react';
import './DeleteAudition.css';
import { useHistory, withRouter, Link } from 'react-router-dom';
import NavBar from '../navBar/navBar.js';


const DeleteAudition = (props) => {
    let history = useHistory();


    const DeleteOne = () => {
        const headers = new Headers()
        headers.append('authtoken', localStorage.getItem('authtoken'))
        fetch(process.env.REACT_APP_API_URL + `auditions/${props.match.params.id}`, {
            headers: headers,
            method: "DELETE",
        })
            .then(response => response.json())
            .then(data => {
                history.push('/auditions')
            })
    }

    return (
        <>
            <NavBar />
            <div className='auditionRectangle'>
                <h3>Are you sure you want to delete this audition?</h3>
                <button className='smallButton' onClick={DeleteOne}>Yes</button>
                <Link to='/auditions'><button className='smallButton'>Back</button></Link>
            </div>
        </>
    )
}

export default withRouter(DeleteAudition)