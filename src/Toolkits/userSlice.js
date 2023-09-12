import { createSlice } from "@reduxjs/toolkit";
import { localUserServ } from "../services/localService";

const initialState = {
    userInfo: localUserServ.get(),
    infoAccountUser: {},
    isFormUpdate: false
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        setLoginUser: (state, action) => {
            state.userInfo = action.payload
        },
        setInfoAccountUser: (state, action) => {
            state.infoAccountUser = action.payload
        },
        setFormUpdateUser: (state, action) => {
            state.isFormUpdate = action.payload;
        },
    }
});

// TODO: sau khi tạo ra các action -> bóc tách các action tại đây
export const { setUserInfo, setLoginUser, setInfoAccountUser, setFormUpdateUser } = userSlice.actions
export default userSlice.reducer