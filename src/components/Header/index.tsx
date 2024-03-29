import { FC } from "react";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import Profile from "@/assets/profile.jpg";

const Header: FC = () => {
  return (
    <header className="relative min-h-screen w-full py-32 px-[6%] xl:px-[10%] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 xl:gap-16">
      <section className="mb-2 w-4/5 md:w-3/5">
        <h1 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl xl:text-[54px] leading-[140%] text-white font-serif">
          Hello,
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl xl:text-[76px]">{"I’m Fadil Hisyam"}</span>
        </h1>
        <h2 className="mt-6 xl:mt-8 text-center md:text-left text-lg text-white/80 font-light leading-8">
          Bridging code & creativity Front end developer and UI/UX designer with
          one year of real-world experience.
        </h2>
      </section>
      <section className="perspective-0 md:perspective w-fit md:pr-[2%]">
        <Image
          style={{ transform: "rotateY(-16deg) scaleX(-102%)" }}
          className="rounded-3xl aspect-square md:aspect-auto object-cover"
          src={Profile}
          width={280}
          alt="Profile"
          placeholder="blur"
        />
        {/* <Image
          style={{ transform: "rotateY(-8deg) scaleX(-90%) scaleY(90%)" }}
          className="absolute top-0 left-16 rounded-3xl -z-10 brightness-50 blur-md opacity-50"
          src={Profile}
          width={300}
          alt="Profile"
          placeholder="blur"
        /> */}
      </section>
      <div className="absolute animate-bounce flex flex-col items-center gap-1 bottom-10 md:bottom-16 left-0 right-0 mx-auto text-white/80">
        <p className="font-light text-sm">Scroll Below</p>
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
  );
};

export default Header;
