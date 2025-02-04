import ResetPasswordForm from "./form";

export default function ResetPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-indigo-700">
          Recuperar Senha
        </h1>
        <ResetPasswordForm />
      </div>
    </div>
  );
}
