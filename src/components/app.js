import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Pedigree from "./pedigree";
import Home from "./home";
import Marriage from './marriage';

export default class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/animal/:id' component={Pedigree}/>
            <Route exact path='/marriage/:id-:mateId' component={Marriage}/>
          </Switch>
        </div>
    );
  }
}
