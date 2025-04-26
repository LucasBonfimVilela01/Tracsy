import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="bg-blue-200 p-3 flex justify-between">
      <div className="flex items-center h-full">
      <img
        src="/logo-no-background.svg"
        alt="Logo"
        className="h-8 w-auto fill-black"
      />
      </div>
      <div className="flex">
        <div className="flex">
          <Button asChild variant="link">
              <Link href="/login">Cadastros</Link>
          </Button>
          <Button asChild variant="link">
              <Link href="/login">Meus envios</Link>
          </Button>
          <Button asChild variant="link">
              <Link href="/login">Login/Cadastro</Link>
          </Button>
          <Avatar>
            <AvatarImage src="https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889567.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {/*<Button variant={"outline"} >Click me</Button>*/}
    </div>
  );
}
