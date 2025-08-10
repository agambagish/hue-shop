import type { Metadata } from "next";
import { Oswald } from "next/font/google";

import { Footer } from "@/modules/layout/components/footer";
import { Header } from "@/modules/layout/components/header";

import { cn } from "@/lib/utils";

import "./globals.css";

const font = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hue Shop",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>
        <div className="min-h-screen bg-background">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
