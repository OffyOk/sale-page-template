type FeaturesProps = {
  features: string[]
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section aria-labelledby="features-heading" className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="features-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Built to Lift Conversion at Every Stage
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature} className="rounded-lg border bg-background p-5">
              <p className="text-sm leading-6 text-foreground sm:text-base">{feature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
