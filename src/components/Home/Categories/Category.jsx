import "./Category.css";
import cv from "../../../images/Cv-img.png";
function Category() {
  return (
    <div className="bg-white container">
      <p id="Category-Header" className="m-4">
        Categories
      </p>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card mb-5 Category-card-color shadow position-relative">
          <div className="card-body">
            <img src={cv} className="card-img h-100" alt="cvs" />
            <div className=" overlay-hover d-flex align-items-center justify-content-center">
              <p className="text-white font-weight-bold">Basic</p>
            </div>
          </div>
        </div>
        <div className="card mb-5 Category-card-color shadow position-relative">
          <div className="card-body">
            <img src={cv} className="card-img h-100" alt="cvs" />
            <div className=" overlay-hover d-flex align-items-center justify-content-center">
              <p className="text-white font-weight-bold">Modern</p>
            </div>
          </div>
        </div>
        <div className="card mb-5 Category-card-color shadow position-relative">
          <div className="card-body">
            <img src={cv} className="card-img h-100" alt="cvs" />
            <div className=" overlay-hover d-flex align-items-center justify-content-center">
              <p className="text-white font-weight-bold">College</p>
            </div>
          </div>
        </div>
        <div className="card mb-5 Category-card-color shadow position-relative">
          <div className="card-body">
            <img src={cv} className="card-img h-100" alt="cvs" />
            <div className=" overlay-hover d-flex align-items-center justify-content-center">
              <p className="text-white font-weight-bold">Junior-Level</p>
            </div>
          </div>
        </div>
        <div className="card mb-5 Category-card-color shadow position-relative">
          <div className="card-body">
            <img src={cv} className="card-img h-100" alt="cvs" />
            <div className=" overlay-hover d-flex align-items-center justify-content-center">
              <p className="text-white font-weight-bold">Senior-Level</p>
            </div>
          </div>
        </div>
        <div className="card mb-5 Category-card-color shadow position-relative">
          <div className="card-body">
            <img src={cv} className="card-img h-100" alt="cvs" />
            <div className=" overlay-hover d-flex align-items-center justify-content-center">
              <p className="text-white text-center font-weight-bold">
                Expert-Level
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
