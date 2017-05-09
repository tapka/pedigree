import React, {Component} from "react";
import {Route, Switch, Link} from "react-router-dom";
import Pedigree from "./pedigree";
import Random from "./random";
import Home from "./home";
import Marriage from './marriage';

export default class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/animal/random' component={Random}/>
            <Route exact path='/animal/:id' component={Pedigree}/>
            <Route exact path='/marriage/:id-:mateId' component={Marriage}/>
          </Switch>
          <div className="row bottom">
            <div className="col-xs-6">
              <a href="https://github.com/tapka/pedigree" target="_blank">Github Repo</a>
            </div>
            <div className="col-xs-6 right">
              <Link to="/animal/random">Random Animal</Link>
            </div>
          </div>
        </div>
    );
  }
}
