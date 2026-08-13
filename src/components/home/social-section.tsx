import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { brandConfig } from "@/config/brand";

export function SocialSection() {
  const instagramImages = [
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-heading text-3xl md:text-4xl font-medium">
              Follow @noire
            </h2>
            <a
              href={brandConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              @noire
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((src, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <a
                href={brandConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
