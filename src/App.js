import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthWrapper from "./components/authentication/AuthWrapper";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/categories";
import Error from "./components/Error/Error";
import EditorWrapper from "./components/editor/editorWrapper/editorWrapper";
import { React } from "react";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Editor" component={EditorWrapper} />
        <Route exact path="/templates" component={Categories} />
        <Route path="/about-us" render={() => <p>About</p>} />
        <Route path="/sign-in" component={AuthWrapper} />
        <Route path="/sign-up" component={AuthWrapper} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
