"use client";

import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { SubmitButton, TextInput } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface SignUpFormData {
  email: string;
  password: string;
  phone: string;
  name: string;
  passwordConfirmation: string;
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const { signUp } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: SignUpFormData) => {
    // Verifica se as senhas coincidem
    if (data.password !== data.passwordConfirmation) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      await signUp(data.email, data.password, data.phone, data.name);
      router.push("/login");
    } catch (error) {
      console.error("Erro no registro:", error);
      setErrorMessage("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <fieldset disabled={loading} className="space-y-4">
        <TextInput
          {...register("name", { required: "Nome é obrigatório" })}
          label="Nome:"
          type="text"
          placeholder="Nome"
          error={errors.name?.message}
          disabled={loading}
          className={loading ? "bg-gray-200 cursor-not-allowed" : ""}
        />

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
          disabled={loading}
          className={loading ? "bg-gray-200 cursor-not-allowed" : ""}
        />

        <TextInput
          {...register("phone", { required: "Telefone é obrigatório" })}
          label="Telefone:"
          inputMode="tel"
          placeholder="Telefone"
          error={errors.phone?.message}
          disabled={loading}
          className={loading ? "bg-gray-200 cursor-not-allowed" : ""}
        />

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
          disabled={loading}
          className={loading ? "bg-gray-200 cursor-not-allowed" : ""}
        />

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
          disabled={loading}
          className={loading ? "bg-gray-200 cursor-not-allowed" : ""}
        />

        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}

        <div className="flex justify-between items-center">
          <SubmitButton
            label={
              <span className="inline-flex items-center min-w-[100px] justify-center">
                {loading ? (
                  <FaSpinner className="animate-spin text-white" />
                ) : (
                  "Criar conta"
                )}
              </span>
            }
            disabled={loading}
            className={`transition-all ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-800"
            }`}
          />

          <Link
            href="/login"
            className={`text-indigo-600 hover:text-indigo-900 ${
              loading ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Já possui uma conta?
          </Link>
        </div>
      </fieldset>
    </form>
  );
}
