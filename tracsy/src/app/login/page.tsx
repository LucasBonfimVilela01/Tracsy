"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o useRouter
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { PageTitle } from "@/components/ui/pageTitle";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Inicializa o useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users?email=${formData.email}&senha=${formData.senha}`
      );
      const users = await response.json();

      if (users.length > 0) {
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

        // Atualizar o campo `token` no servidor
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${users[0].id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        // Salvar o token e os dados do usuário nos cookies
        Cookies.set("loggedInUser", JSON.stringify({ ...users[0], token }), { expires: 7 });
        setMessage("Login realizado com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 200);// Reload Página de perfil
        router.push("/perfil");
      } else {
        setMessage("Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      setMessage("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-md">
      <PageTitle title="Login" />
      <div className="border p-3 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button
            type="submit"
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Entrar
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default LoginPage;