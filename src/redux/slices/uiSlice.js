import {createSlice} from "@reduxjs/toolkit"

const intialState = {
    isSidebarOpen:false,
}

const uiSclice = createSlice({
    name:"ui",
    initialState: intialState,
    reducers:{},
})

export default uiSclice.reducer