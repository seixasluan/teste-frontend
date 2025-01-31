export const Hero = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        Gerencie seus eventos com facilidade!
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Uma plataforma moderna para criar, organizar e gerenciar seus eventos
        com eficiência.
      </p>
      <a
        href="/signup"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700"
      >
        Comece Agora
      </a>
    </section>
  );
};
