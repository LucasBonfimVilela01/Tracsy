// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { useEffect, useState } from "react";
import { CardFeed } from "@/components/elements/cardFeed";
import { CardFeedSkeleton } from "@/components/elements/cardFeedSkeleton";
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";

// Define a interface para o tipo de dados dos desaparecidos
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
  // Define os estados para armazenar os desaparecidos e o estado de carregamento
  const [desaparecidos, setDesaparecidos] = useState<Desaparecido[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Executa ações ao carregar a página
  useEffect(() => {
    // Define o título da página como "Feed"
    handleTitle("Feed");

    // Função para buscar os desaparecidos do servidor
    const fetchDesaparecidos = async () => {
      try {
        // Faz a requisição para obter os dados dos desaparecidos
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/desaparecidos`);
        if (response.ok) {
          const data = await response.json();
          setDesaparecidos(data); // Atualiza o estado com os dados recebidos
        } else {
          console.error("Erro ao carregar os desaparecidos.");
        }
      } catch (error) {
        console.error("Erro ao conectar ao servidor:", error);
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchDesaparecidos();
  }, []);

  return (
    // Container principal da página
    <div className="2xl:w-[40%] lg:w-[55%] md:w-[72.5%] sm:w-[80%] flex flex-col items-center w-[90%] gap-5">
      {/* Exibe o título da página */}
      <PageTitle title="Feed Desaparecidos" />

      {/* Exibe skeletons enquanto os dados estão carregando */}
      {loading
        ? Array.from({ length: 3 }).map((_, index) => <CardFeedSkeleton key={index} />)
        : desaparecidos.map((desaparecido) => (
            // Exibe os cards com os dados dos desaparecidos
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