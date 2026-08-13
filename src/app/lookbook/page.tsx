import type { Metadata } from "next";
import { LookbookClient } from "@/components/lookbook/lookbook-client";
import { lookbookItems } from "@/data/lookbook";

export const metadata: Metadata = {
  title: "Lookbook — NOIRÉ",
  description:
    "Explore the NOIRÉ lookbook — editorial fashion photography and style notes.",
};

export default function LookbookPage() {
  return <LookbookClient items={lookbookItems} />;
}
