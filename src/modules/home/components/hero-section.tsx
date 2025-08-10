import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                New Collection
              </Badge>
              <h1 className="font-bold text-4xl tracking-tight lg:text-6xl">
                Elevate Your
                <span className="block text-primary">Style</span>
              </h1>
              <p className="max-w-md text-lg text-muted-foreground">
                Discover our curated collection of premium fashion pieces
                designed for the modern individual who values quality and style.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-base">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-base">
                View Lookbook
              </Button>
            </div>
            <div className="flex gap-8 border-t pt-8">
              <div>
                <div className="font-bold text-2xl">500+</div>
                <div className="text-muted-foreground text-sm">
                  Premium Brands
                </div>
              </div>
              <div>
                <div className="font-bold text-2xl">50K+</div>
                <div className="text-muted-foreground text-sm">
                  Happy Customers
                </div>
              </div>
              <div>
                <div className="font-bold text-2xl">24/7</div>
                <div className="text-muted-foreground text-sm">Support</div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="relative aspect-square size-[36rem] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/fashion-model.png"
                alt="Fashion Model"
                width={1024}
                height={1024}
                className="object-cover"
                priority
              />
            </div>
            <div className="-top-4 -left-4 absolute rounded-xl border bg-background p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/bag.png"
                    alt="Product"
                    width={1024}
                    height={1024}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">Designer Bag</div>
                  <div className="font-bold text-primary">$299</div>
                </div>
              </div>
            </div>
            <div className="-bottom-4 -right-4 absolute rounded-xl border bg-background p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/watch.png"
                    alt="Product"
                    width={1024}
                    height={1024}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">Premium Watch</div>
                  <div className="font-bold text-primary">$599</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
