import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface filterSliceState {
  categoryId:number
  searchValue:string
}
const initialState = {
  categoryId: 0,
  searchValue:''
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state,action:PayloadAction<number>){
        state.categoryId=action.payload
    },
    setSearchValue(state,action){
      state.searchValue=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategoryId,setSearchValue} = filterSlice.actions

export default filterSlice.reducer