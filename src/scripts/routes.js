import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import {Main} from "./pages/Main";
import {NotFound} from "./pages/NotFound";
import {Search} from "./pages/Search";

export default props => (
  <HashRouter>
      <Switch>
        <Route exact path='/' component={ Main } />
        <Route exact path='/search' component={Search} />
        <Route path='*' component={NotFound} />
      </Switch>
  </HashRouter>
)