import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-600">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-semibold capitalize text-stone-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-stone-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/quote" variant="primary">
          Get a Quote
        </Button>
      </div>
    </section>
  );
}
