import "./profile.css";
import settings from "./assets/settings 1.svg";
import logout from "./assets/logout 1.svg";
import avatar from "./assets/emily.jpeg";

import { Route, Switch, useLocation} from "react-router-dom";

import uploadIco from "./assets/upload.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import axios from "axios";

import MyCvs from "./MyCvs/MyCvs";
import Me from "./Me/Me";
import Plan from "../Home/Plans/Plan";
import { authActions } from "../../store/auth-slice";

const Profile = () => {

  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.auth);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      history.push("/");
    }
  }, [userAuth.isLoggedIn]);

  // const [currentRoute, setcurrentRoute] = useState("")
  const [cvs, setCvs] = useState([])
  useEffect(() => {
    console.log("in use effect",location.pathname.substring(1).split("/").join(" / ").toUpperCase());
    axios
    .get(
      `https://still-spire-04865.herokuapp.com/api/user/data/${JSON.parse(localStorage.getItem("userData")).user._id}`,
      {
        headers: {
          //   ...authState.authHeaders,
          ...JSON.parse(localStorage.getItem("userData")).headers,
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      setCvs([...res.data.cvs]);
      console.log(res.data.cvs);
    })
    .catch((err) => {
      console.log(err);
    });

  }, [])

  const logoutHandler = () => {
    dispatch(authActions.logoutUser());
    history.push("/")
  };

  const { firstName, lastName } = JSON.parse(
    localStorage.getItem("userData")
  ).user;
  // console.log(firstName, lastName, cvs);
  return (
    <div>
      <div className="cover">
        <p className="text-uppercase text-center justify-content-end pt-5">
          {" "}
          cover image
        </p>
        <label htmlFor="coverImg ">
          <img
            src={uploadIco}
            alt="Uploaded"
            className="d-none d-lg-block d-md-block w-50"
          />
        </label>
        {/* <input type="file" className="align-content-end" id="coverImg" /> */}
      </div>
      <Row className="m-0 p-0">
        <Col lg="3" md="4" className="position-relative">
          <div className="sideNav d-lg-inline-block d-md-inline-block d-none">
            <div className="d-lg-flex d-md-flex align-items-center justify-content-center">
              <img
                alt="avatar"
                className="rounded-circle sideNav__profilePic d-block"
                src="https://image.flaticon.com/icons/png/512/149/149071.png"
              />
            </div>
            <p className="sideNav__profileName text-uppercase">
              {firstName} {lastName}
            </p>
            <div className="ml-5 mb-3 mr-5">
              {/* <div className="sideNav__type1 shadow pl-3 pl-lg-2 pb-2 pr-5 mb-3">
                <NavLink to="/profile/My-CVs" className="font-weight-bold text-uppercase ">
                  my cv's
                </NavLink>
              </div> */}

              <div className="sideNav__type2 pb-1 mb-3">
              <NavLink 
              activeClassName="avtive"
              to="/profile/My-CVs" className="text-uppercase">
                  my cv's
                </NavLink>
              </div>

              <div className="sideNav__type2 pb-1 mb-3">
                <a href="#" className="text-uppercase">
                  cv creator
                </a>
              </div>
              <div className="sideNav__type2 pb-1 mb-3">
                <NavLink to="/profile/my-plan"
                activeClassName="avtive"
                 className="text-uppercase">
                  My Plan
                </NavLink>
              </div>
              <div className="sideNav__type2 pb-1 mb-3">
                <a href="#" className="text-uppercase">
                  best practices guide
                </a>
              </div>
              <div className="mt-5">
                <a href="#" className="sideNav__type3 text-uppercase">
                  <img src={settings} alt="settings" />
                  settings
                </a>
              </div>
              <div className="mt-3" onClick={logoutHandler}>
                <span  className="sideNav__type3 text-uppercase">
                  <img src={logout} alt="logout" />
                  logout
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="9" md="8" sm="12">
          <div className="d-flex justify-content-center text-uppercase mt-5 mb-5">
            <div className="cvContainerLabel w-75 shadow p-3 Custom-Container">
              <p className="m-0">{location.pathname.substring(1).split("/").join(" / ").toUpperCase()}</p>
            </div>
          </div>
            
            <Switch>
            <Route
              path="/profile"
              exact
              render={() => (
                <Me></Me>
              )}
            />
            <Route
              path="/profile/My-CVs"
              render={() => (
                <MyCvs cvs={cvs}></MyCvs>
              )}
            />
            <Route
              path="/profile/my-plan"
              render={() => (
                <div >
                  <div className="plan">My Current Plan is the Free Onw </div>
                  <Plan></Plan>
                </div>
              )}
            />
              </Switch>
        </Col>
      </Row>
    </div>
  );
};
export default Profile;
