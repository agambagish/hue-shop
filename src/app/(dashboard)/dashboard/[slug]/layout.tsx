import { notFound } from "next/navigation";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/db";
import { tryCatch } from "@/lib/try-catch";

interface Props {
  params: Promise<{ slug: string }>;
  total_revenue: React.ReactNode;
  total_sales: React.ReactNode;
  customers: React.ReactNode;
  customer_reviews: React.ReactNode;
  sales_by_location: React.ReactNode;
}

export default async function Layout({
  total_revenue,
  total_sales,
  customers,
  customer_reviews,
  sales_by_location,
  params,
}: Props) {
  const _params = await params;
  const { userId } = await auth();

  const shop = await tryCatch(
    db.query.shops.findFirst({
      where: (shops, { eq, and, ne }) =>
        and(eq(shops.userId, userId || ""), ne(shops.status, "pending")),
      columns: { slug: true },
    }),
  );

  if (shop.data?.slug !== _params.slug) {
    notFound();
  }

  return (
    <main className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {total_revenue}
        {total_sales}
        {customers}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">{customer_reviews}</div>
        {sales_by_location}
      </div>
    </main>
  );
}
