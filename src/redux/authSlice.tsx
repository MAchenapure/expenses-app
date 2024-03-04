import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { User } from "../entities/user.entity";

const initialState: { isAuth: boolean, user: User } = {
    isAuth: false,
    user: {id: '', email: '', name: '', lastname: '', createdAt: null}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            const { id, email, name, lastname, createdAt } = action.payload;
            state.isAuth = true;
            state.user!.id = id;
            state.user!.email = email;
            state.user!.name = name;
            state.user!.lastname = lastname;
            state.user!.createdAt = createdAt;
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = {id: '', email: '', name: '', lastname: '', createdAt: null};
        }
    }
})

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;