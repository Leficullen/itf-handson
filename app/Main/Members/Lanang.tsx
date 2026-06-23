

export default function Lefi() {
     return (
          <div className="hover:border-blue border-zinc-500 border-3 bg-yellow-400 space-y-4 px-3 py-10 justify-center mx-auto rounded-xl w-full h-full transition-color duration-100 ease-in-out">
               <h1 className=" text-white font-bold px-5 py-2 text-xl">
                    Lanang
               </h1>
               <button className="text-white hover:bg-white hover:text-red  font-semibold border cursor-pointer bg-black rounded-xl text-sm px-3 py-2 mx-auto justify-center w-full" onClick={()=> window.open("https://youtu.be/dQw4w9WgXcQ?si=n_iHCLofJgN5kjkR", "_blank", "noopener,noreferrer")} >
                    BUttonLanang
               </button>
          </div>
     )

}