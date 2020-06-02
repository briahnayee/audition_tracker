import React from 'react';
import './DeleteAudition.css';
import { useHistory, withRouter } from 'react-router-dom';

const DeleteAudition = (props) => {
    let history = useHistory();


    const DeleteOne = () => {
        const headers = new Headers()
        headers.append('authtoken', localStorage.getItem('authtoken'))
        fetch(`http://localhost:3001/auditions/${props.match.params.id}`, { 
            headers: headers,
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            history.push('/auditions') 
        })
    }

    return (
        <div>
        <h3>Are you sure you want to delete this audition?</h3>
        <button onClick={DeleteOne}>Yes</button>
        </div>
    )
}

export default withRouter(DeleteAudition)