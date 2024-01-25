import { createSlice } from '@reduxjs/toolkit'

import { breakify } from '../helpers/breakify'

export interface BreakingState {
  breakingFirstName: [string, string, string]
  breakingLastName: [string, string, string]
}

const initialState: BreakingState = {
  breakingFirstName: ['', 'Br', 'eaking'],
  breakingLastName: ['' , 'Ba', 'd'],
}

export const breakingSlice = createSlice({
  name: 'breaking',
  initialState,
  reducers: {
    breakifyName: (state, action) => {
      const { firstName, lastName } = action.payload
      state.breakingFirstName = breakify(firstName)
      state.breakingLastName = breakify(lastName)
    }
  },
})

export const { breakifyName } = breakingSlice.actions

export default breakingSlice.reducer
