import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Counter from "../../counter/Counter"
import routes from "../routes"

const Router = () => (
  <>
    <Redirect from="/" to={routes.counter} />
    <Switch>
      <Route path={routes.counter} component={Counter} />
    </Switch>
  </>
)

export default Router
