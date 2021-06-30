import React from 'react'
import share from "./../assets/share 1.svg";
import view from "./../assets/view 2.svg";
import download from "./../assets/download 1.svg";
import Card from "react-bootstrap/Card";
import addSign from "./../assets/add 1.svg";
import { useHistory } from 'react-router';
function MyCvs(props) {
    const history = useHistory();
    const editCv = (id)=>{
        history.push(`/Editor/192/${id}`)
    }
    return (
        <div className="d-flex flex-wrap justify-content-center mb-5">
        {props.cvs.map((cv, index) => (
          <Card
            onClick={()=>{editCv(cv._id)}}
            key={index + 1}
            className=" border-custom mr-1 apper mb-5 mr-3"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              src={cv.image}
              className=" img-fluid  p-2 "
              style={{ background: "#6b82b7" }}
            />
            <div className="cvContainer__cvCard__panel d-flex align-items-center justify-content-center">
              <img alt="hover" src={share} className="mr-4" />
              <img alt="hover" src={view} className="mr-4" />
              <img alt="hover" src={download} className="mr-4" />
            </div>
          </Card>
        ))}
       
        <Card
          className=" border-custom custom align-items-center justify-content-center"
          style={{ width: "18rem" }}
        >
          <p
            className="mt-5 text-capitalize font-weight-bold pl-2"
            style={{ color: " #6b82b7" }}
          >
            create new for new job profile
          </p>
          <Card.Img
            src={addSign}
            className="mb-4"
            variant="top"
            style={{ width: "55px" }}
          ></Card.Img>
        </Card>
      </div>
   
    )
}

export default MyCvs
