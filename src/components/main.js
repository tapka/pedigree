import React from "react";
import {Route, Switch} from "react-router-dom";

import Animal from "./animal";
import Home from "./home";

export default () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/:id' component={Animal}/>
    </Switch>
)