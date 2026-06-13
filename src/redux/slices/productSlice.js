import {createSlice} from "@reduxjs/toolkit"

const intialState = {
    productItem: [],
}

const productSlice = createSlice({
    name: "products",
    initialState: intialState,
    reducers: {}
})

export default productSlice.reducer