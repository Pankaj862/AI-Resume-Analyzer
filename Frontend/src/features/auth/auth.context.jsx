import {createContext, useState} from "react"; //import craeteContext from react


export const Authcontext = createContext(); // Authcontext = empty box It doesn't store any data yet. It just creates the box.

export const AuthProvider = ({children}) => {       // AuthProvider = person who puts data into the box
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    return (
        <Authcontext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </Authcontext.Provider>
    )
} 