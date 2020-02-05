import { RootState } from "../../../store/types"

export const getCounterValue = (state: RootState) => state.counter.value
