"use client";

import { useForm } from "react-hook-form";
import { authService } from "@/services/auth";
import { useRouter } from "next/navigation";
import { SubmitButton, TextInput } from "@/components";
import Link from "next/link";
import { useState } from "react";

interface SignUpFormData {
  email: string;
  password: string;
  phone: string;
  name: string;
  passwordConfirmation: string;
}

export default function SignUpForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpFormData>();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: SignUpFormData) => {
    // Verifica se as senhas coincidem
    if (data.password !== data.passwordConfirmation) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    try {
      await authService.signUp({
        password: data.password,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      router.push("/login"); // Redireciona para a página de login após o registro
    } catch (error: any) {
      console.error("Erro no registro:", error);
      setErrorMessage(error.response?.data?.message || "Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Campo Nome */}
      <TextInput
        {...register("name", { required: "Nome é obrigatório" })}
        label="Nome:"
        type="text"
        placeholder="Nome"
        error={errors.name?.message}
      />

      {/* Campo E-mail */}
      <TextInput
        {...register("email", {
          required: "E-mail é obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "E-mail inválido",
          },
        })}
        label="E-mail:"
        inputMode="email"
        placeholder="E-mail"
        error={errors.email?.message}
      />

      {/* Campo Telefone */}
      <TextInput
        {...register("phone", { required: "Telefone é obrigatório" })}
        label="Telefone:"
        inputMode="tel"
        placeholder="Telefone"
        error={errors.phone?.message}
      />

      {/* Campo Senha */}
      <TextInput
        {...register("password", {
          required: "Senha é obrigatória",
          minLength: {
            value: 8,
            message: "A senha deve ter pelo menos 8 caracteres",
          },
        })}
        label="Senha:"
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
      />

      {/* Campo Confirmação de Senha */}
      <TextInput
        {...register("passwordConfirmation", {
          required: "Confirme sua senha",
          validate: (value) =>
            value === watch("password") || "As senhas não coincidem",
        })}
        label="Confirmação de senha:"
        type="password"
        placeholder="Confirme sua senha"
        error={errors.passwordConfirmation?.message}
      />

      {/* Mensagem de erro */}
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}

      {/* Botão de envio e link para login */}
      <div className="flex justify-between items-center">
        <SubmitButton label="Criar Conta" />
        <Link href="/login" className="text-indigo-600 hover:text-indigo-900">
          Já possui uma conta?
        </Link>
      </div>
    </form>
  );
}