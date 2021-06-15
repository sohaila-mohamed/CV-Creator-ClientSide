import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header> </Header>

      <Switch>
        <Route path="/Editor" render={() => <p>Editor</p>} />
        <Route exact path="/templates" render={() => <p>Templates</p>} />
        <Route path="/tips" render={() => <p>Tips</p>} />
        <Route path="/about-us" render={() => <p>About</p>} />
        <Route path="/sign-in" render={() => <p>Sign in</p>} />
        <Route path="/sign-up" render={() => <p>sign up</p>} />
        <Route exact path="/" component={Home} />
        <Route path="*" render={() => <p>404</p>} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
