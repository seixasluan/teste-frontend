"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { authService } from "@/services/auth";
import { toast } from "sonner";

interface AuthContextType {
  isAuthenticated: boolean;
  signUp: (
    email: string,
    password: string,
    phone: string,
    name: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const signUp = async (
    email: string,
    password: string,
    phone: string,
    name: string
  ) => {
    try {
      const response = await authService.signUp({
        email,
        password,
        phone,
        name,
      });

      toast.success("Conta criada com sucesso! 🚀");
      return response.data;
    } catch (error) {
      toast.error(
        "Erro ao criar conta. Verifique os campos e tente novamente."
      );
      console.log("Erro ao criar conta: ", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      if (response.token) {
        localStorage.setItem("authToken", response.token);
        setIsAuthenticated(true);
      }
      toast.success("Login realizado com sucesso! 🚀");
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      toast.info("Você saiu da conta.");
    } catch (error) {
      toast.error("Erro ao fazer logout.");
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};
