import Login from "../pages/login/Login";
import Home from "../pages/home/Home";



export const privateRoute = [
    {
        path: "/",
        element: <Home />
    }
];


export const loginRoute = [
    {
        path: "/",
        element: <Login />
    }
];
