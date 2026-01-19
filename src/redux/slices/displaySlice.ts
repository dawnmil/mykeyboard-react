import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
  value: ""
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setLetter: (state, action) => {
        return {
            ...state,
            value: action.payload
        }
    }
  }
})

export const { setLetter } = displaySlice.actions

export const selectDisplay = (state: RootState) => state.display

export default displaySlice.reducer