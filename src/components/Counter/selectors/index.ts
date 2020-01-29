import { RootState } from "../../../store/types"

export const selectCounterValue = (state: RootState) => state.counter.value
