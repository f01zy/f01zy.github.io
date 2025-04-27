import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
  isLimitedHeight: boolean
  isAboutTyping: boolean
}

const initialState: InitialState = {
  isLimitedHeight: true,
  isAboutTyping: true
}

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setIsLimitedHeight: (state, { payload }: PayloadAction<boolean>) => { state.isLimitedHeight = payload },
    setIsAboutTyping: (state, { payload }: PayloadAction<boolean>) => { state.isAboutTyping = payload }
  },
})

export const {
  setIsLimitedHeight,
  setIsAboutTyping
} = utilsSlice.actions

export default utilsSlice.reducer