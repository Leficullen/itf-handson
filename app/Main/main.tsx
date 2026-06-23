import Lefi from "./Members/Lefi"
import Lanang from "./Members/Lanang"
import Zakiy from "./Members/Zakiy"
import Faza from "./Members/Faza"

export function Welcome() {
  return (
    <main className="flex justify-center pt-16 pb-4">
      <div className="grid grid-cols-5 gap-4 py-10 mx-2">
        <Lefi/>
        <Lanang/>

        <Zakiy/>
        <Faza/>
      </div>
    </main>
  );
}


