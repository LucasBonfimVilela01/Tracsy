"use client";
import { usePathname } from "next/navigation";

function Error404() {
    const pathname = usePathname();
    return (
        <div className="p-100">
            <h1 className="font-bold text-[30px]">
                404 | Esta página "{pathname}" não foi encontrada
            </h1>
        </div>
    );
}

export default Error404;
