import Image from "next/image"
import Profile from "@/assets/profile.jpg"
import HeaderBackground from "@/components/Header/HeaderBackground"

export default function AboutHeader() {
  return (
    <header className="relative min-h-screen w-full px-[10%] flex items-center justify-between gap-16">
      <section className="mb-2 w-3/5">
        <h1 className="text-6xl leading-[140%] text-white font-serif">
          About Me
        </h1>
        <h2 className="mt-8 text-xl text-white font-light leading-8">
          I’m a front-end developer and UI/UX designer with one year of
          practical experience in the field. I’m currently based in Jakarta,
          Indonesia.
        </h2>
        <p className="mt-8 text-lg text-white/80 font-light leading-8">
          My work involves translating design concepts into responsive and
          interactive web applications, staying up-to-date with the latest
          industry trends, and continuously refining my skills to deliver
          high-quality solutions.
        </p>
      </section>
      <section style={{ perspective: 400 }} className="w-fit pr-16">
        <Image
          style={{ transform: "rotateY(-16deg) scaleX(-100%)" }}
          className="rounded-3xl"
          src={Profile}
          width={280}
          alt="Profile"
          placeholder="blur"
        />
        <Image
          style={{ transform: "rotateY(-8deg) scaleX(-90%) scaleY(90%)" }}
          className="absolute top-0 left-16 rounded-3xl -z-10 brightness-50 blur-md opacity-50"
          src={Profile}
          width={280}
          alt="Profile"
          placeholder="blur"
        />
      </section>
      <div className="absolute animate-bounce flex flex-col items-center gap-1 bottom-16 left-0 right-0 mx-auto text-white/80">
        <p className="font-light text-sm">Read More</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <HeaderBackground />
    </header>
  )
}
