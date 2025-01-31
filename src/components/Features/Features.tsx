export const Features = () => {
  return (
    <section className="bg-white py-12 px-6 grid gap-8 sm:grid-cols-3 text-center">
      <div>
        <h3 className="text-xl font-semibold text-indigo-600">
          Cadastro Simples
        </h3>
        <p className="mt-2 text-gray-600">
          Crie sua conta em poucos passos e comece a usar.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-600">
          Eventos Ilimitados
        </h3>
        <p className="mt-2 text-gray-600">
          Gerencie quantos eventos quiser sem complicação.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-600">
          Segurança Garantida
        </h3>
        <p className="mt-2 text-gray-600">
          Seus dados protegidos com autenticação segura.
        </p>
      </div>
    </section>
  );
};
