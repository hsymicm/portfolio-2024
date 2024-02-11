import { FC } from "react";
import TechStackBackground from "@/components/TechStack/TechStackBackground";
import TechStackGrid from "@/components/TechStack/TechStackGrid";

const TechStack: FC = () => {
  return (
    <section id="stack" className="relative w-full px-[10%] py-32 h-screen flex items-center justify-center gap-16">
      <section className="flex flex-col mb-2 w-fit max-w-fit min-w-min">
        <h2 className="text-6xl balance leading-[108%] text-white font-serif">
          What I<br/>Mainly Use
        </h2>
        <p className="mt-6 balance text-white/80 font-thin leading-7">
          {
            "Tech stack (tools, frameworks, libraries, and technologies) I leverage to create engaging web experiences."
          }
        </p>
      </section>
      <section className="flex flex-shrink-0 w-[552px]">
        <TechStackGrid />
      </section>
      <TechStackBackground />
    </section>
  );
};

export default TechStack;
