import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/categories";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Categories />
    </React.Fragment>
  );
}

export default App;
