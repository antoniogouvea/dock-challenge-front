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
            const token = localStorage.getItem('authToken');
            if (user != null) return
            if (token && user === null) {
                const data = await api.validateToken(token);
                if (data.user) {
                    return setUser(data.user);
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
        console.log("signOut está sendo executada.");
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}