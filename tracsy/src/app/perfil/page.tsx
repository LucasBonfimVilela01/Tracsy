"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { PageTitle } from "@/components/ui/pageTitle";

function PerfilPage() {
  const [user, setUser] = useState<{ nome: string; email: string; senha: string } | null>(null);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notLoggedInMessage, setNotLoggedInMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      // Exibe mensagem após 5 segundos se o usuário não estiver logado
      const timeout = setTimeout(() => {
        setNotLoggedInMessage("Você não está logado.");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSave = () => {
    if (user) {
      Cookies.set("loggedInUser", JSON.stringify(user), { expires: 7 });
      setMessage("Dados atualizados com sucesso!");
    }
  };

  const handleLogout = () => {
    Cookies.remove("loggedInUser"); // Remove o cookie
    setUser(null); // Limpa o estado do usuário
    setMessage("Você saiu da sua conta.");
    router.push("/"); // Redireciona para a página principal
  };

  if (!user) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center text-center">
        {!notLoggedInMessage && (
          <p className="text-2xl font-bold text-gray-700">Carregando...</p>
        )}
        {notLoggedInMessage && (
          <p className="text-2xl font-bold text-red-500">{notLoggedInMessage}</p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-md">
      <PageTitle title={`Olá, ${user.nome}`} />
      {/* Editar informações */}
      <div className="border p-3 rounded-xl text-center">
        <h1 className="p-2 mb-2 font-bold">Editar Informações</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            value={user.nome}
            onChange={handleChange}
            className="p-2 border rounded"
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="p-2 border rounded"
            placeholder="Email"
          />
          <div className="relative flex justify-between">
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              value={user.senha}
              onChange={handleChange}
              className="p-2 border rounded w-[90%]"
              placeholder="Senha"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="w-[7%]"
            >
              <img
                src={showPassword ? "/mostrar.svg" : "/ocultar.svg"}
                alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className=""
              />
            </button>
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Salvar
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>

      {/* Sair da conta */}
      <div className="border p-3 rounded-xl text-center mt-4">
        <h1 className="p-2 mb-2 font-bold">Sair da Conta</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="p-2 w-full text-white rounded bg-red-400 cursor-pointer hover:bg-red-500"
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default PerfilPage;