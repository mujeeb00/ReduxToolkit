import {createSlice} from '@reduxjs/toolkit'


const initialState={
    value:12
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    
    reducers:{
        Add:(state)=>{
            state.value=state.value+1

        }
    }
})

export const {Add}=counterSlice.actions
export default  counterSlice.reducer;
