interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "outlined" | "fill" | "ghost";
  className?: string;
}
export default function Button({ onClick, children, variant, className }: ButtonProps) {
  const baseClasses = "bg-primary hover:bg-primary/90 duration-300 cursor-pointer text-primary-foreground";
  const variantClasses = {
    outlined: "border border-primary text-primary hover:bg-primary/10",
    fill: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "text-primary hover:bg-primary/10"
  };

  return (
    <button className={`font-medium py-2 px-4 cursor-pointer inline-flex justify-center items-center gap-1 ${variant ? variantClasses[variant] : baseClasses} ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}