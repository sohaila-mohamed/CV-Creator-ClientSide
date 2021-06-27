import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import axios from "axios";

function CvD1() {
  const authState = useSelector((state) => state.auth);
  const [template, setTemplate] = useState("");
  useEffect(() => {
    const body = {
      tempId: "121",
      // userId:authState.userData._id
      userId: JSON.parse(localStorage.getItem("userData")).user._id.toString(),
    };
    console.log("authState ", { headers: { ...authState.authHeaders } });
    console.log("body", body);
    axios
      .put("https://still-spire-04865.herokuapp.com/api/user/cv", body, {
        headers: {
          //   ...authState.authHeaders,
          ...JSON.parse(localStorage.getItem("userData")).headers,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
        setTemplate(res.data);
      })
      .catch((err) => {
        console.log("Invalid Template selection");
      });
  }, []);

  // useEffect(()=>{console.log("template",template)},[template])
  return (
    <>
      <iframe
        style={{ width: "100%", height: "100%" }}
        srcDoc={template}
      ></iframe>
    </>
  );
}

export default CvD1;
