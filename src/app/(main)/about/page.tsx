import AboutHeader from "@/components/AboutHeader"

import Image from "next/image"
import University from "@/assets/university.jpeg"

import ForegroundWrapper from "@/components/Wrapper/ForegroundWrapper"
import Planet from "@/components/Background/Planet"
import ShinyStar from "@/components/Background/ShinyStar"

export default async function Page() {
  return (
    <>
      <AboutHeader />
      <main className="relative px-[10%] pt-36 pb-64 text-white flex items-center justify-between gap-8">
        <section
          style={{ perspective: 500 }}
          className="relative w-2/3 max-w-3xl pt-16 pl-16"
        >
          <Image
            style={{ transform: "rotateY(16deg) scaleX(95%)" }}
            className="rounded-3xl w-full"
            src={University}
            width={800}
            alt="University"
            placeholder="blur"
          />
          <Image
            style={{ transform: "rotateY(16deg) scaleX(80%) scaleY(88%)" }}
            className="w-full absolute rounded-3xl top-0 -left-4 -z-10 brightness-50 blur-md opacity-50"
            src={University}
            width={800}
            alt="Profile"
            placeholder="blur"
          />
        </section>
        <section className="mt-12 w-3/5">
          <h3 className="text-4xl font-serif mb-8">Brief History</h3>
          <p className="text-white/80 font-light text-lg">
            My passion for design sparked early on when I joined a 
            design community during my early semesters. This interest seamlessly
            blended with my pursuit of a Bachelor's degree in Information
            Technology from Gunadarma University, where I honed both my design
            and development skills.
            <br />
            <br />
            From ensuring pixel-perfect designs to staying on top of industry
            trends, each project has been a stepping stone in my journey.
            Eager to embrace exciting challenges, I'm dedicated to delivering
            high-quality solutions.
          </p>
        </section>
        <ForegroundWrapper>
          <ShinyStar className="absolute top-16 -right-8" size="lg" />
          <ShinyStar className="absolute -bottom-16 left-8" size="md" />
          <Planet rotation={-16} angle={200} duration={24} multiplier={0.9} />
        </ForegroundWrapper>
      </main>
    </>
  )
}
