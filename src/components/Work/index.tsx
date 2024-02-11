import { FC } from "react";
import ProjectCard from "./ProjectCard";
import DummyImg from "@/assets/localhost_3000_.png";
import WorkBackground from "@/components/Work/WorkBackground";
import Button from "@/components/Button";

const Work: FC = () => {
  const data = {
    id: 1,
    uid: "title-1",
    image: DummyImg,
    title: "Fadil Hisyam’s Portfolio",
    body: "Built using Next.js and Tailwind CSS. It's hosted on Vercel and has a sleek galaxy aesthetics with a simple black and white color scheme.",
    date: "January 2024"
  }

  return (
    <section id="work" className="relative px-[10%] py-36 flex flex-col gap-12 justify-center items-center">
      <section>
        <h2 className="text-6xl balance leading-[108%] text-white font-serif text-center">
          Previous Work
        </h2>
        <p className="max-w-xl mt-6 text-white/80 font-thin leading-7 text-center">
          {
            "Explore a collection of my work that reflects the diverse challenges I've taken on and the solutions I've developed."
          }
        </p>
      </section>
      <section className="grid grid-cols-2 gap-8 max-w-3xl">
        {[...Array(4)].map((e, i) => (
          <ProjectCard data={data} key={i} />
        ))}
      </section>
      <Button>Explore More</Button>
      <WorkBackground />
    </section>
  );
};

export default Work;