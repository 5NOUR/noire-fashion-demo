"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="text-heading text-3xl md:text-4xl font-medium">
            Stay in the loop
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted-foreground">
            Subscribe to receive early access to new collections and exclusive
            offers.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          {subscribed ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              <span>Thank you! Check your inbox.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sm:max-w-xs"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
