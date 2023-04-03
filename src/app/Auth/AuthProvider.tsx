import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const token = getToken();
            if (user != null) return
            if (token) {
                const data = await api.validateToken(token);
                console.log("🚀 ~ file: AuthProvider.tsx:17 ~ validateToken ~ data:", data)
                if (data.user) {
                    return setUser(data.user);
                }
                else {
                    signOut()
                }
            }
        }
        validateToken();

    }, [api]);

    const signIn = async (email: string, password: string) => {
        const data = await api.signIn({ email, password })
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true
        }
        return false;
    }

    const signOut = async () => {
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    const getToken = () => {
        return localStorage.getItem('authToken');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, getToken }}>
            {children}
        </AuthContext.Provider>
    );
}