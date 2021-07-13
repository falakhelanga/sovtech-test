import React from "react";
import LayOut from "./layouts";
import DetailsPage from "./pages/detailPage";
import Home from "./pages/Home";
import Search from "./pages/search/Search";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LayOut>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/details" exact>
            <DetailsPage />
          </Route>
          <Route path="/:search">
            <Search />
          </Route>
        </Switch>
      </LayOut>
    </div>
  );
}

export default App;
