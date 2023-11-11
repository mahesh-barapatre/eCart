import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const itemDetailSlice = createSlice({
  name: 'itemDetail',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.value = action;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setItem } = itemDetailSlice.actions

export default itemDetailSlice.reducer