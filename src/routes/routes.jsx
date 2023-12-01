import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";



export const privateRoute = [
    {
        path: "/",
        element: <Home />
    }
];


export const loginRoute = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
];
