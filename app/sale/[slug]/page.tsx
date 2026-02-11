import type { Metadata } from "next"

import Benefits from "@/components/Benefits"
import FAQ from "@/components/FAQ"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import ImageGallery from "@/components/ImageGallery"
import LeadForm from "@/components/LeadForm"
import Pricing from "@/components/Pricing"
import saleConfig from "@/config/sale.config"

type SalePageProps = {
  params: Promise<{ slug: string }>
}

function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  return siteUrl ? siteUrl.replace(/\/$/, "") : undefined
}

export async function generateMetadata({ params }: SalePageProps): Promise<Metadata> {
  const { slug } = await params
  const title = `${saleConfig.productName} | ${saleConfig.headline}`
  const description = saleConfig.subHeadline
  const baseUrl = getBaseUrl()
  const pageUrl = baseUrl ? `${baseUrl}/sale/${slug}` : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      images: saleConfig.images.map((url) => ({
        url,
        alt: saleConfig.productName,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [...saleConfig.images],
    },
  }
}

export default async function SalePage({ params }: SalePageProps) {
  await params

  return (
    <main>
      <Hero
        productName={saleConfig.productName}
        headline={saleConfig.headline}
        subHeadline={saleConfig.subHeadline}
        ctaText={saleConfig.ctaText}
      />
      <Benefits benefits={[...saleConfig.benefits]} />
      <Features features={[...saleConfig.features]} />
      <ImageGallery images={[...saleConfig.images]} productName={saleConfig.productName} />
      <Pricing price={saleConfig.price} ctaText={saleConfig.ctaText} />
      <FAQ faqs={[...saleConfig.faqs]} />
      <LeadForm ctaText={saleConfig.ctaText} />
      <Footer productName={saleConfig.productName} />
    </main>
  )
}
