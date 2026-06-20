// Redirects already-authenticated users to Home.
// Public pages (Login, Register) should be wrapped with this.

import { useAuth } from "../hooks/useAuth";
import React from "react";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {

    const { loading, user } = useAuth()

    if (loading) {
        return (<main><h1>Loading...</h1></main>)
    }

    if (user) {
        return <Navigate to="/" />
    }

    return children
}

export default PublicRoute
