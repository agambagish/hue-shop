import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Check, Loader2 } from "lucide-react";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="flex min-h-screen">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary to-primary/80 lg:flex lg:w-1/2">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex flex-col justify-center px-12 text-primary-foreground">
            <div className="max-w-md">
              <h1 className="mb-6 font-bold text-4xl">Welcome to Hue</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Discover the latest trends and timeless classics. Join thousands
                of fashion enthusiasts who trust us for their style needs.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Check className="size-6" />
                </div>
                <span className="text-primary-foreground/80">
                  Trusted by 10,000+ customers
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-primary-foreground/5 blur-xl" />
          <div className="absolute bottom-20 left-20 h-24 w-24 rounded-full bg-primary-foreground/5 blur-xl" />
        </div>
        <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-md">
            <ClerkLoading>
              <div className="flex justify-center">
                <Loader2 className="size-10 animate-spin text-muted-foreground" />
              </div>
            </ClerkLoading>
            <ClerkLoaded>{children}</ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}
