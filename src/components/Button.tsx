import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "mint" | "ghost" | "subtle";
type Size = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  mint: "bg-mint text-mint-ink border-mint hover:bg-mint-bright shadow-[0_10px_30px_-10px_rgba(79,224,176,.5)]",
  ghost: "bg-transparent text-text border-line hover:border-mint/60 hover:bg-white/[0.03]",
  subtle: "bg-white/[0.06] text-text border-white/10 hover:bg-white/[0.1]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.3rem] px-7 text-[1.0rem]",
};

export function Button({
  children,
  variant = "mint",
  size = "md",
  icon,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <a
      className={[
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-semibold tracking-tight",
        "transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        sizes[size],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </a>
  );
}
