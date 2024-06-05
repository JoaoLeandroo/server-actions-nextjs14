import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">USUARIO REGISTRADO COM SUCESSO</h1>
      <Link
        href={"/register"}
        className="text-xl font-semibold text-zinc-700 hover:opacity-75 transition duration-200
            "
      >
        Cadastre-se novamente
      </Link>
    </div>
  );
};

export default Dashboard;
