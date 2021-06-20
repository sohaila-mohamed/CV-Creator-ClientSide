import React ,{ useEffect ,useState} from 'react'
import ActionBtns from '../../../ui-utilities/ActionBtns/ActionBtns';
import FormInput from '../../../ui-utilities/FormInput'

function PersonalInfo(props) {

    
    const [psersonal, setPsersonal] = useState({});


    useEffect(() => {
        setPsersonal(props.data);
    }, [])

    // save Changes on update to make the data presesting
    useEffect(() => {
        props.setPersonalData(psersonal);
    }, [psersonal])
    



    // matches the number of form inputs 
    const firstNameHandler = (v) =>{
        setPsersonal({...psersonal,firstName:v})
        
    }
    const lastNameHandler = (v) =>{
        setPsersonal({...psersonal,lastName:v})
    }
    const ageHandler = (v) =>{
        setPsersonal({...psersonal,age:v})
    }
    const telHandler = (v) =>{
        setPsersonal({...psersonal,phoneNumber:v})
    }

    const saveChanges = (e) =>{
        
        props.setPersonalData(psersonal)
    }
    
    const resetChanges = (e) =>{
        
        for (const key in psersonal) {
            if (Object.hasOwnProperty.call(psersonal, key)) {
                psersonal[key]=""
                
            }
        }
        setPsersonal({...psersonal})
        props.setPersonalData(psersonal)
    }
    

    return (
        <div>
             <h3>Personal info</h3>
             <div className=" d-flex justify-content-between aligen-items-center">
                <FormInput title="First name" width="45" value={psersonal.firstName} valueBack={firstNameHandler}/>
                <FormInput title="Last name" width="45" value={psersonal.lastName} valueBack={lastNameHandler}/>
             </div>

             
            

             <FormInput title="Age" type="text" value={psersonal.age} valueBack={ageHandler}/>
             <FormInput title="Phone number" type="tele" value={psersonal.phoneNumber} valueBack={telHandler}/>

            <ActionBtns onSave={saveChanges} onReset={resetChanges}/>
            
        </div>
    )
}

export default PersonalInfo
