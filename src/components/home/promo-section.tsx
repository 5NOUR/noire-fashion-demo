import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PromoSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Limited Time
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Get 20% off your first order
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Sign up for our newsletter and receive an exclusive code.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
