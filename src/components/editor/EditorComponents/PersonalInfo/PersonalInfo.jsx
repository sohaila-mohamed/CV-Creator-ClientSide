import React, { useEffect, useState } from "react";
import ActionBtns from "../../../ui-utilities/ActionBtns/ActionBtns";
import FormInput from "../../../ui-utilities/FormInput";

function PersonalInfo(props) {
  const [psersonal, setPsersonal] = useState({});

  useEffect(() => {
    setPsersonal(props.data);
  }, []);

  // save Changes on update to make the data presesting
  useEffect(() => {
    props.setPersonalData(psersonal);
  }, [psersonal]);

  // matches the number of form inputs
  const firstNameHandler = (v) => {
    setPsersonal({ ...psersonal, firstName: v });
  };
  const lastNameHandler = (v) => {
    setPsersonal({ ...psersonal, lastName: v });
  };
  const DateofBirthHandler = (v) => {
    setPsersonal({ ...psersonal, DateofBirth: v });
  };
  const telHandler = (v) => {
    setPsersonal({ ...psersonal, phoneNumber: v });
  };
  const AddressHandler = (v) => {
    setPsersonal({ ...psersonal, address: v });
  };
  const LinkedinHandler = (v) => {
    setPsersonal({ ...psersonal, Linkedin: v });
  };
  const GitHubHandler = (v) => {
    setPsersonal({ ...psersonal, GitHub: v });
  };
  const positionHandler = (v) => {
    setPsersonal({ ...psersonal, position: v });
  };
  const saveChanges = (e) => {
    props.setPersonalData(psersonal);
  };
  const resetChanges = (e) => {
    for (const key in psersonal) {
      if (Object.hasOwnProperty.call(psersonal, key)) {
        psersonal[key] = "";
      }
    }
    setPsersonal({ ...psersonal });
    props.setPersonalData(psersonal);
  };

  return (
    <div>
      <h3>Personal info</h3>
      <FormInput
        title="Position"
        width="45"
        value={psersonal.position}
        valueBack={positionHandler}
      />
      <div className=" d-flex justify-content-between aligen-items-center">
        <FormInput
          title="First name"
          width="45"
          value={psersonal.firstName}
          valueBack={firstNameHandler}
        />
        <FormInput
          title="Last name"
          width="45"
          value={psersonal.lastName}
          valueBack={lastNameHandler}
        />
      </div>

      <div className=" d-flex justify-content-between aligen-items-center">
        <FormInput
          title="Date of Birth"
          type="date"
          value={psersonal.DateofBirth}
          valueBack={DateofBirthHandler}
          width="45"
        />
        <FormInput
          title="Phone number"
          type="tele"
          value={psersonal.phoneNumber}
          valueBack={telHandler}
          width="45"
        />
      </div>
      <FormInput
        title="Address"
        width="100"
        value={psersonal.address}
        valueBack={AddressHandler}
      />
      <FormInput
        title="Linkedin"
        width="100"
        value={psersonal.Linkedin}
        valueBack={LinkedinHandler}
      />
      <FormInput
        title="GitHub"
        width="100"
        value={psersonal.GitHub}
        valueBack={GitHubHandler}
      />
      <ActionBtns onSave={saveChanges} onReset={resetChanges} />
    </div>
  );
}

export default PersonalInfo;
