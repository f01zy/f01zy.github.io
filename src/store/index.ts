import { combineReducers, configureStore } from "@reduxjs/toolkit"
import utils from "./slices/utils.slice"

const reducers = combineReducers({ utils })

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch