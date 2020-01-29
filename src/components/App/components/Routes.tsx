import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Counter from "../../Counter"

const Routes = () => (
  <>
    <Redirect from="*" to="/counter" />
    <Switch>
      <Route path="/counter" component={Counter} />
    </Switch>
  </>
)

export default Routes
