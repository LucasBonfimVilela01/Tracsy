"use client";

import { useEffect, useState } from "react";
import { CardFeed } from "@/components/elements/cardFeed";
import { CardFeedSkeleton } from "@/components/elements/cardFeedSkeleton"; // Importa o skeleton
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

export default function Feed() {
  const [desaparecidos, setDesaparecidos] = useState<Desaparecido[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

  useEffect(() => {
    const fetchDesaparecidos = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos`);
        if (response.ok) {
          const data = await response.json();
          setDesaparecidos(data);
        } else {
          console.error("Erro ao carregar os desaparecidos.");
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchDesaparecidos();
  }, []);

  return (
    <div className="2xl:w-[40%] lg:w-[55%] md:w-[72.5%] sm:w-[80%] flex flex-col items-center w-[95%] gap-5">
      <PageTitle title="Feed Desaparecidos" />

      {/* Exibe skeletons enquanto carrega */}
      {loading
        ? Array.from({ length: 3 }).map((_, index) => <CardFeedSkeleton key={index} />)
        : desaparecidos.map((desaparecido) => (
            <CardFeed
              key={desaparecido.id}
              fotoSrc={desaparecido.fotoSrc}
              nome={desaparecido.nome}
              dataNasc={desaparecido.dataNasc}
              descricao={desaparecido.descricao}
              contato={desaparecido.contato}
              mapaSrc={desaparecido.mapaScr}
              dataDesaparecimento={desaparecido.dataDesaparecimento}
            />
          ))}
    </div>
  );
}
