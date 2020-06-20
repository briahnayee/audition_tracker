import './UpdateAudition.css';
import React, { useEffect, useState } from 'react';
import { useHistory, withRouter, Link } from 'react-router-dom';
import NavBar from '../navBar/navBar.js';


const UpdateAudition = (props) => {

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

    const update = () => {
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
        fetch(process.env.REACT_APP_API_URL + `auditions/${props.match.params.id}`, {
            headers: headers,
            method: "PUT",
            body: JSON.stringify(auditionInfo)
        })
            .then(response => response.json())
            .then(data => {
                history.push('/auditions')
            })
    }

    useEffect(() => {
        const headers = new Headers()
        headers.append('authtoken', localStorage.getItem('authtoken'))
        fetch(process.env.REACT_APP_API_URL + `auditions/${props.match.params.id}`, { headers: headers, method: "GET" })
            .then(response => response.json())
            .then(data => {
                setProject(data.project)
                setRole(data.role)
                setDate(data.date)
                setCastingDirector(data.castingDirector)
                setCoaching(data.coaching)
                setProductionCompany(data.productionCompany)
                setMedium(data.medium)
                setSource(data.source)
                setMethod(data.method)
                setCallback(data.callback)
                setNotes(data.notes)
            })
    }, [])

    return (
        <>
            <div>
                <NavBar />
                <section>
                    <div className='auditionRectangle'>
                        <h1>Edit Audition</h1>
                        <form>
                            <div className='label input'>
                                <label>Project:  </label>
                                <input name='project' value={project} onChange={e => {
                                    setProject(e.target.value)
                                }} required />
                            </div>
                            <div className='label input'> 
                                <label>Role:  </label>
                                <input name='role' value={role} onChange={e => {
                                    setRole(e.target.value)
                                }} required pattern='.{2,}' />
                            </div>
                            <div className='label input'>
                                <label>Date:  </label>
                                <input name='date' value={date} onChange={e => {
                                    setDate(e.target.value)
                                }} required pattern='.{2,}' />
                            </div>
                            <div className='label input'>
                                <label>Casting Director:  </label>
                                <input name='castingDirector' value={castingDirector} onChange={e => {
                                    setCastingDirector(e.target.value)
                                }} required pattern='.{2,}' />
                            </div>
                            <div className='label input'>
                                <label>Coaching:  </label>
                                <select name='coaching' value={coaching} onChange={e => {
                                    setCoaching(e.target.value)
                                }}>
                                    <option value='true'>Yes</option>
                                    <option value='false'>No</option>
                                </select>
                            </div>
                            <div className='label input'>
                                <label>Production Company:  </label>
                                <input name='productionCompany' value={productionCompany} onChange={e => {
                                    setProductionCompany(e.target.value)
                                }} />
                            </div>
                            <div className='label input'>
                                <label>Medium:  </label>
                                <select name='medium' value={medium} onChange={e => {
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
                                <label>How you got it:  </label>
                                <input name='source' value={source} onChange={e => {
                                    setSource(e.target.value)
                                }} />
                            </div>
                            <div className='label input'>
                                <label>Method:  </label>
                                <select name='method' value={method} onChange={e => {
                                    setMethod(e.target.value)
                                }}>
                                    <option value='in-person'>in-person</option>
                                    <option value='self-tape'>self-tape</option>
                                    <option value='other'>other</option>
                                </select>
                            </div>
                            <div className='label input'>
                                <label>Callback:  </label>
                                <select name='callback' value={callback} onChange={e => {
                                    setCallback(e.target.value)
                                }}>
                                    <option value='true'>yes</option>
                                    <option value='false'>no</option>
                                </select>
                            </div>
                            <div className='label input'>
                                <label>Notes:  </label>
                                <input name='notes' value={notes} onChange={e => {
                                    setNotes(e.target.value)
                                }} />
                            </div>
                        </form>
                        <div className="submit">
                            <button className="smallButton" onClick={update}>Submit</button>
                            <button className="smallButton"><Link to='/auditions'>Back</Link></button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default withRouter(UpdateAudition)