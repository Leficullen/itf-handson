



export default function Hakim() {
     return (
          <div className="hover:border-black border-zinc-500 border-3 bg-zinc-400 space-y-4 px-3 py-10 justify-center mx-auto rounded-xl w-full h-full transition-color duration-100 ease-in-out">
               <h1 className=" text-white font-bold px-5 py-2 text-xl">
                    Hakim tertinggi uts basdat
               </h1>

               <button className="hover:-translate-y-1/2 duration-200 ease-in-out  text-white hover:text-black  font-semibold border cursor-pointer bg-yellow-300 rounded-xl text-sm px-3 py-2 mx-auto justify-center w-full" onClick={()=> window.open("https://www.instagram.com/leficullen.tsx/", "_blank", "noopener,noreferrer")} >
                    View my ig
               </button>
          </div>
     )

}