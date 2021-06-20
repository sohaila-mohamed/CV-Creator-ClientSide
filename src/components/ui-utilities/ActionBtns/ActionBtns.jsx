import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import "./ActionBtns.css"
function ActionBtns(props) {

    const [loading, setloading] = useState(false)

    const saveChanges = ()=>{
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 500);
        props.onSave();
    }

    const resetChanges = ()=>{
        props.onReset();
    }


    return (
        <div className="Action-btns">
            <button onClick={saveChanges}>
                {!loading && <span>Save</span>}
                {loading && <div className="saving-icon">
                 <FontAwesomeIcon icon={faCog}/>
                </div>}
            </button>
            <button onClick={resetChanges}>Reset</button>
        </div>
    )
}

export default ActionBtns
