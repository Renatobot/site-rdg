import type { ReactNode } from "react";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: HeadingTag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <span className="block text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <HeadingTag
        className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
        style={{ fontFamily: SERIF }}
      >
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
