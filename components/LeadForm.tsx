"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

import { submitLead } from "@/lib/submitLead"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type LeadFormProps = {
  ctaText: string
}

type LeadState = {
  name: string
  phone: string
  address: string
}

type FieldErrors = Partial<Record<keyof LeadState, string>>

const initialState: LeadState = {
  name: "",
  phone: "",
  address: "",
}

export default function LeadForm({ ctaText }: LeadFormProps) {
  const pathname = usePathname()
  const [lead, setLead] = useState<LeadState>(initialState)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const validate = () => {
    const nextErrors: FieldErrors = {}

    if (!lead.name.trim()) {
      nextErrors.name = "Name is required"
    }
    if (!lead.phone.trim()) {
      nextErrors.phone = "Phone is required"
    }
    if (!lead.address.trim()) {
      nextErrors.address = "Address is required"
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("idle")

    if (!validate()) {
      return
    }

    try {
      setIsSubmitting(true)
      await submitLead({ ...lead, slug: pathname })
      setLead(initialState)
      setStatus("success")
      setErrors({})
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" aria-labelledby="lead-form-heading" className="border-b bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="lead-form-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Request a Personalized Demo
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Fill out the form and our team will contact you with a tailored launch plan.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-xl border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={lead.name}
              onChange={(event) => setLead((prev) => ({ ...prev, name: event.target.value }))}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={lead.phone}
              onChange={(event) => setLead((prev) => ({ ...prev, phone: event.target.value }))}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? <p className="text-sm text-destructive">{errors.phone}</p> : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              name="address"
              value={lead.address}
              onChange={(event) => setLead((prev) => ({ ...prev, address: event.target.value }))}
              aria-invalid={Boolean(errors.address)}
            />
            {errors.address ? <p className="text-sm text-destructive">{errors.address}</p> : null}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : ctaText}
          </Button>

          {status === "success" ? (
            <p className="text-sm font-medium text-primary">Thank you. Your request was sent successfully.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-destructive">Unable to send your request. Please try again.</p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
