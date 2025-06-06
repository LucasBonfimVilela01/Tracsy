// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; 
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";

function CadastrarDesaparecidoPage() {
  // Define os estados para armazenar os dados do formulário, tipo de contato, mensagens de feedback e ID do usuário logado
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

  // Executa ações ao carregar a página
  useEffect(() => {
    // Define o título da página como "Reportar desaparecido"
    handleTitle("Reportar desaparecido");

    // Recupera o ID do usuário logado dos cookies
    const loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setIdUsuario(user.id); // Define o ID do usuário logado
    }
  }, []);

  // Atualiza os dados do formulário ao alterar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Limita a descrição a 105 caracteres
    if (name === "descricao" && value.length > 105) {
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

    // Extrai o src se for um iframe no campo de mapa e valida o link
if (name === "mapaScr") {
  const srcMatch = value.match(/<iframe[^>]+src="([^"]+)"/);
  const extractedSrc = srcMatch ? srcMatch[1] : value;

  // Verifica se o link começa com "https://www.google.com/maps/embed"
  if (extractedSrc.startsWith("https://www.google.com/maps/embed")) {
    setFormData((prev) => ({ ...prev, [name]: extractedSrc }));
  } else {
    setFormData((prev) => ({ ...prev, [name]: "" })); // Define como vazio se não for válido
    setMessage("Erro: O link do mapa deve ser um embed do Google Maps.");
  }
  return;
}

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Lida com o envio do formulário para cadastrar um desaparecido
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se o usuário está logado
    if (!idUsuario) {
      setMessage("Erro: Usuário não está logado.");
      return;
    }

    // Formata o campo de contato com o prefixo selecionado
    const formattedContato =
      contactType === "email" ? `Email: ${formData.contato}` : `Telefone: ${formData.contato}`;

    try {
      // Envia os dados do desaparecido para o servidor
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, contato: formattedContato, id: Date.now(), idUsuario }), // Usa o ID do usuário logado
      });

      if (response.ok) {
        setMessage("Cadastro realizado com sucesso!");
        // Reseta os campos do formulário
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
    // Container principal da página
    <div className="w-full max-w-md mx-auto rounded-md">
      {/* Exibe o título da página */}
      <PageTitle title="Cadastrar Desaparecido" />

      {/* Formulário para cadastrar um desaparecido */}
      <div className="border p-3 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Campo para o nome */}
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para a data de nascimento */}
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

          {/* Campo para a descrição */}
          <textarea
            name="descricao"
            placeholder="Descrição (máximo 105 caracteres)"
            value={formData.descricao}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para a data do desaparecimento */}
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

          {/* Campo para a URL da foto */}
          <input
            type="url"
            name="fotoSrc"
            placeholder="URL da Foto"
            value={formData.fotoSrc}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para a URL do mapa */}
          <input
            type="url"
            name="mapaScr"
            placeholder="URL do Mapa"
            value={formData.mapaScr}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Botão para enviar o formulário */}
          <button
            type="submit"
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Cadastrar
          </button>
        </form>

        {/* Exibe mensagens de feedback */}
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

// Exporta a página CadastrarDesaparecidoPage
export default CadastrarDesaparecidoPage;