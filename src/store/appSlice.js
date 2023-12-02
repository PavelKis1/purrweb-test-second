import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: {},
        isAuth: false,
        isLoadingPage: true
    },
    reducers: {
        authUser(store, action) {
            store.user = action.payload
        },
        isAuth(store, action) {
            store.isAuth = action.payload
        },
        logout(store) {
            store.user = {};
            store.isAuth = false
        },
        isLoadingPage(store, action) {
            store.isLoadingPage = action.payload;
            console.log(store.isLoadingPage);
        }

    }
})

export const { authUser, isAuth, logout, isLoadingPage } = appSlice.actions;

export default appSlice.reducer;