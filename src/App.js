import React from "react";
import "./styles.css";
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav style={{ display: "inline-block", padding: "25px" }}>
            <ul style={{ listStyle: "none", display: "flex" }}>
              <li>
                <Link to="/">
                  <Button style={{ marginRight: "112px" }}>Page1</Button>
                </Link>
              </li>
              <li>
                <Link to="/demo2">
                  {" "}
                  <Button>Page2</Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Demo />
            </Route>
            <Route path="/demo2">
              <Demo2 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
