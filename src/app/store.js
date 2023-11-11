import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import cartReducer from './cartSlice'
import sortReducer from './sortSlice'
import itemDetailReducer from './itemDetailSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    sort: sortReducer,
    itemDetail: itemDetailReducer,

  },
})