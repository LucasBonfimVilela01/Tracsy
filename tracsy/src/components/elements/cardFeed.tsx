//Importa as dependências necessárias
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

//Define as propriedas que a função vai receber.
interface CardFeedProps {
  fotoSrc: string;
  nome: string;
  dataNasc: string; 
  descricao: string;
  contato: string;
  mapaSrc: string;
  dataDesaparecimento: string; 
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
  const idade = differenceInYears(new Date(), new Date(dataNasc));

  return (
    <div className="w-full sm:h-125 h-[700px] flex sm:flex-row flex-col justify-center items-center bg-blue-200 rounded-xl">
      {/* Content */}
      <div className="sm:w-[48%] w-full h-full sm:flex sm:flex-col sm:items-stretch sm:justify-center">
        {/* Content top */}
        <div className="w-full sm:p-3 p-6 flex flex-col sm:h-[80%]">
          {/* Foto */}
          <div className="w-full h-[40%] max-h-[150px] flex justify-center relative">
            <img
              src={fotoSrc}
              alt={`Foto de ${nome}`}
              className="rounded-xl object-contain w-fit h-full max-h-[150px] "
            />
          </div>

          {/* Textos */}
          <div>
            {/* Dados */}
            <div className="flex justify-center p-2">
              {/* Nome e Idade */}
              <p className="text-md">
                {nome},&nbsp;{idade}
              </p>
            </div>
            {/* Data do Desaparecimento */}
            <div className="flex justify-center mt-2 text-sm text-gray-600">
              {/*Refatora a data no formato yyyy/MM/dd*/}
              <p>Desapareceu em: {format(new Date(dataDesaparecimento), "yyyy/MM/dd")}</p>
            </div>
            {/* Separador */}
            <div className="bg-blue-300 mt-3 mb-3 order-3 h-1 w-full" />
            {/* Descrição */}
            <div className="flex flex-col overflow-auto font-light">
              <h1 className="font-normal">Descrição:</h1>
              <p className="break-words">{descricao}</p>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="sm:h-[20%] sm:pb-0 pb-3 flex justify-center items-center">
          {/*Elemento de janela de alerta*/}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              {/*Elemento do botão que realmente é mostrado*/}
              <Button className="bg-blue-400 w-[60%] sm:h-[50%] cursor-pointer hover:bg-blue-500">
                Contatar
              </Button>
            </AlertDialogTrigger>
            {/*Conteúdo da janela de alerta*/}
            <AlertDialogContent className="border-0 bg-blue-300">
              {/*Conteúdo da parte superior da janela de alerta*/}
              <AlertDialogHeader>
                <AlertDialogTitle>Contatar</AlertDialogTitle>
                <AlertDialogDescription className="text-black">
                  {contato}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                {/*Botão de sair do alerta*/}
                <AlertDialogCancel className="border-0 bg-blue-400 cursor-pointer hover:bg-blue-500 text-white">
                  Sair
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Mapa */}
      <div className="sm:w-[52%] w-full p-2 h-full rounded-xl justify-center items-center">
        <iframe
          src={mapaSrc}
          className="w-full sm:h-full h-full rounded-xl"
          allowFullScreen
        />
      </div>
    </div>
  );
}
