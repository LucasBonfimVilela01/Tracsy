//Define que o código deve ser rodado do lado do cliente
"use client";

//Importa as dependências necessárias
import { GuiaHome } from "@/components/elements/guiaHome";
import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";
import Link from "next/link";
import { useEffect } from "react";

function HomePage() {

  //Usa o "useEffect" para pegar dados externos ou afetar o back do lado do cliente
  useEffect(() => {
    //Define o título da página como o nome dela
    handleTitle("Home")
  }, []);

  return (
    /*Define a responsividade para aumentar gradualmente o tamanho do container do conteúdo.*/
    <div className="sm:w-full md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] mx-auto">

      {/*Usa o component page title e passa o nome da página.*/}
      <PageTitle title="Home" />
      
      {/*Usa o elemento de Guia home passa as informações necessárias*/}
      <GuiaHome
        title="Seja bem vindo à Tracsy!"
        description="Conectando e reencontrando pessoas desde 2025. Nossa missão não é apenas ajudar as pessoas desaparecidas, mas sim, fazer isso do melhor jeito possível."
        imgSrc="/logo-grayscale.svg"
        title2=""
        description2=""
      />

      {/*Botão para redirecionar a página de perguntas frequentes.*/}
      <div className="w-full flex justify-center">
        <Button asChild className="bg-blue-400 cursor-pointer hover:bg-blue-500">
          <Link href="/perguntasFrequentes">Aprenda como usar</Link>
        </Button>
      </div>
    </div>
  );
}

//Exporta a página HomePage
export default HomePage;