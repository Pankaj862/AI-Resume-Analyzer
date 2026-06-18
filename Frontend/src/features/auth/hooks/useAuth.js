import { useContext, useEffect } from "react";
import { Authcontext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(Authcontext)
    const {user, setUser, loading, setLoading } = context //we withdraw what we provide by authprovider // this is hook layer which is used to manage the state and api layers 

    const handleLogin = async ({email, password}) => {
        setLoading(true)
        try{
             const data = await login({email, password})
        setUser(data.user)
        } catch(err) {

        } finally{
            setLoading(false )
        }
       
    }

    const handleRegister = async ({username, email, password}) => {
        setLoading(true)
        try {
             const data = await register({username, email, password})
        setUser(data.user)
        } catch(err) {

        } finally {
             setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
        const data = await logout()
        setUser(null)
        } catch(err) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {  
        const getAndSetUser = async() => {
            try{
            const data = await getMe()
            setUser(data.user)
            } catch(err){} finally{
            setLoading(false)
            }
        }

        getAndSetUser()
    }, [])
    return{user, loading, handleLogin, handleRegister, handleLogout}
}
