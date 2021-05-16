import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// HOC //
import WithAuth from "./hoc/WithAuth";

// Pages //
import Login from "./components/Login";
import Home from "./components/Home";
import Details from "./components/Details";

// Layouts //
import MainLayout from "./layouts/MainLayout";

const Pages = [
  {
    Page: Login,
    path: "/",
    withAuth: false,
  },
  {
    Page: Home,
    path: "/home",
    withAuth: true,
  },
  {
    Page: Details,
    path: "/details/:id",
    withAuth: true,
  },
];

function App() {
  return (
    <Router>
      <Switch>
        {Pages.map(({ Page, path, withAuth }, i) => (
          <Route exact path={path}>
            <MainLayout>
              {withAuth ? (
                <WithAuth>
                  <Page />
                </WithAuth>
              ) : (
                <Page />
              )}
            </MainLayout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
