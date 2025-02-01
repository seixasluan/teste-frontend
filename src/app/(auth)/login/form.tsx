"use client";

// teste deepseek
import { useForm } from "react-hook-form";
import { authService } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { SubmitButton, TextInput } from "@/components";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  // teste deepseek
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFormData>();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authService.login({
        email: data.email,
        password: data.password,
      });

      console.log("Login bem-sucedido: ", response);
      router.push("/"); // redirect to homepage when login is ok
    } catch (error: any) {
      console.log("Erro no login: ", error);
      setErrorMessage(error.response?.data?.message || "Erro ao fazer login. Tente Novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        {...register("email", { required: "E-mail é obrigatório",
          pattern:{
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
        {...register("password", { required: "Senha é obrigatório"})}
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
        <SubmitButton label="Entrar" />
        <Link href="/signup" className="text-indigo-600 hover:text-indigo-900">
          Não possui uma conta?
        </Link>
      </div>
    </form>
  );
}