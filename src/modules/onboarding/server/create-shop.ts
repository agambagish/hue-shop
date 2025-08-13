"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/db";
import { shops } from "@/db/schema";
import { tryCatch } from "@/lib/try-catch";
import type { OnboardingSchema } from "@/modules/onboarding/schemas/onboarding-schema";

export async function createShop(data: OnboardingSchema) {
  const { userId } = await auth();

  if (!userId) throw new Error("You aren't logged in");

  const exists = await tryCatch(
    db.query.shops.findFirst({
      where: (shops, { eq }) => eq(shops.slug, data.slug),
      columns: { id: true },
    }),
  );

  if (exists.error || exists.data?.id) {
    throw new Error("This URL is already taken");
  }

  const newShop = await tryCatch(
    db
      .insert(shops)
      .values({
        ...data,
        userId,
      })
      .returning({
        slug: shops.slug,
      }),
  );

  if (newShop.error || newShop.data.length === 0) {
    throw new Error("Something went wrong");
  }

  return newShop.data[0].slug;
}
