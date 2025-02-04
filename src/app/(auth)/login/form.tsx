"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { SubmitButton, TextInput } from "@/components";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      await login(data.email, data.password);
      router.push("/");
      // const response = await authService.login({
      //   email: data.email,
      //   password: data.password,
      // });

      // console.log("Login bem-sucedido: ", response);
      // router.push("/"); // redirect to homepage when login is ok
    } catch (error) {
      console.log("Login Error: ", error);
      setErrorMessage("Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        {...register("email", {
          required: "E-mail é obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "E-mail inválido",
          },
        })}
        name="email"
        label="E-mail:"
        inputMode="email"
        placeholder="E-mail"
        error={errors.email?.message}
      />
      <TextInput
        {...register("password", { required: "Senha é obrigatório" })}
        name="password"
        label="Senha:"
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
      />
      <Link
        href="/reset-password"
        className="text-indigo-600 hover:text-indigo-900"
      >
        Esqueceu a senha?
      </Link>

      <div className="flex justify-between items-center mt-4">
        <SubmitButton
          label={loading ? "Entrando..." : "Entrar"}
          disabled={loading}
        />
        <Link href="/signup" className="text-indigo-600 hover:text-indigo-900">
          Não possui uma conta?
        </Link>
      </div>
    </form>
  );
}
