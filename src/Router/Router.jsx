import { createBrowserRouter } from "react-router";
import Login from "../Components/Login/Login";
import MainLayOut from "../LayOut/MainLayOut";
import Dashboard from "../DashboardComponents/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/", 
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
]);