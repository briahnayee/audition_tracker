import React, { useState } from 'react';

const NewAudition = () => {
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
    return (
        <section>
            <h1>NEW AUDITION</h1>
            <hr />
            <form>
                <label>
                    <span>Project:</span>
                    <input name='project' onChange={e => {
                        setProject(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Role:</span>
                    <input name='role' onChange={e => {
                        setRole(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Date:</span>
                    <input name='date' onChange={e => {
                        setDate(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Casting Director:</span>
                    <input name='castingDirector' onChange={e => {
                        setCastingDirector(e.target.value)
                    }} required pattern='.{2,}' />
                </label>
                <label>
                    <span>Coaching:</span>
                    <select name='coaching' onChange={e => {
                        setCoaching(e.target.value)
                    }}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </label>
                <label>
                    <span>Production Company:</span>
                    <input name='productionCompany' onChange={e => {
                        setProductionCompany(e.target.value)
                    }}/>
                </label>
                <label>
                    <span>Medium:</span>
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
                </label>
                <label>
                    <span>How you got it:</span>
                    <input name='source' onChange={e => {
                        setSource(e.target.value)
                    }} />
                </label>
                <label>
                    <span>Method:</span>
                    <select name='method' onChange={e => {
                        setMethod(e.target.value)
                    }}>
                        <option value='in-person'>in-person</option>
                        <option value='self-tape'>self-tape</option>
                        <option value='other'>other</option>
                    </select>
                </label>
                <label>
                    <span>Callback:</span>
                    <select name='callback' onChange={e => {
                        setCallback(e.target.value)
                    }}>
                        <option value='true'>yes</option>
                        <option value='false'>no</option>
                    </select>
                </label>
                <label>
                    <span>Notes:</span>
                    <input name='notes' onChange={e => {
                        setNotes(e.target.value)
                    }}/>
                </label>
            </form>
            <button>Submit</button>
        </section>
    )
}

export default NewAudition