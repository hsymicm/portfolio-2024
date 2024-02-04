import { FC } from "react";
import ForegroundWrapper from "@/components/Wrapper/ForegroundWrapper";
import BackgroundWrapper from "@/components/Wrapper/BackgroundWrapper";
import Planet from "@/components/Background/Planet";
import ShinyStar from "@/components/Background/ShinyStar";

const WorkBackground: FC = () => {
  return (
    <>
      <ForegroundWrapper>
        <ShinyStar className="absolute top-24 right-48" size="md" />
        <ShinyStar className="absolute top-48 right-24" size="sm" />
        <ShinyStar className="absolute top-1/3 left-12" size="sm" />
        <ShinyStar className="absolute top-2/3 right-12" size="sm" />
        <ShinyStar className="absolute -bottom-32 left-32" size="md" />
        <div className="absolute top-1/3 -left-[240px] w-[420px] bg-white/60 aspect-square rounded-full blur-[300px]" />
      </ForegroundWrapper>
      <BackgroundWrapper>
        <div className="absolute -top-1 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute -bottom-1 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        <Planet rotation={-8} angle={200} duration={20} />
        <Planet rotation={56} angle={70} duration={30} multiplier={0.8} />
        <Planet rotation={129} angle={200} duration={40} multiplier={0.8} />
      </BackgroundWrapper>
    </>
  );
};

export default WorkBackground;
