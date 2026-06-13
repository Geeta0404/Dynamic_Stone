export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            eyebrowClassName || "text-terracotta-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <span
        className={`mb-4 block h-[3px] w-14 rounded-full bg-gradient-to-r from-terracotta-400 to-brass-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
      <h2
        className={`font-serif text-3xl font-semibold capitalize leading-tight sm:text-4xl ${
          titleClassName || "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            descriptionClassName || "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
