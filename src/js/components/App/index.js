import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Badge from "../Badges/Badge";
import BadgeNew from  "../Badges/page/BadgeNew";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
          <Route exact path="/badges" component={Badge} />
          <Route exact path="/badges/new" component={BadgeNew} />
       </Switch>
       
      </BrowserRouter>
    );
  }
}

export default App;
