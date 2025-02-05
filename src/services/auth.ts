import api from "./api";

interface SignUpData {
  password: string;
  name: string;
  email: string;
  phone: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  async signUp(data: SignUpData) {
    const response = await api.post("/accounts/signup", data);
    return response.data;
  },

  async login(data: LoginData) {
    const response = await api.post("/accounts/signin", data);
    return response.data;
  },
};
