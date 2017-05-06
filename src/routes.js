import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import AnimalCard from './components/animal_card';

export default (
  <Route path="/" component={App}>
    <Route path=":id" component={AnimalCard} />
  </Route>
);
