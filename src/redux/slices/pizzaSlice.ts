
import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export type fetchPizzaParams={
  categoryId:number,
  pageCurrent:number,
  searchValue:string
}
export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus ',
    async (params:fetchPizzaParams) => {
      const {categoryId,pageCurrent,searchValue}=params
    const {data} = await axios.get(`https://63ca304ef36cbbdfc7539138.mockapi.io/Pizzas?page=${pageCurrent}&limit=8&${categoryId>0 ? `category=${categoryId}`: ""}${searchValue}`)
    return data as itemsType[]
  })
  
   export type itemsType={
    id:string
    imageUrl:string,
    title:string,
    decription:string,
    types:number[]
    sizes:number[],
    price:number[],
    category:number,
    rating:number
  }
interface pizzaSliceState{
  items:itemsType[]
}
const initialState:pizzaSliceState = {
  items:[]
}

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state,action){
        state.items=action.payload
    },
    
  },
  // extraReducers:{
  //   // [fetchPizzas.fulfilled]:(state,action)=>{
  //   //     state.items=action.payload
  //   // },
  //   [fetchPizzas.fulfilled]:(state,action)=>{
  //       state.items=action.payload
  //   },
  //   // [fetchPizzas.fulfilled]:(state,action)=>{
  //   //     state.items=action.payload
  //   // }
  // }
  extraReducers:builder=>{
    builder.addCase(fetchPizzas.pending,(state,action)=>{
          state.items=[]
    })
    builder.addCase(fetchPizzas.fulfilled,(state,action)=>{
           state.items=action.payload
    })
    builder.addCase(fetchPizzas.rejected,(state,action)=>{
           state.items=[]
     })
    }
})

// Action creators are generated for each case reducer function
// export const { setCategoryId} = pizzaSlice.actions

export default pizzaSlice.reducer