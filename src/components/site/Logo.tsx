import { LOGO_URL } from "@/lib/site";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const h =
    size === "lg"
      ? "h-20"
      : size === "sm"
        ? "h-12 md:h-16"
        : "h-14";
  return (
    <img
      src={LOGO_URL}
      alt="RDG Soluções Digitais"
      className={`hero-logo ${h} w-auto select-none`}
      draggable={false}
      style={{ filter: "drop-shadow(0 4px 14px color-mix(in oklab, var(--primary) 40%, transparent))" }}
    />
  );
}

