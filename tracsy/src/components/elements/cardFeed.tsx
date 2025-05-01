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
} from "@/components/ui/alert-dialog"

interface CardFeedProps {
    fotoSrc: string;
    nome: string;
    idade: string;
    descricao: string;
    contato: string;
    mapaSrc: string;
}

export function CardFeed({ fotoSrc, nome, idade, descricao, contato, mapaSrc }: CardFeedProps) {
    return (
        <div className="w-full h-125 flex bg-blue-200 rounded-xl">
            {/*Content*/}
            <div className="w-[35%] h-full">

                {/*Content top*/}
                <div className="w-full h-[80%] p-3 flex flex-col">
                    {/*Foto*/}
                    <div className="w-full h-[40%] flex justify-center">
                        <img className="bg-blue-400 w-[70%] h-full rounded-[5%] object-contain" src={fotoSrc} />
                    </div>

                    {/*Text*/}
                    <div>
                        {/*Dados*/}
                        <div className="flex justify-center p-2 font-bold">
                            {/*Nome*/}
                            <div>
                                {/*Nome não deve ser maior que 16 caráctéres por linha(não é recomendado transbordar para outras linhas por causa da descrição*/}
                                <p>{nome},&nbsp;</p>
                            </div>
                            {/*Idade*/}
                            <div>
                                {idade}
                            </div>
                        </div>
                        {/*Descrição*/}
                        <div className="flex flex-col overflow-auto">
                            {/*LIMITE DE CARACTERES DEVE SER POR VOLTA DE 120 A 140 CARACTERES*/}
                            <p>{descricao}</p>
                        </div>
                    </div>
                </div>

                {/*Actions*/}
                <div className="h-[20%] flex justify-center items-center">
                    <AlertDialog >
                        <AlertDialogTrigger asChild>
                            <Button className="bg-blue-400 w-[80%] h-[50%] cursor-pointer hover:bg-blue-500">Método de contato</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-blue-300">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Método de contato</AlertDialogTitle>
                                <AlertDialogDescription className="text-black">
                                    {contato}
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="bg-blue-400 cursor-pointer hover:bg-blue-500 text-white">Sair</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            {/*Mapa*/}
            <div className="bg-blue-400 w-[65%] h-full rounded-xl flex justify-center items-center">
                {/*Iframe do google maps
                <iframe src=" LINK " className="w-full h-full rounded-xl"/>

                Fazer com que o mapaScr seja recebido no iframe
                Código de teste (substitua pelo <p>)

                <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8298.6590190901!2d-46.564763887181876!3d-23.53738934794026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd5228bab1966d%3A0x9905169ef1825576!2sUbatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1746074635546!5m2!1spt-BR!2sbr"/>
          */}
                <iframe src={mapaSrc} className="w-full h-full rounded-xl"/>
            </div>
        </div>
    )
}