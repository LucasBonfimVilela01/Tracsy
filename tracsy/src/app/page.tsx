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
        contato="email@email.com.br" 
        mapaSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8298.6590190901!2d-46.564763887181876!3d-23.53738934794026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd5228bab1966d%3A0x9905169ef1825576!2sUbatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1746074635546!5m2!1spt-BR!2sbr"
        />
        <CardFeed 
        fotoSrc="/placeHolderImage.png" 
        nome="Nome da Pessoa" 
        idade="20" 
        descricao="Pessoa que desapareceu"
        contato="email@email.com.br" 
        mapaSrc="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d228.78387064553442!2d-45.080285975644095!3d-23.44090876514013!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1746078171764!5m2!1spt-BR!2sbr"
        />
        <CardFeed 
        fotoSrc="/placeHolderImage.png" 
        nome="Nome da Pessoa" 
        idade="20" 
        descricao="Pessoa que desapareceu"
        contato="email@email.com.br" 
        mapaSrc="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d228.78387064553442!2d-45.080285975644095!3d-23.44090876514013!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1746078171764!5m2!1spt-BR!2sbr"
        />
        <CardFeed 
        fotoSrc="/placeHolderImage.png" 
        nome="Nome da Pessoa" 
        idade="20" 
        descricao="Pessoa que desapareceu"
        contato="email@email.com.br" 
        mapaSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8298.6590190901!2d-46.564763887181876!3d-23.53738934794026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd5228bab1966d%3A0x9905169ef1825576!2sUbatuba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1746074635546!5m2!1spt-BR!2sbr"
        />
    </div>
  );
}
