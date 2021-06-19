import React from 'react'
import { useState } from 'react'
import "./FormInput.css"
function FormInput(props) {

    // custom input you can use it like that <FormInput/>
    // and you can provide some properties like title , width and type and all other regular input properties  


    const [top, setTop] = useState(false)
    const [val, setvalue] = useState("")


    const focusHandler= ()=>{
        setTop(true)
    }

    
    const blurHandler= ()=>{
        if(val=="")
            setTop(false)
    }



    const inputHndler = (e)=>{
        setvalue(e.target.value)
    }

    return (
        <div className={`form-input  ${top ? 'set-top' : ''} `} style={{width:props.width+'%'}}>
            <label >{props.title}</label>
            <input 
            type={props.type}
            onFocus={focusHandler}
            onBlur={blurHandler} onChange={inputHndler} value={val}/>
        </div>
    )
}

export default FormInput
