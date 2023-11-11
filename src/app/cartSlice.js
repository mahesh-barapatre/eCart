import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [...state.value, action]
    },
    remove: (state, action) => {
      console.log(action.payload.id)
      const itemIdToRemove = action.payload;
      console.log(itemIdToRemove)
      state.value = state.value.filter(item => console.log(item != itemIdToRemove));
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer