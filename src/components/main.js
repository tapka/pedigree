import React from 'react';
import {Route} from 'react-router';
import { Switch } from 'react-router-dom';

import AnimalCard from './animal_card';
import Home from './home';

export default () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:id' component={AnimalCard}/>
      </Switch>
    </main>
)