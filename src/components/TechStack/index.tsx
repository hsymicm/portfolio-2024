import { FC } from "react";
import TechStackBackground from "./TechStackBackground";

const TechStack: FC = () => {
  return (
    <main className="relative w-full px-[10%] py-32 flex items-center justify-between gap-16">
      <section className="mb-2 pr-16 w-1/2">
        <h2 className="text-6xl balance leading-[108%] text-white font-serif">
          What I Mainly Use
        </h2>
        <p className="my-6 balance text-white/80 font-thin leading-7">
          {
            "Tech stack (tools, frameworks, libraries, and technologies) I leverage to create engaging web experiences."
          }
        </p>
      </section>
      <section className="grid grid-cols-7 gap-4 w-1/2">
        <div className="rounded-2xl col-span-3 row-span-3 bg-gray-300 aspect-square p-4">
          1
        </div>
        <div className="rounded-2xl col-span-3 row-span-3 bg-gray-300 aspect-square p-4">
          2
        </div>
        <div className="flex items-center justify-center rounded-2xl col-span-1 row-span-5 bg-gray-300 p-4">9</div>

        <div className="rounded-2xl col-span-2 row-span-2 bg-gray-300 aspect-square p-4">
          3
        </div>
        <div className="rounded-2xl col-span-2 row-span-2 bg-gray-300 aspect-square p-4">
          4
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-gray-300 aspect-square p-4">5</div>
        <div className="flex items-center justify-center rounded-2xl bg-gray-300 aspect-square p-4">6</div>
        <div className="flex items-center justify-center rounded-2xl bg-gray-300 aspect-square p-4">7</div>
        <div className="flex items-center justify-center rounded-2xl bg-gray-300 aspect-square p-4">8</div>
      </section>
      <TechStackBackground />
    </main>
  );
};

export default TechStack;
