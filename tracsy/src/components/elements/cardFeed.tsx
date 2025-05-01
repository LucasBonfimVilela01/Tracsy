import { Button } from "../ui/button";

interface CardFeedProps {
    fotoSrc: string;
    nome: string;
    idade: string;
    descricao: string;
    mapaSrc: string;
}

export function CardFeed({fotoSrc, nome, idade, descricao, mapaSrc}:CardFeedProps) {
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
            <Button className="bg-blue-400 w-[80%] h-[50%] cursor-pointer hover:bg-blue-500">Método de contato</Button>
          </div>
        </div>
        {/*Mapa*/}
        <div className="bg-neutral-500 w-[65%] h-full rounded-xl flex justify-center items-center">
          {/*Iframe do google maps
          <iframe src=" LINK " className="w-full h-full"/>
          Fazer com que o mapaScr seja recebido no iframe
          */}
          <p>{mapaSrc}</p>
        </div>
      </div>
    )
}