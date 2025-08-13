import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/db";
import { tryCatch } from "@/lib/try-catch";

import { ClientSidePage } from "./client-side-page";

export default async function Page() {
  const { userId } = await auth();

  const application = await tryCatch(
    db.query.shops.findFirst({
      where: (shops, { eq }) => eq(shops.userId, userId || ""),
      columns: { slug: true, status: true },
    }),
  );

  if (
    application.data?.status === "active" ||
    application.data?.status === "deactive"
  ) {
    redirect(`/dashboard/${application.data.slug}`);
  }

  return <ClientSidePage status={application.data?.status} />;
}
