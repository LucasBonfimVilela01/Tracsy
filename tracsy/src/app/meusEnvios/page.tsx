"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { PageTitle } from "@/components/ui/pageTitle";
import { CardEnvio } from "@/components/elements/cardEnvio";

interface Desaparecido {
  id: number;
  nome: string;
  dataNasc: string;
  descricao: string;
  dataDesaparecimento: string;
  contato: string;
  fotoSrc: string;
  idUsuario: number;
}

function MeusEnviosPage() {
  const [desaparecidos, setDesaparecidos] = useState<Desaparecido[]>([]);
  const [userId, setUserId] = useState<number | null>(null);
  const [loadingFeedback, setLoadingFeedback] = useState<string>("");
  const [actionFeedback, setActionFeedback] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUserId(user.id);
    }

    const fetchDesaparecidos = async () => {
      try {
        setLoadingFeedback("Carregando dados...");
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos`);
        if (response.ok) {
          const data = await response.json();
          setDesaparecidos(data);
          setLoadingFeedback("");
        } else {
          setLoadingFeedback("");
          setActionFeedback("Erro ao carregar os desaparecidos.");
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
        setLoadingFeedback("");
        setActionFeedback("Erro ao conectar ao servidor.");
      }
    };

    fetchDesaparecidos();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      setLoadingFeedback("Deletando registro...");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setDesaparecidos((prev) => prev.filter((desaparecido) => desaparecido.id !== id));
        setLoadingFeedback("");
        setActionFeedback("Registro deletado com sucesso.");
      } else {
        setLoadingFeedback("");
        setActionFeedback("Erro ao deletar o registro.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      setLoadingFeedback("");
      setActionFeedback("Erro ao conectar ao servidor.");
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/editarDesaparecido/${id}`);
  };

  const meusDesaparecidos = desaparecidos.filter((desaparecido) => desaparecido.idUsuario === userId);

  return (
    <div className="w-full p-6">
      <div className="pb-[2em]">
        <PageTitle title="Meus envios" />
      </div>

      {loadingFeedback && (
        <div>
          <p className="text-center text-gray-500 text-2xl font-bold">{loadingFeedback}</p>
        </div>
      )}

      {actionFeedback && (
        <div className="mb-4 mx-auto bg-blue-100 rounded-lg p-4 relative w-full md:max-w-4xl">
          <p className="text-black">{actionFeedback}</p>
          <button
            className="absolute top-2 right-2 text-red-700 hover:text-red-900 cursor-pointer"
            onClick={() => setActionFeedback("")}
          >
            X
          </button>
        </div>
      )}

      <div className="flex justify-center gap-12">
        <div className="flex-1 flex flex-col gap-15 w-full md:max-w-4xl">
          {meusDesaparecidos.length === 0 && !loadingFeedback && (
            <div className="text-center text-gray-500 text-xl font-medium">
              Você ainda não fez nenhum envio.
            </div>
          )}

          {meusDesaparecidos.map((desaparecido) => (
            <CardEnvio
              key={desaparecido.id}
              id={desaparecido.id}
              nome={desaparecido.nome}
              dataNasc={desaparecido.dataNasc}
              descricao={desaparecido.descricao}
              dataDesaparecimento={desaparecido.dataDesaparecimento}
              contato={desaparecido.contato}
              fotoSrc={desaparecido.fotoSrc}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeusEnviosPage;