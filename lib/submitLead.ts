export type LeadData = {
  name: string
  phone: string
  address: string
  slug?: string
}

export async function submitLead(lead: LeadData) {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("Webhook URL is not configured")
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead),
  })

  if (!response.ok) {
    throw new Error("Failed to submit lead")
  }

  return response
}
