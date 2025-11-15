import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    return data.json()
})


const cartSlice = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers: {
        addToCart: (state,action) => {
            state.data.push(action.payload);
        },
        addProduct: (state,action) => {
            state.data.push(action.payload)
        },
        editProduct: (state,action) => {
            
        },
        deleteProduct: (state,action) => {
            state.data.splice(state.data.findIndex((arrow) => arrow.id === action.payload), 1);

        },
        setState: (state,action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state,action) => {
            state.data = action.payload
        })
    }
})

export const {addProduct, setState, deleteProduct} = cartSlice.actions
export default cartSlice.reducer;