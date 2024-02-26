import { FC } from "react";
import TechStackBackground from "@/components/TechStack/TechStackBackground";
import TechStackGrid from "@/components/TechStack/TechStackGrid";

const TechStack: FC = () => {
  return (
    <section id="stack" className="relative w-full px-[6%] xl:px-[10%] py-32 min-h-screen flex flex-col xl:flex-row items-center justify-center gap-8 md:gap-12 xl:gap-16">
      <section className="flex flex-col mb-2 w-fit max-w-3xl min-w-min">
        <h2 className="text-center xl:text-left text-4xl sm:text-5xl md:text-6xl balance leading-[108%] text-white font-serif">
          What I<br/>Mainly Use
        </h2>
        <p className="mt-6 text-center xl:text-left text-lg balance text-white/80 font-light leading-7">
          {
            "Tech stack (tools, frameworks, libraries, and technologies) I leverage to create engaging web experiences."
          }
        </p>
      </section>
      <section className="flex flex-shrink-0 w-full md:w-[552px]">
        <TechStackGrid />
      </section>
      <TechStackBackground />
    </section>
  );
};

export default TechStack;
