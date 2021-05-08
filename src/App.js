import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Components ///
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

/// Higher Order Components ///
import { WithAuth } from "./hoc";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <WithAuth>
              <Home />
            </WithAuth>
          </Route>
          <Route exact path="/details/:id">
            <WithAuth>
              <Detail />
            </WithAuth>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
