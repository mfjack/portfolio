"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
   const [menu, setMenu] = useState(false);

   const openMenu = () => {
      setMenu(!menu);
   };

   return (
      <div className="w-full">
         <header className="flex items-center justify-between p-5 md:px-20 border-2">
            <h1 className="font-semibold text-xl md:text-2xl">Jack</h1>

            <nav className="hidden md:block">
               <ul className="flex items-center justify-center gap-5 md:text-lg">
                  <Link href={"/"}>
                     <li className="font-semibold hover:text-purple-600">Inicio</li>
                  </Link>
                  <Link href={"/about"}>
                     <li className="font-semibold hover:text-purple-600">Sobre</li>
                  </Link>
                  <Link href={"/projects"}>
                     <li className="font-semibold hover:text-purple-600">Projetos</li>
                  </Link>
               </ul>
            </nav>

            <button className="md:hidden" onClick={openMenu}>
               {menu ? <X /> : <Menu />}
            </button>
         </header>

         {menu && (
            <nav className="text-center">
               <ul className="flex flex-col">
                  <Link className="" href={"/"}>
                     <li className="font-semibold hover:bg-purple-600 hover:text-white py-3">Inicio</li>
                  </Link>
                  <Link href={"/about"}>
                     <li className="font-semibold hover:bg-purple-600 hover:text-white py-3">Sobre</li>
                  </Link>
                  <Link href={"/projects"}>
                     <li className="font-semibold hover:bg-purple-600 hover:text-white py-3">Projetos</li>
                  </Link>
               </ul>
            </nav>
         )}
      </div>
   );
};

export default Header;
