import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isModalVisible: false,
}

const resetPasswordSlice = createSlice({
    name: "resetPasswordSlice",
    initialState,
    reducers: {
        resetPasswordSucces: (state, action) => {
            state.isModalVisible = true;
        },
        handleSuccess: (state, action) => {
            state.isModalVisible = false;
        },
        closeFormSuccess: (state, action) => {
            state.isModalVisible = false;
        }
    }
})

export const { resetPasswordSucces, handleSuccess, closeFormSuccess } = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer