//Define que o código deve ser rodado do lado do cliente
"use client";

//Importa as dependências necessárias
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import Cookies from "js-cookie";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Usa o "useEffect" para pegar dados externos ou afetar o back do lado do cliente
  useEffect(() => {
    // Verifica se o usuário está logado
    const loggedInUser = Cookies.get("loggedInUser");
    setIsLoggedIn(!!loggedInUser); // Define como true se o cookie existir
  }, []);

  return (
    // Container principal do Header
    <div className="sticky top-0 z-50 backdrop-blur-md bg-blue-200/70 p-3 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center shadow-md">
      {/*Logo que quando clicada você é redirecionado para a home*/}
      <div>
        <Link href="/">
          <img
            src="/logo-no-background.svg"
            alt="Logo"
            className="h-8 w-auto fill-black"
          />
        </Link>
      </div>

      {/* Links */}
      <div className="flex">
        <div className="flex flex-wrap justify-center items-center">
          {/*Link que é padrão para todos os usuários*/}
          <Button asChild variant="link">
            <Link href="/feed">Feed principal</Link>
          </Button>

          {isLoggedIn ? (
            <>
            {/*Links para quando o usuário esta logado*/}
              <Button asChild variant="link">
                <Link href="/cadastrarDesaparecido">Reportar desaparecido</Link>
              </Button>
              <Button asChild variant="link">
                <Link href="/meusEnvios">Meus envios</Link>
              </Button>
              {/*Elemento do avatar que redireciona para a página de perfil*/}
              <Link href="/perfil" className="w-10 h-10">
                <Avatar className="w-10 h-10 rounded-full overflow-hidden bg-transparent">
                  <AvatarImage
                    src="https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889567.jpg"
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-[100%]"
                  />
                  <AvatarFallback>Foto</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
            {/*Links para quando o usuário não esta logado*/}
              <Button asChild variant="link" className="p-0 pl-4">
                <Link href="/login">Login/</Link>
              </Button>
              <Button asChild variant="link" className="p-0 pr-4">
                <Link href="/cadastro">Cadastro</Link>
              </Button>
              {/*Elemento do avatar que redireciona para a página de perfil*/}
              <Link href="/perfil" className="w-10 h-10">
                <Avatar className="w-10 h-10 rounded-full overflow-hidden bg-transparent">
                  <AvatarImage
                    src="https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889567.jpg"
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-[100%]"
                  />
                  <AvatarFallback>Foto</AvatarFallback>
                </Avatar>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>

  );
}

//Exporta o elemento header
export { Header };