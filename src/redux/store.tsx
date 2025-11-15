import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

export const store = () =>  configureStore({
    reducer: {product: productReducer}
})

// store.subscribe("store change:", store.getState())
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;