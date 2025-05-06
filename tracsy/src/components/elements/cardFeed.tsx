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
  // Calcula a idade com base na data de nascimentox 
  const idade = dataNasc ? differenceInYears(new Date(), new Date(dataNasc)) : "N/A";

  return (
    <div className="sm:w-full w-full p-3 sm:h-125 h-180 flex flex-col sm:flex-row bg-blue-200 rounded-xl">
      {/* Content */}
          {/* */}
      <div className="w-full sm:h-[100%] sm:w-[48%] h-[50%]">
        {/* Content top */}
        <div className="w-full p-3 max-h-[85%] flex flex-row sm:flex-col">
          {/* */}
          {/* Left: foto + dados + data */}
          <div className="flex flex-col sm:h-[80%] items-center w-1/3 sm:w-full">
            {/* Foto */}
            <div className="w-full h-[180px] flex justify-center relative">
              <img
                src={fotoSrc}
                alt={`Foto de ${nome}`}
                className="sm:max-h-45 bg:transparent sm:max-w-60 sm:object-contain object-contain sm:w-fit sm:h-full"
              />
            </div>
            {/* Nome e Idade */}
            <div className="flex justify-center p-2 font-bold">
              <p className="text-md">{nome},&nbsp;{idade}</p>
            </div>
            {/* Data do Desaparecimento */}
            <div className="flex justify-center mt-2 text-sm text-gray-600">
              <p>Desapareceu em: {format(new Date(dataDesaparecimento), "yyyy/MM/dd")}</p>
            </div>
            {/* Separador */}
          <div className="sm:bg-blue-300 sm:order-3 sm:mt-2 sm:mb-2 sm:h-1 sm:w-[95%] !sm:invisible" />
          </div>
          {/* Right: descrição */}
          <div className="flex flex-row-reverse w-2/3 sm:w-full sm:h-[20%] overflow-hidden pl-2" 
          >{/* Separador vertical */}
            <div className="bg-blue-300 order-3 mt-1 mb-5 ml-2 mr-2 h-[100%] w-1 sm:invisible" />

            <div className="flex flex-col w-full">
                <h1 className="font-bold sm:text-md">Descrição:</h1>
                <p className="break-words">{descricao}</p>
            </div>
        </div>
      </div>
        {/* Actions */}
        <div className="sm:h-[20%] sm:p-3 flex justify-center items-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-blue-400 w-[40%] sm:w-[60%] sm:h-[50%] cursor-pointer hover:bg-blue-500">
                Contatar
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="border-0 bg-blue-300">
              <AlertDialogHeader>
                <AlertDialogTitle>Contatar</AlertDialogTitle>
                <AlertDialogDescription className="text-black">
                  {contato}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-0 bg-blue-400 cursor-pointer hover:bg-blue-500 text-white">
                  Sair
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full h-[100%] sm:w-[52%] sm:h-full bg-blue-400 rounded-xl flex justify-center items-center">
        <iframe
          src={mapaSrc}
          className="w-full h-full rounded-xl"
          allowFullScreen
        />
      </div>
    </div>

  );
}