import { RootState } from "../../../../../store";

export const selector = (state: RootState) => state.counterReducer.value
