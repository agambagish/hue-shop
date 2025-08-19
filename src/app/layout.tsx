import type { Metadata } from "next";
import { Oswald } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const font = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hue Shop",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("antialiased", font.className)}>
          <div className="min-h-screen bg-background">{children}</div>
          <Toaster richColors toastOptions={{ className: font.className }} />
        </body>
      </html>
    </ClerkProvider>
  );
}
