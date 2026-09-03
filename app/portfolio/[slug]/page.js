import { notFound } from "next/navigation";
import EventGalleryClient from "./EventGalleryClient";

// Tell Next.js to pre-build all 6 event pages during deployment
export async function generateStaticParams() {
  return [
    { slug: "royal-orchid-gala" },
    { slug: "celestial-botanical-wedding" },
    { slug: "candlelit-garden-reception" },
    { slug: "grand-arch-floral-installation" },
    { slug: "velvet-galia-soiree" },
    { slug: "opulent-imperial-reception" },
  ];
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  return <EventGalleryClient slug={slug} />;
}