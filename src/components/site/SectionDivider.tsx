export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="divider-shimmer absolute inset-y-0 w-[30%] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    </div>
  );
}
