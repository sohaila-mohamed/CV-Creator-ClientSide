import "./Category.css";
import cv from "../../../images/Cv-img.png";
function Category() {
  return (
    <div className="bg-white">
      <p id="Category-Header" className="m-4">
        Categories
      </p>
      <div className="d-flex justify-content-evenly">
        <div className="card">
          <div className="card-body">
            <img src={cv} className="card-img" alt="cvs" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={cv} className="card-img" alt="cvs" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={cv} className="card-img" alt="cvs" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={cv} className="card-img" alt="cvs" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
