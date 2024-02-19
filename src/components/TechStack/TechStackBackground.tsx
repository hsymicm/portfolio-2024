import { FC } from "react";
import ForegroundWrapper from "@/components/Wrapper/ForegroundWrapper";
import ShinyStar from "@/components/Background/ShinyStar";
import BackgroundWrapper from "@/components//Wrapper/BackgroundWrapper";
import Planet from "@/components/Background/Planet";

const TechStackBackground: FC = () => {
  return (
    <>
      <ForegroundWrapper>
        <ShinyStar className="absolute -top-16 -right-12 md:-right-8" size="lg" />
        <ShinyStar className="absolute -bottom-8 -left-2 md:left-8" size="md" />
      </ForegroundWrapper>
      <BackgroundWrapper>
        <div className="absolute -top-1 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute -bottom-1 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        <Planet rotation={56} angle={70} duration={30} multiplier={0.4} />
        <Planet rotation={-16} angle={200} duration={20} />
      </BackgroundWrapper>
    </>
  );
};

export default TechStackBackground;
