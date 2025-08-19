import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { auth } from "@clerk/nextjs/server";
import NextTopLoader from "nextjs-toploader";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { db } from "@/db";
import { tryCatch } from "@/lib/try-catch";
import { DashboardSidebar } from "@/modules/dashboard/components";

interface Props extends React.PropsWithChildren {
  params: Promise<{ slug: string }>;
}

export default async function Layout({ children, params }: Props) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  const _params = await params;
  const { userId } = await auth();

  const shop = await tryCatch(
    db.query.shops.findFirst({
      where: (shops, { eq, and, ne }) =>
        and(
          eq(shops.userId, userId || ""),
          eq(shops.slug, _params.slug),
          ne(shops.status, "pending"),
        ),
      columns: { slug: true },
    }),
  );

  if (!shop.data?.slug) {
    notFound();
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <NextTopLoader color="#644a40" showSpinner={false} />
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
