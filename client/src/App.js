import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/search"]} component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
