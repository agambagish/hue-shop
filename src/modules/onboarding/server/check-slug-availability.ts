"use server";

import { db } from "@/db";
import { tryCatch } from "@/lib/try-catch";

export async function checkSlugAvailability(
  slug: string,
): Promise<{ available: boolean; message?: string }> {
  const shops = await tryCatch(
    db.query.shops.findFirst({
      where: (shops, { eq }) => eq(shops.slug, slug),
      columns: { id: true },
    }),
  );

  if (shops.error || shops.data?.id) {
    return { available: false, message: "This URL is already taken" };
  }

  return { available: true, message: "URL is available" };
}
