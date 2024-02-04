import { FC } from "react";
import ForegroundWrapper from "@/components/Wrapper/ForegroundWrapper";
import BackgroundWrapper from "@/components/Wrapper/BackgroundWrapper";
import ShinyStar from "@/components/Background/ShinyStar";

const FooterBackground: FC = () => {
  return (
    <>
      <ForegroundWrapper>
        
      <ShinyStar className="absolute top-0 left-72" size="sm"/>
      <ShinyStar className="absolute -top-24 right-32" size="md"/>
        <div className="absolute -top-32 -right-[240px] w-[360px] bg-white/50 aspect-square rounded-full blur-[300px]" />
      </ForegroundWrapper>
      {/* <BackgroundWrapper className="pt-32">
        <div className="absolute -bottom-48 -left-[240px] w-[420px] bg-white/40 aspect-square rounded-full blur-[300px]" />
      </BackgroundWrapper> */}
    </>
  );
};

export default FooterBackground;
