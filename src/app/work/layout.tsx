import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Work — Portfolio",
  description:
    "3 homes completed, 3 active builds in Bengaluru — traditional lime construction, modern RCC villas, and interior fit-outs. Browse our portfolio.",
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    title: "Our Work | B4 Builders Bangalore",
    description:
      "Browse B4 Builders' portfolio — traditional, modern, and interiors projects across Bengaluru.",
    url: `${SITE_URL}/work`,
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
