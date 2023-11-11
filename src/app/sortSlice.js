import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    customize: (state, action) => {
      // console.log(action)
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { customize } = sortSlice.actions

export default sortSlice.reducer