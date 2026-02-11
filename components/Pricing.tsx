type PricingProps = {
  price: string
  ctaText: string
}

export default function Pricing({ price, ctaText }: PricingProps) {
  return (
    <section aria-labelledby="pricing-heading" className="border-b bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 id="pricing-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Simple Pricing, Fast ROI
        </h2>
        <p className="mt-4 text-4xl font-semibold tracking-tight text-foreground">{price}</p>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Start with one clear plan and scale as your pipeline grows.
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
