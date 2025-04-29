import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    // Container principal
    <div className="bg-blue-200 p-3 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">

      {/* Logo*/}
      <div>
        <a href="/">
          <img
            src="/logo-no-background.svg"
            alt="Logo"
            className="h-8 w-auto fill-black"
          />
        </a>
      </div>

      {/* Links */}
      <div className="flex">
        <div className="flex flex-wrap justify-center items-center">
          <Button asChild variant="link">
            <Link href="/cadastrarDesaparecido">Cadastrar desaparecido</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="/meusEnvios">Meus envios</Link>
          </Button>
          <Button asChild variant="link" className="p-0 pl-4">
            <Link href="/login">Login/</Link>
          </Button>
          <Button asChild variant="link" className="p-0 pr-4">
            <Link href="/cadastro">Cadastro</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Header };