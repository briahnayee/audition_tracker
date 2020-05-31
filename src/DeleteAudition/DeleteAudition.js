import React from 'react';
import './DeleteAudition.css';
import { useHistory } from 'react-router-dom';

const DeleteAudition = () => {
    let history = useHistory();


    const DeleteOne = () => {
        fetch("http://localhost:3001/auditions/0", { 
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

export default DeleteAudition