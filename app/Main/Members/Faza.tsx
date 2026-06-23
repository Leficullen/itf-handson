export default function Faza() {
  return (
    <div className="flex flex-col w-full h-full rounded-xl overflow-hidden" style={{ minHeight: '200px' }}>

      <div className="flex-1 flex items-end bg-stone-900 px-5 pb-4 pt-8">
        <h1 className="text-white font-black text-4xl leading-none tracking-tight">
          Faza
        </h1>
      </div>

      <div className="bg-stone-100 px-5 py-4">
        <button
          className="w-full py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-200 transition-colors duration-150 cursor-pointer"
          onClick={() => window.open("https://www.instagram.com/faza_0810/", "_blank", "noopener,noreferrer")}
        >
          View my ig
        </button>
      </div>

    </div>
  )
}
