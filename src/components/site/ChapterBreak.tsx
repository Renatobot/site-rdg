import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

type Props = {
  index: string;
  total?: string;
  label: string;
  fromColor?: string;
  toColor?: string;
  Icon?: LucideIcon;
};

export function ChapterBreak({ index, total = "06", label }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      aria-hidden
      className="relative w-full overflow-hidden bg-[#0A0A0A] py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4">
        <span
          className={`text-[10px] font-light uppercase tracking-[0.4em] text-primary transition-opacity duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          cap. {index} / {total}
        </span>
        <div
          className={`h-px flex-1 origin-left bg-white/15 transition-transform duration-1000 ease-out ${
            inView ? "scale-x-100" : "scale-x-0"
          }`}
        />
        <span
          className={`text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground transition-opacity duration-700 delay-200 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
