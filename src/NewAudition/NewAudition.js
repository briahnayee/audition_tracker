import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './NewAudition.css';
import NavBar from '../navBar/navBar.js';

const NewAudition = () => {
    let history = useHistory();
    const [project, setProject] = useState('')
    const [role, setRole] = useState('')
    const [date, setDate] = useState('')
    const [castingDirector, setCastingDirector] = useState('')
    const [coaching, setCoaching] = useState('')
    const [productionCompany, setProductionCompany] = useState('')
    const [medium, setMedium] = useState('')
    const [source, setSource] = useState('')
    const [method, setMethod] = useState('')
    const [callback, setCallback] = useState('')
    const [notes, setNotes] = useState('')

    const addNew = () => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        headers.append('authtoken', localStorage.getItem('authtoken'))
        const auditionInfo = {
            project: project,
            role: role,
            date: date,
            castingDirector: castingDirector,
            coaching: coaching,
            productionCompany: productionCompany,
            medium: medium,
            source: source,
            method: method,
            callback: callback,
            notes: notes
        }
        fetch(process.env.REACT_APP_API_URL + "auditions", { 
            headers: headers,
            method: "POST",
            body: JSON.stringify(auditionInfo)
        })
        .then(response => response.json())
        .then(data => {
            history.push('/auditions') 
        })
    }

    return (
        <>
        <NavBar />
        <section>
            <div className='auditionRectangle'>
            <h1>New Audition</h1> 

            <form>
                <div className='label input'>
                    <label>Project:  </label >
                    <input name='project' onChange={e => {
                        setProject(e.target.value)
                    }} required pattern='.{2,}' />
                </div>
                <div className='label input'>
                    <label >Role:  </label >
                    <input name='role' onChange={e => {
                        setRole(e.target.value)
                    }} required pattern='.{2,}' />
                </div>
                <div className='label input'>
                    <label >Date:  </label >
                    <input name='date' onChange={e => {
                        setDate(e.target.value)
                    }} required pattern='.{2,}' />
                </div>
                <div className='label input'>
                    <label >Casting Director:  </label >
                    <input name='castingDirector' onChange={e => {
                        setCastingDirector(e.target.value)
                    }} required pattern='.{2,}' />
                </div>
                <div className='label input'>
                    <label >Coaching:  </label >
                    <select name='coaching' onChange={e => {
                        setCoaching(e.target.value)
                    }}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
                <div className='label input'>
                    <label >Production Company:  </label >
                    <input name='productionCompany' onChange={e => {
                        setProductionCompany(e.target.value)
                    }}/>
                </div>
                <div className='label input'>
                    <label >Medium:  </label >
                    <select name='medium' onChange={e => {
                        setMedium(e.target.value)
                    }}>
                        <option value='short film'>short film</option>
                        <option value='feature film'>feature film</option>
                        <option value='tv'>television</option>
                        <option value='commercial'>commercial</option>
                        <option value='new media'>new media</option>
                        <option value='web series'>web series</option>
                        <option value='voiceover'>voiceover</option>
                        <option value='music video'>music video</option>
                        <option value='other'>other</option>
                    </select>
                </div>
                <div className='label input'>
                    <label >How you got it:  </label >
                    <input name='source' onChange={e => {
                        setSource(e.target.value)
                    }} />
                </div>
                <div className='label input'>
                    <label >Method:  </label >
                    <select name='method' onChange={e => {
                        setMethod(e.target.value)
                    }}>
                        <option value='in-person'>in-person</option>
                        <option value='self-tape'>self-tape</option>
                        <option value='other'>other</option>
                    </select>
                </div>
                <div className='label input'>
                    <label >Callback:  </label >
                    <select name='callback' onChange={e => {
                        setCallback(e.target.value)
                    }}>
                        <option value='true'>yes</option>
                        <option value='false'>no</option>
                    </select>
                </div>
                <div className='label input'>
                    <label >Notes:  </label >
                    <input name='notes' onChange={e => {
                        setNotes(e.target.value)
                    }}/>
                </div>
            </form>
            <div className="submit">
            <button className='smallButton' onClick={addNew}>Submit</button>
            <Link to='/auditions'><button className='smallButton'>Back</button></Link>
            </div>
            </div>
        </section>
        </>
    )
}

export default NewAudition