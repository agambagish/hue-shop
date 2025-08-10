import Link from "next/link";

import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";

import { Logo } from "@/modules/layout/components/logo";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/women"
              className="font-medium text-sm transition-colors hover:text-primary"
            >
              Women
            </Link>
            <Link
              href="/men"
              className="font-medium text-sm transition-colors hover:text-primary"
            >
              Men
            </Link>
            <Link
              href="/accessories"
              className="font-medium text-sm transition-colors hover:text-primary"
            >
              Accessories
            </Link>
            <Link
              href="/sale"
              className="font-medium text-destructive text-sm transition-colors hover:text-destructive/80"
            >
              Sale
            </Link>
          </nav>
          <div className="mx-8 hidden max-w-sm flex-1 items-center space-x-2 lg:flex">
            <div className="relative w-full">
              <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="bg-muted/50 pl-10"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="flex lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-4">
                <SheetTitle className="hidden" />
                <div className="mt-8 flex flex-col space-y-4">
                  <Link
                    href="/women"
                    className="rounded-lg p-2 font-medium text-lg hover:bg-secondary"
                  >
                    Women
                  </Link>
                  <Link
                    href="/men"
                    className="rounded-lg p-2 font-medium text-lg hover:bg-secondary"
                  >
                    Men
                  </Link>
                  <Link
                    href="/accessories"
                    className="rounded-lg p-2 font-medium text-lg hover:bg-secondary"
                  >
                    Accessories
                  </Link>
                  <Link
                    href="/sale"
                    className="rounded-lg p-2 font-medium text-destructive text-lg hover:bg-secondary"
                  >
                    Sale
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
