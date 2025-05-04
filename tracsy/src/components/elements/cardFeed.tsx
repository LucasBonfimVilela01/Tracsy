import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format, differenceInYears } from "date-fns";

interface CardFeedProps {
  fotoSrc: string;
  nome: string;
  dataNasc: string; // Data de nascimento no formato ISO
  descricao: string;
  contato: string;
  mapaSrc: string;
  dataDesaparecimento: string; // Data do desaparecimento no formato ISO
}

export function CardFeed({
  fotoSrc,
  nome,
  dataNasc,
  descricao,
  contato,
  mapaSrc,
  dataDesaparecimento,
}: CardFeedProps) {
  // Calcula a idade com base na data de nascimento
  const idade = dataNasc ? differenceInYears(new Date(), new Date(dataNasc)) : "N/A";

  return (
    <div className="w-full h-125 flex bg-blue-200 rounded-xl">
      {/* Content */}
      <div className="w-[48%] h-full">
        {/* Content top */}
        <div className="w-full h-[80%] p-3 flex flex-col">
          {/* Foto */}
          <div className="w-full h-[40%] flex justify-center relative">
            <img
              src={fotoSrc}
              alt={`Foto de ${nome}`}
              className="bg-blue-400 rounded-xl object-contain w-fit h-full"
            />
          </div>

          {/* Text */}
          <div>
            {/* Dados */}
            <div className="flex justify-center p-2 font-bold">
              {/* Nome e Idade */}
              <p className="text-md">
                {nome},&nbsp;{idade}
              </p>
            </div>
            {/* Data do Desaparecimento */}
            <div className="flex justify-center mt-2 text-sm text-gray-600">
              <p>Desapareceu em: {format(new Date(dataDesaparecimento), "yyyy/MM/dd")}</p>
            </div>
            {/* Descrição */}
            <div className="flex flex-col overflow-auto">
              <h1 className="font-bold">Descrição:</h1>
              <p className="break-words">{descricao}</p>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="h-[20%] flex justify-center items-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-blue-400 w-[60%] h-[50%] cursor-pointer hover:bg-blue-500">
                Contatar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-blue-300">
              <AlertDialogHeader>
                <AlertDialogTitle>Contatar</AlertDialogTitle>
                <AlertDialogDescription className="text-black">
                  {contato}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-blue-400 cursor-pointer hover:bg-blue-500 text-white">
                  Sair
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Mapa */}
      <div className="bg-blue-400 w-[52%] h-full rounded-xl flex justify-center items-center">
        <iframe
          src={mapaSrc}
          className="w-full h-full rounded-xl"
          allowFullScreen
        />
      </div>


    </div>
  );
}
