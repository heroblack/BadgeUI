import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Badge from "../Badges/Badge";
import BadgeNew from  "../Badges/page/BadgeNew";
import BadgeAll from "../Badges/page/BadgeAll"
import BadgeDetailsContainer from '../Badges/page/BadgeDetailsContainer'
import BadgeEdit from '../Badges/page/BadgeEdit'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Switch>
          <Route exact path="/badges" component={Badge} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/all" component={BadgeAll} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
       </Switch>
       
      </BrowserRouter>
    );
  }
}

export default App;
