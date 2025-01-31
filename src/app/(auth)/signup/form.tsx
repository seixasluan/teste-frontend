"use client";

// teste da deepseek
import { useForm } from "react-hook-form";
import { authService } from "@/services/auth";
import { useRouter } from "next/navigation";

interface SignUpFormData {
  email: string;
  password: string;
}

import { SubmitButton, TextInput } from "@/components";
import Link from "next/link";
// import { useActionState } from "react";

export default function SignUpForm() {
  // teste deepseek
  const { register, handleSubmit } = useForm<SignUpFormData>();
  const router = useRouter();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      await authService.signUp(data);
      router.push("/login"); // redirect to login page after register
    } catch (error) {
      console.log("Erro no registro: " + error);
    }
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // Chamada para a API de cadastro
  //   console.log({ email, password });
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register("email")}
        name="name"
        label="Nome:"
        type="text"
        placeholder="Nome"
        required
      />
      <TextInput
        name="email"
        label="E-mail:"
        inputMode="email"
        placeholder="E-mail"
        required
      />
      <TextInput
        {...register("password")}
        name="password"
        label="Senha"
        type="password"
        placeholder="Senha"
        required
      />
      <TextInput
        name="passwordConfirmation"
        label="Confirmação de senha"
        type="password"
        placeholder="Confirmação de senha"
        required
      />

      <div className="flex justify-between items-center">
        <SubmitButton label="Criar Conta" />
        <Link href="/login" className="text-indigo-600 hover:text-indigo-900">
          Já possui uma conta?
        </Link>
      </div>
    </form>
    // <form onSubmit={handleSubmit} className="space-y-4">
    //   <div>
    //     <label className="block text-sm font-medium text-gray-700">
    //       E-mail
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
    //     Criar Conta
    //   </button>
    // </form>
  );
}
