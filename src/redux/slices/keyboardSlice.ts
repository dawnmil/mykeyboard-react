import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
  capitalized: false,
  topKeys: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  middleKeys: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  bottomKeys: ["z", "x", "c", "v", "b", "n", "m"],
  utilKeys: ["shift", "clear"]
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    shiftUpper: state => {
      return {
        ...state,
        capitalized: true,
        topKeys: state.topKeys.map(key => key.toUpperCase()),
        middleKeys: state.middleKeys.map(key => key.toUpperCase()),
        bottomKeys: state.bottomKeys.map(key => key.toUpperCase())
      }
    },
    shiftLower: state => {
      return {
        ...state,
        capitalized: false,
        topKeys: state.topKeys.map(key => key.toLowerCase()),
        middleKeys: state.middleKeys.map(key => key.toLowerCase()),
        bottomKeys: state.bottomKeys.map(key => key.toLowerCase())
      }
    }
  }
})

export const { shiftUpper, shiftLower } = keyboardSlice.actions

export const selectKeyboard = (state: RootState) => state.keyboard

export default keyboardSlice.reducer