import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: {},
        isAuth: false,
    },
    reducers: {
        authUser(store, action) {
            store.user = action.payload
        },
        isAuth(store, action) {
            store.isAuth = action.payload
            localStorage.setItem('isAuthLocal', store.isAuth)
        },
        logout(store) {
            store.user = {};
            store.isAuth = false
            localStorage.setItem('isAuthLocal', store.isAuth)
        }
    }
})

export const { authUser, isAuth, logout } = appSlice.actions;

export default appSlice.reducer;