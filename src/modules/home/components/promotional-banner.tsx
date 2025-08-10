import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:order-1">
            <Image
              src="/placeholder.svg?height=480&width=640"
              alt="Promotional Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <div className="space-y-4">
              <Badge variant="destructive" className="w-fit px-3 py-1 text-sm">
                Limited Time Offer
              </Badge>
              <h2 className="font-bold text-3xl lg:text-5xl">
                Summer Sale
                <span className="block text-primary">Up to 70% Off</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't miss out on our biggest sale of the year. Refresh your
                wardrobe with premium pieces at unbeatable prices.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="font-bold text-2xl text-primary">48</div>
                  <div className="text-muted-foreground text-xs">HOURS</div>
                </div>
                <div className="text-2xl text-muted-foreground">:</div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-primary">23</div>
                  <div className="text-muted-foreground text-xs">MINUTES</div>
                </div>
                <div className="text-2xl text-muted-foreground">:</div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-primary">15</div>
                  <div className="text-muted-foreground text-xs">SECONDS</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-base">
                Shop Sale Now
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-base">
                View All Deals
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t pt-6">
              <div className="text-center">
                <div className="font-semibold">Free Shipping</div>
                <div className="text-muted-foreground text-sm">
                  On orders over $100
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold">Easy Returns</div>
                <div className="text-muted-foreground text-sm">
                  30-day return policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
