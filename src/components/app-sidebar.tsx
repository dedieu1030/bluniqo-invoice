"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFileInvoice,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconPackage,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconWallet,
  IconReceipt,
  IconTrendingUp,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Admin",
    email: "admin@bluniqo.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Factures",
      url: "/invoices",
      icon: IconFileInvoice,
    },
    {
      title: "Clients",
      url: "/clients",
      icon: IconUsers,
    },
    {
      title: "Articles",
      url: "/items",
      icon: IconPackage,
    },
    {
      title: "Paiements",
      url: "/payments",
      icon: IconWallet,
    },
  ],
  navClouds: [
    {
      title: "Facturation",
      icon: IconReceipt,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Nouvelle Facture",
          url: "/invoices/new",
        },
        {
          title: "Devis",
          url: "/quotes",
        },
        {
          title: "Templates",
          url: "/templates",
        },
      ],
    },
    {
      title: "Rapports",
      icon: IconTrendingUp,
      url: "#",
      items: [
        {
          title: "Revenus",
          url: "/reports/revenue",
        },
        {
          title: "Clients",
          url: "/reports/clients",
        },
        {
          title: "Produits",
          url: "/reports/products",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Paramètres",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Aide",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Recherche",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Analytics",
      url: "/analytics",
      icon: IconChartBar,
    },
    {
      name: "Rapports",
      url: "/reports",
      icon: IconReport,
    },
    {
      name: "Historique",
      url: "/history",
      icon: IconListDetails,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Bluniqo</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

