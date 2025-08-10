import Link from "next/link";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { Logo } from "@/modules/layout/components/logo";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Elevating your style with premium fashion pieces designed for the
              modern individual who values quality and elegance.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/women"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Women's Collection
              </Link>
              <Link
                href="/men"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Men's Collection
              </Link>
              <Link
                href="/accessories"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Accessories
              </Link>
              <Link
                href="/sale"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Sale
              </Link>
              <Link
                href="/new-arrivals"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                New Arrivals
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/contact"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Us
              </Link>
              <Link
                href="/shipping"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Returns & Exchanges
              </Link>
              <Link
                href="/size-guide"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                Size Guide
              </Link>
              <Link
                href="/faq"
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>support@luxe.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for exclusive offers and style
              updates.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </div>
            <p className="text-muted-foreground text-xs">
              By subscribing, you agree to our Privacy Policy and Terms of
              Service.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hue Shop. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
