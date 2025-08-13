"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowLeft, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <svg
              className="h-64 w-64 text-muted-foreground/20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="80" fill="currentColor" />
              <text
                x="100"
                y="110"
                textAnchor="middle"
                className="fill-muted-foreground/40 font-bold text-4xl"
                style={{ fontSize: "32px" }}
              >
                404
              </text>
              <circle
                cx="60"
                cy="60"
                r="3"
                fill="currentColor"
                className="text-primary/30"
              />
              <circle
                cx="140"
                cy="60"
                r="2"
                fill="currentColor"
                className="text-primary/20"
              />
              <circle
                cx="160"
                cy="140"
                r="4"
                fill="currentColor"
                className="text-primary/25"
              />
              <circle
                cx="40"
                cy="140"
                r="2"
                fill="currentColor"
                className="text-primary/15"
              />
            </svg>
          </div>
        </div>
        <Card className="border-0 bg-card/50 shadow-lg backdrop-blur-sm">
          <CardContent className="space-y-6 p-8">
            <div className="space-y-4">
              <h1 className="font-bold text-4xl text-foreground">
                Page Not Found
              </h1>
              <p className="mx-auto max-w-md text-lg text-muted-foreground leading-relaxed">
                Sorry, we couldn't find the page you're looking for. It might
                have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full bg-transparent sm:w-auto"
              >
                <Link href="/products" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Browse Products
                </Link>
              </Button>
            </div>
            <div className="border-border/50 border-t pt-4">
              <p className="text-muted-foreground text-sm">
                Need help? Try using the search bar or{" "}
                <Link
                  href="/"
                  className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                >
                  contact our support team
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
}
