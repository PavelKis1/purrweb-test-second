import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

// const defaultState = {

// }

// const authSlice = createSlice({
//     name: 'Auth',
//     initialState: {
//         jwt: '',
//         user: '',
//         isAuth: false
//     },
//     reducers: {
//         addJwt: state => {
//            state.jwt = ''
//         },
//         auth: state => {
//             state.value -= 1
//         }
//     }
// })

// const redusers = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'ADD__JWT':
//             return { ...state, jwt: action.payload }
//         case 'AUTH':
//             return { ...state, isAuth: true }
//         case 'LOGOUT':
//             return { ...state, jwt: '', user: '', isAuth: false }
//         case 'AUTH__USER':
//             return { ...state, user: action.payload }
//         default:
//             return state;
//     }
// }

// const store = configureStore({ reducer: reduserUser });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);