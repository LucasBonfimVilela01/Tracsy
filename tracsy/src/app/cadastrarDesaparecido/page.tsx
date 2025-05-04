"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Importar o js-cookie para acessar o cookie do usuário
import { PageTitle } from "@/components/ui/pageTitle";

function CadastrarDesaparecidoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    dataNasc: "",
    descricao: "",
    dataDesaparecimento: "",
    contato: "",
    fotoSrc: "",
    mapaScr: "",
  });
  const [contactType, setContactType] = useState<"email" | "telefone">("telefone"); // Tipo de contato
  const [message, setMessage] = useState("");
  const [idUsuario, setIdUsuario] = useState<number | null>(null); // Estado para armazenar o ID do usuário logado

  useEffect(() => {
    const loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setIdUsuario(user.id); // Define o ID do usuário logado
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Limita a descrição a 70 caracteres
    if (name === "descricao" && value.length > 70) {
      return;
    }

    // Aplica a máscara para o telefone
    if (name === "contato" && contactType === "telefone") {
      const formattedValue = value
        .replace(/\D/g, "") // Remove caracteres não numéricos
        .replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3"); // Aplica o formato (##) #####-####
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idUsuario) {
      setMessage("Erro: Usuário não está logado.");
      return;
    }

    // Formata o campo de contato com o prefixo selecionado
    const formattedContato =
      contactType === "email" ? `Email: ${formData.contato}` : `Telefone: ${formData.contato}`;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, contato: formattedContato, id: Date.now(), idUsuario }), // Usa o ID do usuário logado
      });

      if (response.ok) {
        setMessage("Cadastro realizado com sucesso!");
        setFormData({
          nome: "",
          dataNasc: "",
          descricao: "",
          dataDesaparecimento: "",
          contato: "",
          fotoSrc: "",
          mapaScr: "",
        });
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
      <PageTitle title="Cadastrar Desaparecido" />
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
          {/* Campo de entrada para a data de nascimento */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Data de Nascimento</label>
            <input
              type="date"
              name="dataNasc"
              value={formData.dataNasc}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <textarea
            name="descricao"
            placeholder="Descrição (máximo 70 caracteres)"
            value={formData.descricao}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          {/* Campo de entrada para a data do desaparecimento */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Data do Desaparecimento</label>
            <input
              type="date"
              name="dataDesaparecimento"
              value={formData.dataDesaparecimento}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          {/* Campo de contato com seletor de tipo */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Contato</label>
            <div className="flex gap-2">
              <select
                value={contactType}
                onChange={(e) => setContactType(e.target.value as "email" | "telefone")}
                className="p-2 border rounded"
              >
                <option value="telefone">Telefone</option>
                <option value="email">Email</option>
              </select>
              <input
                type={contactType === "email" ? "email" : "tel"}
                name="contato"
                placeholder={contactType === "email" ? "Digite o email" : "Digite o telefone"}
                value={formData.contato}
                onChange={handleChange}
                className="p-2 border rounded flex-1"
                required
              />
            </div>
          </div>
          <input
            type="url"
            name="fotoSrc"
            placeholder="URL da Foto"
            value={formData.fotoSrc}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="url"
            name="mapaScr"
            placeholder="URL do Mapa"
            value={formData.mapaScr}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
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

export default CadastrarDesaparecidoPage;
