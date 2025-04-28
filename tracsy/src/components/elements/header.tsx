import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function Header() {
    return (
        <div className="bg-blue-200 p-3 flex justify-between">
      <div className="flex items-center h-full">
        <a href="/"><img
          src="/logo-no-background.svg"
          alt="Logo"
          className="h-8 w-auto fill-black"/>
        </a>
      </div>
      <div className="flex">
        <div className="flex">
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
          <Avatar>
            <AvatarImage src="https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889567.jpg" />
            <AvatarFallback>Foto</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
    )
}

export { Header }