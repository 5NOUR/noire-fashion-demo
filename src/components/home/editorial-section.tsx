import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EditorialSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal direction="right">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
                  alt="Editorial Fashion"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider">
                  The Craft
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal direction="up">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Philosophy
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Where silence
                <br />
                speaks.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-6 text-muted-foreground max-w-md">
                We believe in the power of restraint. Our designs strip away the
                unnecessary, leaving only what matters: form, fabric, and
                function. This is luxury without noise.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <Button asChild variant="link" className="mt-6 px-0">
                <Link href="/about">Read Our Story →</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
