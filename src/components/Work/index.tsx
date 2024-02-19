import ProjectCard from "@/components/Work//ProjectCard"
import { DataProps } from "@/types/WorkTypes"

import WorkBackground from "@/components/Work/WorkBackground"
import Button from "@/components/Button"

export default function Work({ limit, datas }: { limit?: number, datas: DataProps[] }) {
  return (
    <>
    <section
      id="current-work"
      className="relative px-6 md:px-[6%] xl:px-[10%] py-32 flex flex-col gap-8 md:gap-12 justify-center items-center"
    >
      <section>
        <h2 className="text-4xl sm:text-5xl md:text-6xl balance leading-[108%] text-white font-serif text-center">
          Previous Work
        </h2>
        <p className="max-w-xl text-lg mt-6 text-white/80 font-light leading-7 text-center">
          {
            "Explore a collection of my work that reflects the diverse challenges I've taken on and the solutions I've developed."
          }
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
        {datas &&
          datas.map((data, index) => (
            <ProjectCard
              data={data}
              priority={ index === 0 && datas.length % 2 !== 0 }
              key={data?.slug.current}
            />
          ))}
      </section>
      {limit && <Button href="/work">Explore More</Button>}
      <WorkBackground />
    </section>
    </>
  )
}