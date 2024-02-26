import { FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/libs/cn";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "normal"; 
  includeIcon?: boolean;
  onClick?: any;
  href?: string;
  newTab?: boolean;
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
  href = "",
  newTab = false,
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
      small: cn(includeIcon ? "px-4 py-2" : "px-5 py-2", "rounded-lg"),
      normal: cn(includeIcon ? "px-5 py-3" : "px-7 py-3", "rounded-2xl"),
    },
  };

  return (
    <Link
      href={href}
      // onClick={onClick ? onClick : href === "" ? (e) => e.preventDefault() : null }
      rel={newTab ? "noopener noreferrer" : ""}
      target={newTab ? "_blank" : ""}
      className={cn(
        classes.base,
        classes.variant[variant],
        classes.size[size],
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
