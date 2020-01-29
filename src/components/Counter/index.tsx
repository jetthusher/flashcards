import React from "react"
import { connect } from "react-redux"
import Button from "../shared/Button"
import { RootState } from "../../store/types"
import {
  makeIncrementAction,
  makeDecrementAction,
  makeResetAction,
} from "./actions"
import { selectCounterValue } from "./selectors"

const mapStateToProps = (state: RootState) => ({
  count: selectCounterValue(state),
})

const mapDispatchToProps = {
  increment: makeIncrementAction,
  decrement: makeDecrementAction,
  reset: makeResetAction,
}

type CounterProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

export const CounterPresentation: React.FC<CounterProps> = ({
  count,
  increment,
  decrement,
  reset,
}) => (
  <>
    <span>{count}</span>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
    <Button onClick={reset}>Reset</Button>
  </>
)

export default connect(mapStateToProps, mapDispatchToProps)(CounterPresentation)
