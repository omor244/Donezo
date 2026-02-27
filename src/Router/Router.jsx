import { createBrowserRouter } from "react-router";
import Login from "../Components/Login/Login";
import MainLayOut from "../LayOut/MainLayOut";
import Dashboard from "../DashboardComponents/Dashboard";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/", 
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
]);