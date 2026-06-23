import Lefi from "./Members/Lefi"
import Syakirah from "./Members/Syakirah"

export function Welcome() {
  return (
    <main className="flex justify-center pt-16 pb-4">
      <div className="grid grid-cols-5 gap-4 py-10 mx-2">
        <Lefi/>
        <Syakirah/>
      </div>
    </main>
  );
}


