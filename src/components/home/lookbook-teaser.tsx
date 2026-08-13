import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LookbookTeaser() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative">
          <Reveal>
            <div className="relative aspect-video lg:aspect-21/9 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop"
                alt="Lookbook"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16">
                <Reveal direction="up" delay={0.1}>
                  <p className="text-white text-sm uppercase tracking-[0.2em] mb-4">
                    Lookbook
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.2}>
                  <h2 className="text-white text-heading text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl">
                    A study in contrasts.
                  </h2>
                </Reveal>
                <Reveal direction="up" delay={0.3}>
                  <p className="text-white/80 mt-4 max-w-md">
                    Explore the latest editorial shots and style notes.
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.4}>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-8 border-white text-white hover:bg-white hover:text-black"
                  >
                    <Link href="/lookbook">View Lookbook</Link>
                  </Button>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
