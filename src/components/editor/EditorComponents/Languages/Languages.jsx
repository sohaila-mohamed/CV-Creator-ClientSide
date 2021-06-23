import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Languages.css";
import FormInput from "../../../ui-utilities/FormInput";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ActionBtns from "./../../../ui-utilities/ActionBtns/ActionBtns";
function Languages(props) {
  const [ArrLang, SetArrLang] = useState([]);
  const [Language, SetLanguage] = useState({});
  const [filled, SetFilled] = useState(true);
  var langRate = ["Entry", "Intermediate", "Fluent"];
  useEffect(() => {
    SetLanguage(props.data);
    SetArrLang(props.Arr);
  }, []);

  useEffect(() => {
    props.SetLangageData(Language);
  }, [Language]);

  useEffect(() => {
    props.LangArrData(ArrLang);
  }, [ArrLang]);

  const LangHandler = (v) => {
    SetLanguage({ ...Language, Lang: v });
  };
  const RateHandler = (v) => {
    SetLanguage({ ...Language, rate: v });
  };
  const addLanguage = () => {
    if (Language.rate !== "" && Language.Lang !== "") {
      SetArrLang((prev) => {
        return [...prev, Language];
      });
      SetFilled(true);
      //   for (const val in Language) {
      //     Language[val] = "";
      //   }
    } else {
      SetFilled(false);
    }
  };
  //   const saveChanges = () => {
  //     props.LangArrData(ArrLang);
  //   };
  //   const resetChanges = () => {
  //     for (const val in Language) {
  //       Language[val] = "";
  //     }
  //     SetLanguage({ ...Language });
  //     props.SetLangageData(Language);
  //   };
  return (
    <div>
      <h3>Languages</h3>
      <div className="d-flex justify-content-between aligen-items-center">
        <FormInput
          title="Language"
          value={Language.Lang}
          valueBack={LangHandler}
          width="45"
        />
        {/* <FormInput title="Rate" value={Language.rate} valueBack={RateHandler} width="45"/> */}
        <DropdownButton
          id={`dropdown-split-variants-Secondary`}
          variant="secondary"
          title="Rate"
          className="align-self-end"
        >
          {langRate.map((value, i) => (
            <Dropdown.Item
              eventKey={i}
              onSelect={(e) => {
                RateHandler(langRate[parseInt(e)]);
              }}
            >
              {value}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      {filled ? (
        ""
      ) : (
        <p className="badge-danger mt-2 mb-2 p-2 rounded">
          Please Fill the inputs
        </p>
      )}
      <Button className="mr-0 custom-style mt-3 mb-3" onClick={addLanguage}>
        <FontAwesomeIcon icon={faPlus} id="custom-icon"></FontAwesomeIcon>
      </Button>
      {ArrLang.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Language</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {ArrLang.map((lang, i) => (
              <tr key={i}>
                {" "}
                <th scope="row">{i + 1}</th>
                <td>{lang.Lang}</td>
                <td>{lang.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <ActionBtns onSave={saveChanges} onReset={resetChanges} /> */}
    </div>
  );
}
export default Languages;
