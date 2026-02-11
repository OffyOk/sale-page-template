type HeroProps = {
  productName: string
  headline: string
  subHeadline: string
  ctaText: string
}

export default function Hero({
  productName,
  headline,
  subHeadline,
  ctaText,
}: HeroProps) {
  return (
    <section className="border-b bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          {productName}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {subHeadline}
        </p>
        <a
          href="#lead-form"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {ctaText}
        </a>
      </div>
    </section>
  )
}
