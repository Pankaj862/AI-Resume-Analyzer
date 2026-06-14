import {createBrowserRouter} from 'react-router'
import Register from './features/auth/pages/register'
import Login from './features/auth/pages/Login'
import Protected from './features/auth/components/protected'

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },

    {
        path: "/",
        element: (
        <Protected> <h1>home page</h1></Protected>
       
    )
    }
]) 