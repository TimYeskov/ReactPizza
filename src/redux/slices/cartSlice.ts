import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CartItemsType = {
  imageUrl: string;
  price: number;
  title: string;
  count: number;
  sizes: number;
  types: string;
  hashedPizza: string;
};
interface cartSliceState {
  cartItems: CartItemsType[];
  totalPrice: number;
  orderItem: CartItemsType[];
  login: boolean;
}
const initialState: cartSliceState = {
  cartItems: [],
  totalPrice: 0,
  orderItem: [],
  login: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openLogin(state, action: PayloadAction<boolean>) {
      state.login = action.payload;
    },
    addItemToCart(state, action: PayloadAction<CartItemsType>) {
      const findItem = state.cartItems.find(
        (obj) => obj.hashedPizza === action.payload.hashedPizza
      );
      if (findItem) findItem.count = findItem.count + action.payload.count;
      else {
        state.cartItems.push({ ...action.payload });
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return Math.round(obj.price * obj.count + sum);
      }, 0);
    },
    plusItem(state, action: PayloadAction<string>) {
      const findItem = state.cartItems.find(
        (obj) => obj.hashedPizza === action.payload
      );
      if (findItem) findItem.count++;
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return Math.round(obj.price * obj.count + sum);
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.cartItems.find(
        (obj) => obj.hashedPizza === action.payload
      );
      if (findItem) findItem.count--;
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return Math.round(obj.price * obj.count + sum);
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.hashedPizza !== action.payload
      );
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return Math.round(obj.price * obj.count + sum);
      }, 0);
    },
    addItemToOrder(state, action) {
      state.orderItem.push(action.payload);
    },
    PreparedOrder(state) {
      state.orderItem = [];
      state.cartItems = [];
    },
  },
});
export const {
  openLogin,
  addItemToCart,
  plusItem,
  minusItem,
  removeItem,
  addItemToOrder,
  PreparedOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
