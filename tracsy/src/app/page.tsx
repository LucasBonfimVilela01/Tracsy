"use client";

import { useEffect, useState } from "react";
import { CardFeed } from "@/components/elements/cardFeed";
import { PageTitle } from "@/components/ui/pageTitle";

interface Desaparecido {
  id: number;
  nome: string;
  dataNasc: string;
  descricao: string;
  dataDesaparecimento: string;
  contato: string;
  fotoSrc: string;
  mapaScr: string;
}

export default function Home() {
  const [desaparecidos, setDesaparecidos] = useState<Desaparecido[]>([]);
  const [loadingFeedback, setLoadingFeedback] = useState<string>(""); // Feedback de carregamento

  useEffect(() => {
    const fetchDesaparecidos = async () => {
      try {
        setLoadingFeedback("Carregando dados...");
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos`);
        if (response.ok) {
          const data = await response.json();
          setDesaparecidos(data);
          setLoadingFeedback(""); // Limpa o feedback após o carregamento
        } else {
          setLoadingFeedback("");
          console.error("Erro ao carregar os desaparecidos.");
        }
      } catch (error) {
        setLoadingFeedback("");
        console.error("Erro ao conectar ao servidor:", error);
      }
    };

    fetchDesaparecidos();
  }, []);

  return (
    <div className="2xl:w-[40%] lg:w-[55%] md:w-[72.5%] sm:w-[80%] flex flex-col items-center w-[100%] gap-5">
      <PageTitle title="Feed" />

      {/* Campo Feedback de Carregamento */}
      {loadingFeedback && (
        <div>
          <p className="text-center text-gray-500 text-2xl font-bold">{loadingFeedback}</p>
        </div>
      )}

      {desaparecidos.map((desaparecido) => (
        <CardFeed
          key={desaparecido.id}
          fotoSrc={desaparecido.fotoSrc}
          nome={desaparecido.nome}
          dataNasc={desaparecido.dataNasc} // Envia a data de nascimento diretamente
          descricao={desaparecido.descricao}
          contato={desaparecido.contato}
          mapaSrc={desaparecido.mapaScr}
          dataDesaparecimento={desaparecido.dataDesaparecimento} // Passa a data do desaparecimento
        />
      ))}
    </div>
  );
}
