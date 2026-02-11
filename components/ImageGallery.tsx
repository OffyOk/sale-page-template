import Image from "next/image"

type ImageGalleryProps = {
  images: string[]
  productName: string
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  return (
    <section aria-labelledby="gallery-heading" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Inside the Workflow
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <figure key={image} className="overflow-hidden rounded-lg border bg-card">
              <Image
                src={image}
                alt={`${productName} preview ${index + 1}`}
                width={640}
                height={420}
                unoptimized
                className="h-56 w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
