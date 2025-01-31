import api from "./api";

interface SignUpData {
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  async signUp(data: SignUpData) {
    const response = await api.post("/signup", data); // verificar endpoint correto na doc da API
    return response.data;
  },

  async login(data: LoginData) {
    const response = await api.post("/login", data); // verificar endpoint correto na doc da API
    return response.data;
  },

  async logout() {
    const response = await api.post("/logout"); // verificar endpoint correto na doc da API
    return response.data;
  },
};
