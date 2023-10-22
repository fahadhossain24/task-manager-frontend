import { createBrowserRouter } from "react-router-dom";
import AppInitialLayout from "../ApplicationLayout/AppInitialLayout";
import Dashboard from '../pages/Dashboard';
import CreateNew from '../pages/CreateNew';
import NewTasks from '../pages/NewTasks';
import InProgress from '../pages/InProgress';
import Completed from '../pages/Completed';
import Canceled from '../pages/Canceled';
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./privateRoute";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppInitialLayout/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/create-new',
                element: <PrivateRoute><CreateNew/></PrivateRoute>
            },
            {
                path: '/new-tasks',
                element: <PrivateRoute><NewTasks/></PrivateRoute>
            },
            {
                path: '/in-progress',
                element: <PrivateRoute><InProgress/></PrivateRoute>
            },
            {
                path: '/completed',
                element: <PrivateRoute><Completed/></PrivateRoute>
            },
            {
                path: '/canceled',
                element: <PrivateRoute><Canceled/></PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default routes;
