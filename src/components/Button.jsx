import { motion } from "framer-motion";


const base =
  "inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-signal";

const variants = {
  solid: "bg-amber-signal text-void hover:bg-amber-400",
  outline:
    "border border-white/15 text-paper hover:border-amber-signal/60 hover:text-amber-signal",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  as = "a",
  icon: Icon,
  className = "",
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const Comp = motion[as === "a" ? "a" : "button"];

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
      {Icon && <Icon className="text-base" aria-hidden="true" />}
    </Comp>
  );
}
