import Link from "next/link";

export default function Home() {
  
  return (
    <div className="bg-zinc-400 w-screen h-screen flex items-center justify-center">
      <div className="max-w-[550px] w-full p-3 bg-zinc-900 flex flex-col gap-y-5 items-center justify-center">
        <Link className="text-white font-medium text-xl hover:text-zinc-400 transition duration-200" href={"/login"}>Já Possui conta? Faça login</Link>
        <Link className="text-white font-medium text-xl hover:text-zinc-400 transition duration-200" href={"/register"}>Não Possui conta? cadastre-se</Link>
      </div>
    </div>
  );
}
