import { cn } from "@/lib/utils";

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function BaseCard({ children, className, ...props }: BaseCardProps) {
  return (
    <div
      className={cn(
        "bg-amber-50/70 rounded-xl p-6 transition-all duration-200",
        "shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
        "border border-amber-200/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}