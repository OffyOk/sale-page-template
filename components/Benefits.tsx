type BenefitsProps = {
  benefits: string[]
}

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section aria-labelledby="benefits-heading" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="benefits-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Why Teams Choose This System
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="rounded-lg border bg-card p-4 text-sm text-card-foreground sm:text-base">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
