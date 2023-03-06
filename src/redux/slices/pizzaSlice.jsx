import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus ',
    async ({categoryId,pageCurrent}) => {
    const {data} = await axios.get(`https://63ca304ef36cbbdfc7539138.mockapi.io/Pizzas?page=${pageCurrent}&limit=8&${categoryId>0 ? `category=${categoryId}`: ""}`)
    return data
  })
  
const initialState = {
  items: []
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state,action){
        state.items=action.payload
    },
    
  },
  extraReducers:{
    // [fetchPizzas.fulfilled]:(state,action)=>{
    //     state.items=action.payload
    // },
    [fetchPizzas.fulfilled]:(state,action)=>{
        state.items=action.payload
    },
    // [fetchPizzas.fulfilled]:(state,action)=>{
    //     state.items=action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { setCategoryId} = pizzaSlice.actions

export default pizzaSlice.reducer