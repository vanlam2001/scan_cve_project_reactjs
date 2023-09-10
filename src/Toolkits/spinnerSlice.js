import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isSpinner: false,
}

const spinnerSlice = createSlice({
    name: "spinnerSlice",
    initialState,
    reducers: {
        setSpinnerOn: (state, action) => {
            state.isSpinner = true;
        },
        setSpinnerOff: (state, action) => {
            state.isSpinner = false;
        }
    }
})

export const { setSpinnerOn, setSpinnerOff } = spinnerSlice.actions;
export default spinnerSlice.reducer