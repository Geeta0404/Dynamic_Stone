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
          className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            align === "center" ? "justify-center" : ""
          } ${eyebrowClassName || "text-terracotta-600"}`}
        >
          <span className="h-px w-5 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
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
