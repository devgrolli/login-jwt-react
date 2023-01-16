// contexto é como se fosse uma area reservada do sistema, é uma memoria central que vai deixar gravar certas informações
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession, createUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await createSession(email, password);
        const loggedUser = response.data.info;
        const token = response.data.token;

        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', token);
        // api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser);
        navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login');
    };

    const signIn = async (name, email, password, repetPassword) => {
        await createUser(name, email, password, repetPassword);
        login(email, password)
    }

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}