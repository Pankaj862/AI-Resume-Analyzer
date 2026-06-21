//to protect some pages only registerd or login user can see 

import { useAuth } from "../hooks/useAuth";
import React from "react";
import { Navigate } from "react-router";
import Spinner from "../../../components/Loaders/Spinner";

const Protected= ({children}) => {

    const {loading, user} = useAuth()
    
    if(loading) {
        return <Spinner />
    }

    if(!user) {
        return <Navigate to={'/login'}/>
        return null
    }
    
    return children
}

export default Protected