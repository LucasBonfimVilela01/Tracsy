import Image from "next/image";
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

interface CardFeedProps {
  fotoSrc: string;
  nome: string;
  idade: string;
  descricao: string;
  contato: string;
  mapaSrc: string;
}

export function CardFeed({
  fotoSrc,
  nome,
  idade,
  descricao,
  contato,
  mapaSrc,
}: CardFeedProps) {
  return (
    <div className="w-full h-125 flex bg-blue-200 rounded-xl">
      {/* Content */}
      <div className="w-[35%] h-full">
        {/* Content top */}
        <div className="w-full h-[80%] p-3 flex flex-col">
          {/* Foto */}
          <div className="w-full h-[40%] flex justify-center relative">
            <Image
              src={fotoSrc}
              alt={`Foto de ${nome}`}
              fill
              className="bg-blue-400 rounded-[5%] object-contain"
            />
          </div>

          {/* Text */}
          <div>
            {/* Dados */}
            <div className="flex justify-center p-2 font-bold">
              {/* Nome */}
              <p>
                {nome},&nbsp;{idade}
              </p>
            </div>
            {/* Descrição */}
            <div className="flex flex-col overflow-auto">
              <p>{descricao}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="h-[20%] flex justify-center items-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-blue-400 w-[80%] h-[50%] cursor-pointer hover:bg-blue-500">
                Método de contato
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-blue-300">
              <AlertDialogHeader>
                <AlertDialogTitle>Método de contato</AlertDialogTitle>
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
      <div className="bg-blue-400 w-[65%] h-full rounded-xl flex justify-center items-center">
        <iframe
          src={mapaSrc}
          className="w-full h-full rounded-xl"
          allowFullScreen
        />
      </div>
    </div>
  );
}
