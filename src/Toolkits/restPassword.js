import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userServ } from "../services/userService"

const initialState = {
    status: 'idle',
    message: null,
}

export const resetPassword = createAsyncThunk('passwordReset/resetPassword', async (recovery_password) => {
    const response = await userServ.reset_password(recovery_password)
    return response.data;
})

const passwordResetSlice = createSlice({
    name: 'passwordReset',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetPassword.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload.message;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.status = 'failed';
                state.message = action.error.message;
            });
    }
})

export default passwordResetSlice.reducer;
