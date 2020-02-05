import React from "react"
import { connect } from "react-redux"
import Button from "../shared/components/Button"
import { RootState } from "../../store/types"
import {
  createIncrementAction,
  createDecrementAction,
  createResetAction,
} from "./actions"
import { getCounterValue } from "./selectors"

const mapStateToProps = (state: RootState) => ({
  count: getCounterValue(state),
})

const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  reset: createResetAction,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export const CounterPresentation: React.FC<Props> = ({
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
