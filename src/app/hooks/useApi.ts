import axios from 'axios';
import { User, UserLogin } from '../types/User';

const api = axios.create({
    baseURL: import.meta.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string | null) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signIn: async (user: UserLogin) => {
        return {
            user: { id: 3, name: 'José', email: 'jose@gmail.com' },
            token: '123456789'
        };
        // const response = await api.post('/signIn', { email, password });
        // return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
});