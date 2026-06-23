export default function Zakiy() {
  return (
    <div
      className="hover:border-black border-yellow-600 border-3 bg-[repeating-linear-gradient(90deg,#6CACE4_0px,#6CACE4_40px,#ffffff_40px,#ffffff_80px)] space-y-4 px-3 py-10 justify-center mx-auto rounded-xl w-full h-full transition-colors duration-100 ease-in-out shadow-lg"
    >
      <h1 className="text-white font-extrabold px-5 py-2 text-xl text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
        Zakiy Nashrudin Wahid
      </h1>
      <button
        className="text-[#6CACE4] hover:bg-[#6CACE4] hover:text-white font-bold border-2 border-yellow-500 cursor-pointer bg-white rounded-xl text-sm px-3 py-2 mx-auto justify-center w-full block transition-colors duration-150"
        onClick={() =>
          window.open("https://www.instagram.com/zakiy.znw/", "_blank", "noopener,noreferrer")
        }
      >
        View my ig
      </button>
    </div>
  );
}