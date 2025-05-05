"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { PageTitle } from "@/components/ui/pageTitle";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { differenceInYears } from "date-fns";

interface Desaparecido {
  id: number; // ID do desaparecido
  nome: string;
  dataNasc: string; // Data de nascimento
  descricao: string;
  dataDesaparecimento: string;
  contato: string; // Contato do desaparecido
  fotoSrc: string; // URL da foto
  mapaScr: string; // URL do mapa
  idUsuario: number; // ID do usuário que cadastrou
}

function MeusEnviosPage() {
  const [desaparecidos, setDesaparecidos] = useState<Desaparecido[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    // Obtém o ID do usuário logado
    const loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUserId(user.id);
    }

    // Busca os desaparecidos do servidor
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
      }
    };

    fetchDesaparecidos();
  }, []);

  // Filtra os desaparecidos pelo ID do usuário logado
  const meusDesaparecidos = desaparecidos.filter((desaparecido) => desaparecido.idUsuario === userId);

  return (
    <div className="w-full p-6">
      <div className="pb-[6em]">
        <PageTitle title="Meus envios" />
      </div>

      <div className="flex justify-center gap-12">
        <div className="flex-1 flex flex-col gap-15 w-full md:max-w-4xl">
          {meusDesaparecidos.map((desaparecido) => {
            // Calcula a idade com base na data de nascimento
            const idade = differenceInYears(new Date(), new Date(desaparecido.dataNasc));

            return (
              <div key={desaparecido.id} className="bg-blue-100 rounded-lg shadow-lg w-full md:w-full">
                <div className="flex flex-col md:flex-row">
                  {/* Foto */}
                  <div className="w-full md:w-1/3">
                    <div className="w-full h-64 overflow-hidden">
                      <img
                        src={desaparecido.fotoSrc}
                        alt={desaparecido.nome}
                        className="w-full h-full object-contain md:object-cover transition-transform duration-300 rounded-tl-lg md:rounded-bl-lg"
                      />
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="w-full md:w-2/3 p-6 relative">
                    <div className="static md:absolute top-4 right-4 flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-blue-200 transition-colors duration-200"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-medium text-xl mb-1 text-gray-900">
                        {desaparecido.nome}, {idade}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium text-gray-800">Data de Nascimento:</span>{" "}
                        {new Date(desaparecido.dataNasc).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="break-words text-gray-600 mb-1">
                        <span className="font-medium text-gray-800">Descrição:</span> {desaparecido.descricao}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medi  um text-gray-800">Data do Desaparecimento:</span>{" "}
                        {new Date(desaparecido.dataDesaparecimento).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="mb-0">
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium text-gray-800">Contato:</span> {desaparecido.contato}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MeusEnviosPage;