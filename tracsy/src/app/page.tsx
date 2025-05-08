"use client";

import { GuiaHome } from "@/components/elements/guiaHome";
import { Button } from "@/components/ui/button";
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";
import Link from "next/link";
import { useEffect } from "react";

function homePage() {

  useEffect(() => {
    //Define o título da página como o nome dela
    handleTitle("Home")
  }, []);

  return (
    <div className="sm:w-full md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] mx-auto">
      <PageTitle title="Home" />
      <GuiaHome
        title="Seja bem vindo à Tracsy!"
        description="Conectando e reencontrando pessoas desde 2025. Nossa missão não é apenas ajudar as pessoas desaparecidas, mas sim, fazer isso do melhor jeito possível."
        imgSrc="/logo-grayscale.svg"
        title2=""
        description2=""
      />
      <div className="w-full flex justify-center">
        <Button asChild className="bg-blue-400 cursor-pointer hover:bg-blue-500">
          <Link href="/perguntasFrequentes">Aprenda como usar</Link>
        </Button>
      </div>
    </div>
  );
}

export default homePage;