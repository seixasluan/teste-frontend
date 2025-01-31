import LoginForm from "./form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-indigo-700">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
