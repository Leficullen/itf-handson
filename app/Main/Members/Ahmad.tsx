export default function Ahmad() {
     return (
          <div className="hover:border-black border-zinc-500 border-3 bg-zinc-400 space-y-4 px-3 py-10 justify-center mx-auto rounded-xl w-full h-full transition-color duration-100 ease-in-out">
               <h1 className=" text-white font-bold px-5 py-2 text-xl">
	       	Ahmad Shanahan Zorya
               </h1>
               <button className="text-white hover:bg-white hover:text-black  font-semibold border cursor-pointer bg-black rounded-xl text-sm px-3 py-2 mx-auto justify-center w-full" onClick={()=> window.open("https://www.instagram.com/aszorya/", "_blank", "noopener,noreferrer")} >
                    View my ig
               </button>
          </div>
     )

}
