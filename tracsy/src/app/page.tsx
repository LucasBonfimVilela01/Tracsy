import { CardFeed } from "@/components/elements/cardFeed";
import { PageTitle } from "@/components/ui/pageTitle";


export default function Home() {
  return (
    <div className="2xl:w-[40%] lg:w-[55%] md:w-[72.5%] sm:w-[80%] flex flex-col items-center w-[100%] gap-5">
      <PageTitle title="Feed" />
      <CardFeed 
        fotoSrc="/placeHolderImage.png" 
        nome="Nome da Pessoa" 
        idade="20" 
        descricao="Pessoa que desapareceu" 
        mapaSrc="Link do mapa"
        />
        <CardFeed 
        fotoSrc="/placeHolderImage.png" 
        nome="Nome da Pessoa" 
        idade="20" 
        descricao="Pessoa que desapareceu" 
        mapaSrc="Link do mapa"
        />
        <CardFeed 
        fotoSrc="/placeHolderImage.png" 
        nome="Nome da Pessoa" 
        idade="20" 
        descricao="Pessoa que desapareceu" 
        mapaSrc="Link do mapa"
        />
    </div>
  );
}
