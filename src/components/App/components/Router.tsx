import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Counter from "../../Counter"
import CardSetList from "../../CardSetList"
import routes from "../routes"

const Router = () => (
  <>
    <Redirect from="/" to={routes.cardSetList} />
    <Switch>
      <Route path={routes.counter} component={Counter} />
      <Route path={routes.cardSetList} component={CardSetList} />
    </Switch>
  </>
)

export default Router
