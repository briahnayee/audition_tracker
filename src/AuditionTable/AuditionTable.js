import React from 'react';
import './AuditionTable.css';
import {Link} from 'react-router-dom';

const AuditionTable = (props) => {
    console.log('props', props.auditions)
    return (
        <div>
            <h3 className='auditionTable'>Audition table</h3>
            <table>
                <tr>
                    <th>Project</th>
                    <th>Role</th>
                    <th>Date</th>
                    <th>Casting Director</th>
                    <th>Notes</th>
                </tr>
                {props.auditions.map(audition =>
                    <tr
                        className='auditions'
                        key={audition.id}
                    >
                        <td>
                            {audition.project}
                        </td>
                        <td>
                            {audition.role}
                        </td>
                        <td>
                            {audition.date}
                        </td>
                        <td>
                            {audition.castingDirector}
                        </td>
                        <td>
                            {audition.notes}
                        </td>
                        <td>
                            <Link to={`/detail/${audition.id}`} className="smallButton">Details</Link>
                            <Link to={`/deleteaudition/${audition.id}`} className="smallButton">X</Link>
                        </td>
                    </tr>
                )}
            </table>
            <Link to='/new'className="smallButton">New Audition</Link>
        </div>
    )
}

export default AuditionTable