import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalPrice:0,
  orderItem:[],
  orderFromCart:false,
  
  
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state,action){
      const findItem=state.cartItems.find(obj=>obj.hashedPizza===action.payload.hashedPizza)
      if(findItem)
        findItem.count=findItem.count+action.payload.count
        else{
          state.cartItems.push({...action.payload})
        }
        state.totalPrice= state.cartItems.reduce((sum,obj)=>{return Math.round((obj.price*obj.count)+sum)},0)
    },
    plusItem(state,action){
      const findItem=state.cartItems.find(obj=>obj.hashedPizza===action.payload)
      if(findItem)
        findItem.count++
        state.totalPrice= state.cartItems.reduce((sum,obj)=>{return Math.round((obj.price*obj.count)+sum)},0)
       
    },
    minusItem(state,action){
      const findItem=state.cartItems.find(obj=>obj.hashedPizza===action.payload)
      if(findItem)
        findItem.count--
        state.totalPrice= state.cartItems.reduce((sum,obj)=>{return Math.round((obj.price*obj.count)+sum)},0)
    },
    removeItem(state,action){
      state.cartItems=state.cartItems.filter(obj=>obj.hashedPizza!==action.payload)
      state.totalPrice= state.cartItems.reduce((sum,obj)=>{return Math.round((obj.price*obj.count)+sum)},0)
    },
    addItemFromItemPage(state,action){
      state.orderItem.push({...action.payload})
    },
    makeOrderFromCart(state,action){
      state.orderFromCart=action.payload
    },
   
   

  },
})
// Action creators are generated for each case reducer function
export const { addItemToCart,plusItem,minusItem,removeItem,makeOrderFromCart,addItemFromItemPage} = cartSlice.actions

export default cartSlice.reducer