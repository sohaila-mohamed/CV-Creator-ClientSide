import React from 'react'
import FormInput from '../../../ui-utilities/FormInput'

function PersonalInfo() {
    return (
        <div>
             <h3>Personal info</h3>
             <div className=" d-flex justify-content-between aligen-items-center">
                <FormInput title="First name" width="45"/>
                <FormInput title="Last name" width="45"/>
             </div>
            

             <FormInput title="Age" type="password"/>
             <FormInput title="Phone number" type="tele"/>
        </div>
    )
}

export default PersonalInfo
