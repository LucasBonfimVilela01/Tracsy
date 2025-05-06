"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { PageTitle } from "@/components/ui/pageTitle";

function EditarDesaparecidoPage() {
  const router = useRouter();
  const { id } = useParams(); // Obtém o ID do desaparecido da URL
  const [formData, setFormData] = useState({
    nome: "",
    dataNasc: "",
    descricao: "",
    dataDesaparecimento: "",
    contato: "",
    fotoSrc: "",
    mapaScr: "",
  });

  useEffect(() => {
    // Busca os dados do desaparecido para preencher o formulário
    const fetchDesaparecido = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          console.error("Erro ao carregar os dados do desaparecido.");
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
      }
    };

    fetchDesaparecido();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Extrai o src se for um iframe
    if (name === "mapaScr") {
      const srcMatch = value.match(/<iframe[^>]+src="([^"]+)"/);
      const extractedSrc = srcMatch ? srcMatch[1] : value;
      setFormData((prev) => ({ ...prev, [name]: extractedSrc }));
      return;
    }
  };

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
    <div className="w-full max-w-md mx-auto rounded-md">
      <PageTitle title="Editar Desaparecido" />
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
            type="date"
            name="dataNasc"
            value={formData.dataNasc}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={formData.descricao}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="dataDesaparecimento"
            value={formData.dataDesaparecimento}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="contato"
            placeholder="Contato"
            value={formData.contato}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
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
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarDesaparecidoPage;