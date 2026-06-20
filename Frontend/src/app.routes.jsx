import {createBrowserRouter} from 'react-router'
import Register from './features/auth/pages/register'
import Login from './features/auth/pages/Login'
import Protected from './features/auth/components/protected'
import PublicRoute from './features/auth/components/public-route'
import Home from './features/interview/pages/Home'
import Interview from './features/interview/pages/interview'
import Landing from './features/landing/pages/Landing'

export const router = createBrowserRouter([
    {
        path: "/landing",
        element: <Landing />
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
    },
    {
        path: "/register",
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        )
    },

    {
        path: "/",
        element: (
        <Protected>
            <Home />
        </Protected>
       
    )
    },

   {
        path:"/interview/:interviewId",
        element: ( <Protected>
                     <Interview />
                 </Protected>
            )
    }
]) 