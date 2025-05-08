// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";

function EditarDesaparecidoPage() {
  // Instancia o roteador para navegação
  const router = useRouter();

  // Obtém os parâmetros da URL
  const params = useParams();

  const id = params?.id as string; // Garante que "id" é uma string

  // Define o estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    dataNasc: "",
    descricao: "",
    dataDesaparecimento: "",
    contato: "",
    fotoSrc: "",
    mapaScr: "",
  });

  // Executa ações ao carregar a página
  useEffect(() => {
    // Define o título da página como "Editar registro"
    handleTitle("Editar registro");

    // Verifica se o ID está presente na URL
    if (!id) {
      console.error("ID não encontrado na URL.");
      return;
    }

    // Busca os dados do desaparecido para preencher o formulário
    const fetchDesaparecido = async () => {
      try {
        // Pega as informações do usuário da url
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data); // Atualiza o estado com os dados recebidos
        } else {
          console.error("Erro ao carregar os dados do desaparecido.");
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
      }
    };

    fetchDesaparecido();
  }, [id]);

  // Atualiza os dados do formulário ao alterar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Limita a descrição a 105 caracteres
    if (name === "descricao" && value.length > 105) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Extrai o src se for um iframe no campo de mapa
    if (name === "mapaScr") {
      const srcMatch = value.match(/<iframe[^>]+src="([^"]+)"/);
      const extractedSrc = srcMatch ? srcMatch[1] : value;
      setFormData((prev) => ({ ...prev, [name]: extractedSrc }));
      return;
    }
  };

  // Lida com o envio do formulário para atualizar os dados
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redireciona para a página "Meus Envios" com feedback
        router.push(`/meusEnvios?actionFeedback=Registro atualizado com sucesso.`);
      } else {
        console.error("Erro ao atualizar o registro.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
    }
  };

  return (
    // Container principal da página
    <div className="w-full max-w-md mx-auto rounded-md">
      {/* Exibe o título da página */}
      <PageTitle title="Editar Desaparecido" />

      {/* Formulário para editar os dados do desaparecido */}
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
          <input
            type="date"
            name="dataNasc"
            value={formData.dataNasc}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para a descrição */}
          <textarea
            name="descricao"
            placeholder="Descrição (máximo 105 caracteres)"
            value={formData.descricao}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para a data de desaparecimento */}
          <input
            type="date"
            name="dataDesaparecimento"
            value={formData.dataDesaparecimento}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para o contato */}
          <input
            type="text"
            name="contato"
            placeholder="Contato"
            value={formData.contato}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

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
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}

// Exporta a página EditarDesaparecidoPage
export default EditarDesaparecidoPage;