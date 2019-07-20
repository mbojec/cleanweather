import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import {Main} from "./pages/Main";
import {NotFound} from "./pages/NotFound";

export default props => (
  <HashRouter>
      <Switch>
        <Route exact path='/' component={ Main } />
        <Route path='*' component={NotFound} />
      </Switch>
  </HashRouter>
)