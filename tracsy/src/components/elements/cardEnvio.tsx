//Importa as dependências necessárias
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { differenceInYears } from "date-fns";

//Define as propriedas que a função vai receber.
interface CardEnvioProps {
  id: number;
  nome: string;
  dataNasc: string;
  descricao: string;
  dataDesaparecimento: string;
  contato: string;
  fotoSrc: string;
  onEdit: (id: number) => void; // Recebe um id a editar
  onDelete: (id: number) => void; // Recebe um id a deletar 
}

export function CardEnvio({
  id,
  nome,
  dataNasc,
  descricao,
  dataDesaparecimento,
  contato,
  fotoSrc,
  onEdit,
  onDelete,
}: CardEnvioProps) {
  // Calcula a idade com base na data de nascimento
  const idade = differenceInYears(new Date(), new Date(dataNasc));

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg w-full">
      <div className="flex flex-col md:flex-row">
        {/* Foto */}
        <div className="w-full md:w-1/3">
          <div className="w-full h-64 overflow-hidden">
            <img
              src={fotoSrc}
              alt={nome}
              className="w-full h-full object-contain md:object-cover transition-transform duration-300 rounded-tl-lg md:rounded-bl-lg"
            />
          </div>
        </div>

        {/* Informações */}
        <div className="w-full md:w-2/3 p-6 relative">
          {/* Botões */}
          <div className="static md:absolute top-4 right-4 flex gap-2">
            {/* Botão de editar */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-200 transition-colors duration-200"
              //Envia o id do card para edição
              onClick={() => onEdit(id)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            {/* Botão de deletar */}
            <Button
              variant="ghost"
              size="icon"
              className="text-red-600 hover:bg-red-50 transition-colors duration-200"
              //Envia o id do card para deleção
              onClick={() => onDelete(id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          {/* Informações pessoais */}
          <div className="mb-4">
            <h3 className="font-medium text-xl mb-1 text-gray-900">
              {nome}, {idade}
            </h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium text-gray-800">Data de Nascimento:</span>{" "}
              {new Date(dataNasc).toLocaleDateString()}
            </p>
          </div>
          {/* Informações do desaparecimento*/}
          <div className="mb-4">
            <p className="break-words text-gray-600 mb-1">
              <span className="font-medium text-gray-800">Descrição:</span> {descricao}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Data do Desaparecimento:</span>{" "}
              {new Date(dataDesaparecimento).toLocaleDateString()}
            </p>
          </div>
          {/* Informações de contato*/}
          <div className="mb-0">
            <p className="text-gray-600 mb-1">
              <span className="font-medium text-gray-800">Contato:</span> {contato}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}