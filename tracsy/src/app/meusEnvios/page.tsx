import { PageTitle } from "@/components/ui/pageTitle";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

// Interface que representa um desaparecido no sistema
interface Desaparecido {
  id: string; // ID do desaparecido
  nome: string;
  idade: number;
  fotoUrl: string;
  ultimaLocalizacao: string;
  dataDesaparecimento: string;
  criadoEm: string;
  atualizadoEm: string;
  userId: string; // ID do usuário que cadastrou
}

// Classe para gerenciar os dados dos desaparecidos
class DesaparecidoService {
  private desaparecidos: Desaparecido[] = [
    {
      id: "3",
      nome: "Justin Bieber",
      idade: 16,
      fotoUrl: "https://i.pinimg.com/236x/92/04/38/9204384e13f215c02c86b959e109374b.jpg",
      ultimaLocalizacao: "Zona Norte",
      dataDesaparecimento: "10/03/2024",
      criadoEm: "2024-03-10T08:45:00Z",
      atualizadoEm: "2024-03-18T16:20:00Z",
      userId: "user1",
    },
    {
      id: "1",
      nome: "Arthur Leywin",
      idade: 17,
      fotoUrl: "https://pbs.twimg.com/media/FyzsCA6XgAALnYo?format=png&name=small",
      ultimaLocalizacao: "Centro da cidade",
      dataDesaparecimento: "15/03/2024",
      criadoEm: "2024-03-15T10:00:00Z",
      atualizadoEm: "2024-03-15T10:00:00Z",
      userId: "user1",
    },
    {
      id: "2",
      nome: "Thorfinn Karlsefni",
      idade: 30,
      fotoUrl: "https://i.pinimg.com/736x/51/7c/55/517c55727a81165a801413f7c13b1eaa.jpg",
      ultimaLocalizacao: "Bairro Jardim",
      dataDesaparecimento: "20/03/2024",
      criadoEm: "2024-03-20T14:30:00Z",
      atualizadoEm: "2024-03-22T09:15:00Z",
      userId: "user1",
    },
    {
      id: "4",
      nome: "Sung Jin Woo",
      idade: 25,
      fotoUrl: "https://criticalhits.com.br/wp-content/uploads/2025/01/Solo-Leveling-Reawakening-Movie-696x392.jpg",
      ultimaLocalizacao: "Zona Sul",
      dataDesaparecimento: "25/03/2024",
      criadoEm: "2024-03-25T11:20:00Z",
      atualizadoEm: "2024-03-25T11:20:00Z",
      userId: "user1",
    },
  ];

  listar(): Desaparecido[] {
    return this.desaparecidos;
  }
}

// Componente para exibir o status de avistamentos
function DesaparecidoCard({ desaparecido }: { desaparecido: Desaparecido }) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="w-full h-64 overflow-hidden">
            <img
              src={desaparecido.fotoUrl}
              alt={desaparecido.nome}
              className="w-full h-full object-cover transition-transform duration-300 rounded-tl-lg rounded-bl-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-6 relative">
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 transition-colors duration-200"
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
            <h3 className="font-medium text-xl mb-1 text-gray-900">{desaparecido.nome}</h3>
            <p className="text-gray-600 mb-2">Idade: {desaparecido.idade} anos</p>
          </div>
          <div className="mb-0">
            <p className="text-gray-600 mb-1">
              <span className="font-medium text-gray-800">Última localização:</span> {desaparecido.ultimaLocalizacao}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Data do desaparecimento:</span> {desaparecido.dataDesaparecimento}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal da página
function MeusEnviosPage() {
  const desaparecidoService = new DesaparecidoService();
  const desaparecidos = desaparecidoService.listar();

  return (
    <div className="w-full p-6">
      <div className="pb-[6em]">
        <PageTitle title="Meus envios" />
      </div>

      <div className="flex justify-center gap-12">
        <div className="flex-1 flex flex-col gap-15 max-w-4xl">
          {desaparecidos.map((desaparecido) => (
            <DesaparecidoCard key={desaparecido.id} desaparecido={desaparecido} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeusEnviosPage;
