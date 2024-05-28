import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
   return (
      <div className="p-5 flex-col flex gap-10">
         <h2 className="text-xl font-semibold text-purple-600">Projetos</h2>

         <div className="grid grid-cols-1 gap-5">
            <div className="border-2 rounded-xl shadow-md">
               <Image src="/food.png" alt="food" width={0} height={0} sizes="100vw" className="w-full rounded-2xl object-contain p-2" />

               <div className="flex items-center justify-around p-2 gap-3">
                  <Link
                     className="text-black bg-purple-400 hover:bg-purple-500 rounded-md flex gap-3 font-medium w-full justify-center items-center p-2 text-center"
                     href="https://github.com/mfjack/fsw-food"
                     target="_blank">
                     <Github size={18} />
                     GitHub
                  </Link>
                  <Link
                     className="text-black bg-purple-400 hover:bg-purple-500 rounded-md flex gap-3 font-medium w-full justify-center items-center p-2 text-center"
                     href="https://food-fsw.vercel.app/"
                     target="_blank">
                     <Globe size={18} />
                     Deploy
                  </Link>
               </div>
            </div>

            <div className="border-2 rounded-xl shadow-md">
               <Image src="/store.png" alt="store" width={0} height={0} sizes="100vw" className="w-full rounded-2xl object-contain p-2" />

               <div className="flex items-center justify-around p-2 gap-3">
                  <Link
                     className="text-black bg-purple-400 hover:bg-purple-500 rounded-md flex gap-3 font-medium w-full justify-center items-center p-2 text-center"
                     href="https://github.com/mfjack/fsw-store"
                     target="_blank">
                     <Github size={18} />
                     GitHub
                  </Link>
                  {/* <Link
                     className="text-black disabled: bg-purple-400 hover:bg-purple-500 rounded-md flex gap-3 font-medium w-full justify-center items-center p-2 text-center"
                     href="https://food-fsw.vercel.app/"
                     target="_blank">
                     <Globe size={18} />
                     Deploy
                  </Link> */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectsPage;
