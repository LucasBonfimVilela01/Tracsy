import { Button } from "@/components/ui/button";
import Link from "next/link";

function Footer() {
    return (
        <div className="bg-blue-200 p-3 flex justify-around">
        <div className="p-10 w-full">
          <div className="flex">
            {/*Logo*/}
            <div className="flex items-center h-full w-[33%]">
              <img
                src="/logo-no-background.svg"
                alt="Logo"
                className="h-8 w-auto fill-black"
              />
            </div>
            {/*Links*/}
            <div className="flex justify-center w-[33%]">
              <div className="flex">
                <Button asChild variant="link">
                  <Link href="/termosDeUso">Termos de uso</Link>
                </Button>
                <Button asChild variant="link">
                  <Link href="/redesSociais">Redes sociais</Link>
                </Button>
                <Button asChild variant="link">
                  <Link href="/perguntasFrequentes">Perguntas frequentes</Link>
                </Button>
              </div>
            </div>
            {/*Espaçador*/}
            <div className="w-[33%]" />
          </div>
          <div className="pt-20">
            <div className="w-full h-[1px] bg-black" />
            <div className="text-center p-2"><p className="text-[14px]">© 2024 Tracsy. All rights reserved.</p></div>
          </div>
        </div>
      </div>
    )
}

export { Footer }