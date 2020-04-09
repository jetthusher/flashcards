import React from "react"
import { Route, Switch } from "react-router-dom"
import Counter from "../../counter/Counter"
import routes from "../routes"

const Router = () => (
  <>
    <Switch>
      <Route path={routes.counter} component={Counter} />
    </Switch>
  </>
)

export default Router
