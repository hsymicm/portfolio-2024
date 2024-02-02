"use client"

import { FC, ReactNode } from "react";
import { cn } from "@/libs/cn";

interface BackgroundWrapperProps {
  children: ReactNode;
  className?: any;
}

const BackgroundWrapper: FC<BackgroundWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute overflow-hidden top-0 left-0 h-full w-full -z-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
