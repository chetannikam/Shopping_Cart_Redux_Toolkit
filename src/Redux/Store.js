import { configureStore } from '@reduxjs/toolkit'
import CartList from './Slices/CartList'
export default configureStore({
  reducer: {
      cart:CartList,
  }
})