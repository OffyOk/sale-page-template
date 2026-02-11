type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  faqs: FAQItem[]
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <section aria-labelledby="faq-heading" className="border-b">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border bg-card p-5">
              <summary className="cursor-pointer list-none text-base font-medium text-card-foreground">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
