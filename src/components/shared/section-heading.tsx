import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className,
      )}
    >
      <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
