import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12 lg:py-24">
        {/* النص */}
        <div className="lg:col-span-5">
          <Reveal direction="up">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              New Collection — First Light
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] tracking-tight">
              The art of
              <br />
              restraint.
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md">
              Sculptural silhouettes, pure materials, and a quiet confidence.
              Discover the pieces that define a new era of contemporary fashion.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/collections/new-arrivals">Shop New Arrivals</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/lookbook">View Lookbook</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* الصورة */}
        <div className="lg:col-span-7 relative">
          <Reveal direction="left" delay={0.2}>
            <div className="relative aspect-4/5 lg:aspect-16/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop"
                alt="NOIRÉ Editorial"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                className="object-cover"
              />
            </div>
            {/* طبقة نصية صغيرة فوق الصورة */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-wider">
              Editorial — Look 01
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
