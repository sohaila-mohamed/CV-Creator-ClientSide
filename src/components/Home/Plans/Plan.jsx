import { faArrowRight ,faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Plan.css";
function Plan() {

  const userAuth = useSelector(state => state.auth);

  return (
    <div className="bg-white">
      <div className="container">
        <p id="Plan-Header" className="p-4">
          Our plans
        </p>
        <div className="d-flex justify-content-around flex-wrap">
          <div className="card mb-5 p-3 shadow mb-5">
            <p className="Plan-color-gray p-3 text-center">Service #1</p>
            <div className="card-body">
              <p className="text-price">Free</p>
              <p className="text-dark text-center card-text">
                You can create up to 2 CVs with all of the available Categories
                and Templates
              </p>
            </div>
            <div className="card-footer bg-white text-center">
                {!userAuth.userData && 
                  <NavLink to="/sign-up">
                  <Button className="Plan-color-gray w-100">Sign up</Button>
                  </NavLink>
                }
                {userAuth.userData && 
                  <div className="py-2 text-success">
                    <span className="mr-2">Already Subscribed</span>
                  <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                  </div>
                  
                }
            </div>
          </div>

          <div className="card mb-5 p-3 shadow mb-5">
            <p className="Plan-color-blue p-3 text-center">Service #2</p>
            <div className="card-body">
              <p className="text-price m-0">
                $ 12 <sup>99</sup>
              </p>
              <p className="text-center small p-0" style={{ color: "#C0C0C0" }}>
                Per month
              </p>
              <p className="text-dark text-center card-text">
                You can create up to 10 CVs with all of the available Categories
                and Tempaltes
              </p>
            </div>
            <div className="card-footer bg-white">
              <Button className="Plan-color-blue w-100">Subscribe</Button>
            </div>
          </div>

          <div className="card mb-5 p-3 shadow mb-5">
            <p className="Plan-color-gray p-3 text-center">Service #3</p>
            <div className="card-body">
              <p className="text-price m-0">
                $ 19 <sup>99</sup>
              </p>
              <p className="text-center small p-0" style={{ color: "#C0C0C0" }}>
                Per month
              </p>
              <p className="text-dark text-center card-text">
                You can create up to 20 CVs with all of the available Categories
                and Tempaltes
              </p>
            </div>
            <div className="card-footer bg-white">
              <Button className="Plan-color-gray w-100">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Plan;
