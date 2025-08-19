import { Suspense } from "react";
import Link from "next/link";

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/db";
import { tryCatch } from "@/lib/try-catch";
import { cn } from "@/lib/utils";

export async function AuthButton() {
  const { userId } = await auth();

  return (
    <div className="flex space-x-2">
      <SignedIn>
        <ClerkLoading>
          <Skeleton className="size-9" />
          <Skeleton className="h-9 w-24" />
        </ClerkLoading>
        <ClerkLoaded>
          <Button variant="ghost" className="size-9">
            <UserButton />
          </Button>
          <Suspense fallback={<Skeleton className="h-9 w-24" />}>
            <ButtonSection userId={userId || ""} />
          </Suspense>
        </ClerkLoaded>
      </SignedIn>
      <SignedOut>
        <ClerkLoading>
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-9 w-24" />
        </ClerkLoading>
        <ClerkLoaded>
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "ghost" }), "w-16")}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={cn(buttonVariants({ variant: "secondary" }), "w-24")}
          >
            Get Started
          </Link>
        </ClerkLoaded>
      </SignedOut>
    </div>
  );
}

export async function ButtonSection({ userId }: { userId: string }) {
  const shop = await tryCatch(
    db.query.shops.findFirst({
      where: (shops, { eq, and, ne }) =>
        and(eq(shops.userId, userId), ne(shops.status, "pending")),
      columns: { slug: true },
    }),
  );

  return (
    <Link
      href={
        shop.data?.slug
          ? `/dashboard/${shop.data.slug}/overview`
          : "/onboarding"
      }
      className={cn(buttonVariants({ variant: "secondary" }), "w-24")}
    >
      {shop.data?.slug ? "Dashboard" : "Onboarding"}
    </Link>
  );
}
