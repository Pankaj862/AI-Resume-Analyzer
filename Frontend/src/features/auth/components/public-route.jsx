// Redirects already-authenticated users to Home.
// Public pages (Login, Register) should be wrapped with this.

import { useAuth } from "../hooks/useAuth";
import React from "react";
import { Navigate } from "react-router";
import Spinner from "../../../components/Loaders/Spinner";

const PublicRoute = ({ children }) => {

    const { loading, user } = useAuth()

    if (loading) {
        return <Spinner />
    }

    if (user) {
    return <Navigate to="/home" />
}

    return children
}

export default PublicRoute
