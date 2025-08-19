"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ChartLine,
  CirclePercent,
  GlobeLock,
  Home,
  Package,
  Palette,
  Shirt,
  Store,
  ToggleRight,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const params = useParams<{ slug: string }>();

  const navItems = [
    {
      title: "Home",
      url: `/dashboard/${params.slug}/overview`,
      icon: Home,
    },
    {
      title: "Orders",
      url: "#",
      icon: Package,
    },
    {
      title: "Products",
      url: `/dashboard/${params.slug}/products`,
      icon: Shirt,
    },
    {
      title: "Customers",
      url: "#",
      icon: User,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartLine,
    },
    {
      title: "Discounts",
      url: "#",
      icon: CirclePercent,
    },
  ];

  const yourShopNavItems = [
    {
      title: "Themes",
      url: "#",
      icon: Palette,
    },
    {
      title: "Domains",
      url: "#",
      icon: GlobeLock,
    },
    {
      title: "Preferences",
      url: "#",
      icon: ToggleRight,
    },
  ];

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Store className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Your Shop</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {yourShopNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
