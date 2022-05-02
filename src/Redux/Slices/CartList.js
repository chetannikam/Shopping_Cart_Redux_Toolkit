import { createSlice } from "@reduxjs/toolkit";

const sliceObject = {
  name: "Cart",
  initialState: {
    cartlist:'',
    count:0
  },
  reducers: {
    updateCart: (state, action) => {
      state.cartlist=action.payload;
    
    },
    countCart:(state,action)=>{
      state.count+=1
    },
    removeItem:(state,action)=>{
      console.log('deleted index',action.payload)
      state.cartlist=state.cartlist.filter((product,index)=>action.payload!=index)
      console.log('after remove',state.cartlist);
      state.count-=1
    }
  },
};
const cartSlice = createSlice(sliceObject);

export const { updateCart,countCart,removeItem } = cartSlice.actions;

export default cartSlice.reducer;