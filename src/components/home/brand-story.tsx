import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal direction="right">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
                  alt="NOIRÉ Craftsmanship"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal direction="up">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
                Our Story
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Born from a
                <br />
                love of simplicity.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-6 text-primary-foreground/80 max-w-md">
                NOIRÉ was founded in 2020 with a singular vision: to create
                clothing that feels as good as it looks, without compromise.
                Every garment is a study in precision, from the first sketch to
                the final stitch.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <Button
                asChild
                variant="outline"
                className="mt-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/about">Discover More</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
