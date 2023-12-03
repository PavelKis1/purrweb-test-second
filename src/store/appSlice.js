import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: {},
        isAuth: false,
        isLoadingPage: false
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
            store.isAuth = false;
            localStorage.removeItem('token');
            document.cookie = `refresh=0; max-age=-1`
        },
        isLoadingPage(store, action) {
            store.isLoadingPage = action.payload;
        }

    }
})

export const { authUser, isAuth, logout, isLoadingPage } = appSlice.actions;

export default appSlice.reducer;