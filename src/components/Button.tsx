import { FC, ReactNode } from "react";
import { cn } from "@/libs/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "normal"; 
  includeIcon?: boolean;
  onClick?: any;
  className?: any;
}

interface Classes {
  base: string;
  variant: Record<"primary" | "secondary" | "outline", string>;
  size: Record<"small" | "normal", string>;
}

const Button: FC<ButtonProps> = ({
  children,
  includeIcon,
  onClick,
  className,
  variant = "primary",
  size = "normal",
}) => {
  const classes: Classes = {
    base: "transition ease-in-out duration-150 cursor-pointer",
    variant: {
      primary: "bg-white text-black hover:bg-zinc-100 active:bg-zinc-300",
      secondary: "bg-primary text-white hover:bg-primary-light active:bg-primary-dark",
      outline: "bg-transparent text-white border-[1px] border-white hover:bg-white hover:text-black active:border-zinc-300 active:bg-zinc-300",
    },
    size: {
      small: "rounded-lg px-6 py-3",
      normal: "rounded-2xl px-8 py-4",
    },
  };

  return (
    <button
      className={cn(
        classes.base,
        classes.variant[variant],
        classes.size[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
