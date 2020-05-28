import React from 'react';

const NewAudition = () => {
    return(
        <section>
            <h1>NEW AUDITION</h1>
            <hr />
            <form>
                <label>
                    <span>Project:</span>
                    <input name='project' required pattern='.{2,}'/>
                </label>
                <label>
                    <span>Role:</span>
                    <input name='role' required pattern='.{2,}'/>
                </label>
                <label>
                    <span>Date:</span>
                    <input name='date' required pattern='.{2,}'/>
                </label>
                <label>
                    <span>Casting Director:</span>
                    <input name='castingDirector' required pattern='.{2,}'/>
                </label>
                <label>
                    <span>Coaching:</span>
                    <select name='coaching'>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </label>
                <label>
                    <span>Production Company:</span>
                    <input name='productionCompany'/>
                </label>
                <label>
                    <span>Medium:</span>
                    <select name='medium'>
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
                    <input name='source'/>
                </label>
                <label>
                    <span>Method:</span>
                    <select name='method'>
                        <option value='in-person'>in-person</option>
                        <option value='self-tape'>self-tape</option>
                        <option value='other'>other</option>
                    </select>
                </label>
                <label>
                    <span>Callback:</span>
                    <select name='callback'>
                        <option value='true'>yes</option>
                        <option value='false'>no</option>
                    </select>
                </label>
                <label>
                    <span>Notes:</span>
                    <input name='notes'/>
                </label>
            </form>
            <button>Submit</button>
        </section>
    )
}

export default NewAudition