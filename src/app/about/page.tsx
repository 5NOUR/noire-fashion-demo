import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — NOIRÉ",
  description:
    "Discover the story behind NOIRÉ — our philosophy, craftsmanship, and design process.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-112.5 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="NOIRÉ Atelier"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-12">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4">
              Our Story
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading">
              Crafted with intention.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  title="From a single sketch to a global statement."
                  subtitle="NOIRÉ was born in 2020 from a desire to strip fashion back to its essence."
                  align="left"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-muted-foreground max-w-md">
                  What began as a small atelier in Paris has grown into a
                  contemporary fashion house with a singular focus: creating
                  pieces that transcend trends. Our design language is quiet,
                  but our presence is undeniable.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop"
                    alt="Design process"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal direction="right">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
                    alt="Philosophy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <SectionHeading
                  title="Philosophy"
                  subtitle="The art of restraint."
                  align="left"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    We believe that true luxury lies not in excess, but in
                    precision. Every seam, every fabric, every cut is considered
                    and reconsidered until it feels inevitable.
                  </p>
                  <p>
                    Our collections are built around the concept of
                    &quot;essentialism&quot; — pieces that are versatile,
                    durable, and deeply personal. We design for the individual
                    who values substance over noise.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  title="Craftsmanship"
                  subtitle="Made by hands that care."
                  align="left"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-muted-foreground max-w-md">
                  We partner with family-owned workshops in Italy, Portugal, and
                  Scotland. Each piece passes through over 50 individual steps
                  before it reaches you, ensuring quality that lasts for years,
                  not seasons.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal direction="left">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop"
                    alt="Craftsmanship"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <Reveal>
            <SectionHeading
              title="Design Process"
              subtitle="From concept to creation."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Concept",
                description:
                  "We begin with a feeling, a silhouette, or a fabric. Sketches evolve into a cohesive story that defines the collection.",
              },
              {
                step: "02",
                title: "Development",
                description:
                  "Prototypes are made, tested, and refined. We obsess over proportions, drape, and the way a garment moves with the body.",
              },
              {
                step: "03",
                title: "Production",
                description:
                  "Our ateliers bring the designs to life using time-honored techniques and the finest materials available.",
              },
            ].map((item, index) => (
              <Reveal key={item.step} delay={index * 0.1}>
                <div className="border border-border p-8">
                  <span className="text-4xl font-heading text-primary/20">
                    {item.step}
                  </span>
                  <h3 className="text-heading text-xl mt-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="text-heading text-3xl md:text-4xl font-medium">
              Experience NOIRÉ
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Discover the collection that speaks without words.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button asChild size="lg" className="mt-8">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
