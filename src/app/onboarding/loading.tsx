import { Loader2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl">Welcome to HUE</h1>
            <p className="text-lg text-muted-foreground">
              Setting up your onboarding experience
            </p>
          </div>
          <Card className="border-0 bg-background/80 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col items-center justify-center space-y-6 py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="font-semibold text-xl">
                    Preparing Your Experience
                  </h2>
                  <p className="max-w-md text-muted-foreground">
                    We're setting up everything you need to get started with
                    your shop
                  </p>
                </div>
                <div className="flex space-x-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary/60 delay-150" />
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary/30 delay-300" />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-muted-foreground text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading onboarding steps...</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
