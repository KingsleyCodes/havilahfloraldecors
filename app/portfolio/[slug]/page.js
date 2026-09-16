import { notFound } from "next/navigation";
import EventGalleryClient from "./EventGalleryClient";

// Tell Next.js to pre-build all 6 event pages during deployment
export async function generateStaticParams() {
  return [
    { slug: "featured-weeding-one" },
    { slug: "featured-weeding-two" },
    { slug: "featured-weeding-three" },
    { slug: "grand-arch-floral-installation" },
    { slug: "velvet-galia-soiree" },
    { slug: "opulent-imperial-reception" },
    { slug: "the-beauty-of-nature" },
    { slug: "love-in-colors-traditional-wedding" },
    { slug: "the-royal-wedding-reception" },
    { slug: "the-adorables-milestone-celebration "},
    
  ];
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  return <EventGalleryClient slug={slug} />;
}