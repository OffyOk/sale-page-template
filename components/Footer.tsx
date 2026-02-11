type FooterProps = {
  productName: string
}

export default function Footer({ productName }: FooterProps) {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {productName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
