"use client";

// teste deepseek
import { useForm } from "react-hook-form";
import { authService } from "@/services/auth";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

// import { useState } from "react";
import Link from "next/link";
import { SubmitButton, TextInput } from "@/components";

export default function LoginForm() {
  // teste deepseek
  const { register, handleSubmit } = useForm<LoginFormData>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await authService.login(data);
      console.log("Login bem-sucedido: ", response);
      router.push("/"); // redirect to homepage when login is ok
    } catch (error) {
      console.log("Erro no login: ", error);
    }
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Chamada para a API de autenticação
  //   console.log({ email, password });
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register("email")}
        name="email"
        label="E-mail:"
        inputMode="email"
        placeholder="E-mail"
        required={true}
      />
      <TextInput
        {...register("password")}
        name="password"
        label="Senha:"
        type="password"
        placeholder="Senha"
        required={true}
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
    // <form onSubmit={handleSubmit} className="space-y-4">
    //   <div>
    //     <label className="block text-sm font-medium text-gray-700">
    //       E-mail:
    //     </label>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       className="mt-1 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label className="block text-sm font-medium text-gray-700">Senha</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       className="mt-1 w-full rounded-md border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
    //       required
    //     />
    //   </div>
    //   <button
    //     type="submit"
    //     className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
    //   >
    //     Entrar
    //   </button>
    // </form>
  );
}
