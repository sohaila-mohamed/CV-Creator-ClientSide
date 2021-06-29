import "./Category.css";
// import cv from "../../../images/Cv-img.png";
import axois from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Category() {
  const history = useHistory();
  const [categories, SetCategories] = useState([]);

  useEffect(() => {
    const res = axois
      .get("https://still-spire-04865.herokuapp.com/api/template/cat")
      .then((res) => {
        SetCategories(res.data);
      });
  });

  const routeToCat = (catName) => {
    history.push(`/templates/${catName}`);
  };

  return (
    <div className="bg-white">
      <div className="container">
        <p id="Category-Header" className="p-4">
          Categories
        </p>
        <div className="d-flex justify-content-around flex-wrap row-cols-3">
          {categories.map((c, index) => (
            <div
              key={index + 1}
              onClick={() => routeToCat(c.name)}
              className="card mb-5 Category-card-color shadow position-relative"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body text-center">
                <img src={c.image} className="img-fluid h-100" alt="cvs" />
                <div className="overlay-hover d-flex align-items-center justify-content-center">
                  <p className="text-white font-weight-bold">{c.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Category;
