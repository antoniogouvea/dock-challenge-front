import axios from 'axios';
import { User, UserLogin } from '../types/User';
import { api } from "../../api/axios.config"

export const useApi = () => ({
  validateToken: async (token: string | null) => {
    const response = await api.post('', {
      query: `
            {validateToken(token:"${token}"){
           user{
                name
                _id
              }
        }}
        `  });
    return response.data;
  },
  signIn: async (user: UserLogin) => {
    const { email, password } = user
    const response = await api.post('', {
      query: `
        mutation {
            login(data: { password: "${password}", email: "${email}" }) {
              user{
                email
                _id
                name
              }
              token
            }
          }
        `  });
    return response.data.data.login;
  },
  logout: async () => {
    return { status: true };
    const response = await api.post('/logout');
    return response.data;
  }
});