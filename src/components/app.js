import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Pedigree from "./pedigree";
import Home from "./home";

export default class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/:id' component={Pedigree}/>
          </Switch>
        </div>
    );
  }
}
