import {createSlice, current} from "@reduxjs/toolkit";

export const stackSlice = createSlice({
    name: 'stack',
    initialState: [{id: 1, qty: 0}, {id: 2, qty: 0}],
    reducers: {
        replace: (state, {payload}) => {
            console.log("-> state", current(state));


            return state.map(s => {
                return s.id === payload.id ? payload : s
            } )
        }
    }
})

export const {replace} = stackSlice.actions
export default stackSlice.reducer