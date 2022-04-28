import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cart';


const RootReducer = combineReducers({
    cart: cartReducer,
})


export default RootReducer