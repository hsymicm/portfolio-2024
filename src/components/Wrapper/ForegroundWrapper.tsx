"use client"

import { FC, ReactNode } from "react";
import { cn } from "@/libs/cn";

interface ForegroundWrapperProps {
  children: ReactNode;
  className?: any;
}

const ForegroundWrapper: FC<ForegroundWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("absolute overflow-x-clip top-0 left-0 h-full w-full -z-10", className)}>
      {children}
    </div>
  );
};

export default ForegroundWrapper;
