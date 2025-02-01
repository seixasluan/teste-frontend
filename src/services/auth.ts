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
    console.log(data);
    const response = await api.post("/accounts/signup", data);
    return response.data;
  },

  async login(data: LoginData) {
    const response = await api.post("/login", data); // verificar endpoint correto na "doc" da API
    return response.data;
  },

  async logout() {
    const response = await api.post("/logout"); // verificar endpoint correto na "doc" da API
    return response.data;
  },
};
