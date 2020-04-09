import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import { RootState } from "../../store/types"
import {
  createIncrementAction,
  createDecrementAction,
  createResetAction,
  createSyncStateAction,
} from "./actions"
import { getCounter } from "./selectors"

const mapStateToProps = (state: RootState) => ({
  count: getCounter(state),
})

const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  reset: createResetAction,
  syncState: createSyncStateAction,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Counter: React.FC<Props> = ({
  count,
  syncState,
  increment,
  decrement,
  reset,
}) => {
  useEffect(() => {
    syncState()
  }, [])

  return (
    <>
      <span>{count}</span>
      <Button color="inherit" onClick={increment}>
        +
      </Button>
      <Button color="inherit" onClick={decrement}>
        -
      </Button>
      <Button color="inherit" onClick={reset}>
        Reset
      </Button>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
