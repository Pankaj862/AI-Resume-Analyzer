import {createContext, useState, useEffect} from "react"; //import craeteContext from react
import { getMe } from "./services/auth.api";

export const Authcontext = createContext(); // Authcontext = empty box It doesn't store any data yet. It just creates the box.

export const AuthProvider = ({children}) => {       // AuthProvider = person who puts data into the box
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    return (
        <Authcontext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </Authcontext.Provider>
    )
} 