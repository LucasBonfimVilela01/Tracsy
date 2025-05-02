"use client";

import { useState } from "react";
import { PageTitle } from "@/components/ui/pageTitle";

function CadastroPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: Date.now() }),
      });

      if (response.ok) {
        setMessage("Cadastro realizado com sucesso!");
        setFormData({ nome: "", email: "", senha: "" });
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
            type="submit"
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Cadastrar
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default CadastroPage;