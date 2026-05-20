interface badgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: badgeProps) {
  return (
    <span className={`px-2 py-1 text-xs bg-primary text-background font-bold ${className || ''}`}>{children}</span>
  )
}