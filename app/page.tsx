import { redirect } from "next/navigation";

import saleConfig from "@/config/sale.config";

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "");

export default function Home() {
  redirect(`/sale/${toSlug(saleConfig.productName)}`);
}
