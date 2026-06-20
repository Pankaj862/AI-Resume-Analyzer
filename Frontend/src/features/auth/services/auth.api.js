//how frontend gonna interact with backend for auth related stuff

import axios from "axios";

const api = axios.create({
    baseURL: "http://Localhost:3000",
    withCredentials: true
})


export async function register({username, email, password}) {
    try {
    const response = await api.post("/api/auth/register", {
        username,
        email,
        password
    }) 

     return response.data;
}catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}

export async function login({email, password}) {

    try {
        const response = await api.post("/api/auth/login", {
            email,
            password
        })
        return response.data;
        
    } catch(err) {
        console.log("Error during login:", err);
        throw err;
    }
}

export async function logout() {
    try { 
        const response = await api.get("/api/auth/logout")
        return response.data;

    } catch(err) {
        console.log("Error during logout:", err);
        throw err;
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me")
        return response.data;
    } catch(err) {
        console.log("Error during getMe:", err);
        throw err;
    }
}
