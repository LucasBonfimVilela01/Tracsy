"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o useRouter
import Link from "next/link"; // Importa o Link para redirecionamento
import Cookies from "js-cookie"; // Importa o js-cookie para manipular cookies
import { PageTitle } from "@/components/ui/pageTitle";
import jwt from "jsonwebtoken";

function CadastroPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Estado para o checkbox
  const router = useRouter(); // Inicializa o useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      setMessage("Você deve aceitar os termos de uso para continuar.");
      return;
    }

    try {
      const checkEmailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users?email=${formData.email}`
      );
      const existingUsers = await checkEmailResponse.json();

      if (existingUsers.length > 0) {
        setMessage("Este e-mail já está cadastrado, tente outro.");
        return;
      }

      // Solicitar o token ao servidor
      const tokenResponse = await fetch("/api/generateToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!tokenResponse.ok) {
        setMessage("Erro ao gerar o token.");
        return;
      }

      const { token } = await tokenResponse.json();

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: Date.now(), token }),
      });

      if (response.ok) {
        const newUser = await response.json();
        Cookies.set("loggedInUser", JSON.stringify(newUser), { expires: 7 });
        setMessage("Cadastro realizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 200);// Reload Página de perfil
        router.push("/perfil");
      } else {
        setMessage("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      setMessage("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-md">
      <PageTitle title="Cadastro" />
      <div className="border p-3 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <div className="relative flex justify-between">
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              className="p-2 border rounded w-[90%]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="w-[7%] cursor-pointer"
            >
              <img
                src={showPassword ? "/mostrar.svg" : "/ocultar.svg"}
                alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className=""
              />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor="acceptTerms" className="text-gray-700">
              Eu li e aceito os{" "}
              <Link href="/termosDeUso" className="text-blue-500 underline">
                termos de uso
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Cadastrar
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}

export default CadastroPage;