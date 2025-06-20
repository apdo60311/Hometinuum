"use client"
import {
  Building2,
  FileText,
  DollarSign,
  Wrench,
  Receipt,
  Scale,
  Users,
  BarChart3,
  Settings,
  Home,
  Calendar,
  Bell,
  Plus,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const navigation = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: BarChart3,
        badge: "New",
      },
    ],
  },
  {
    title: "Core Modules",
    items: [
      {
        title: "Properties",
        url: "/dashboard/properties",
        icon: Building2,
        subItems: [
          { title: "All Properties", url: "/dashboard/properties" },
          { title: "Map View", url: "/dashboard/properties/map" },
          { title: "Add Property", url: "/dashboard/properties/new" },
        ],
      },
      {
        title: "Contracts & Legal",
        url: "/dashboard/contracts",
        icon: FileText,
        subItems: [
          { title: "Active Contracts", url: "/dashboard/contracts" },
          { title: "Legal Cases", url: "/dashboard/contracts/legal" },
          { title: "Templates", url: "/dashboard/contracts/templates" },
        ],
      },
      {
        title: "Finance",
        url: "/dashboard/finance",
        icon: DollarSign,
        subItems: [
          { title: "Ledger", url: "/dashboard/finance" },
          { title: "Transactions", url: "/dashboard/finance/transactions" },
          { title: "Reports", url: "/dashboard/finance/reports" },
        ],
      },
      {
        title: "Maintenance",
        url: "/dashboard/maintenance",
        icon: Wrench,
        badge: "3",
        subItems: [
          { title: "Service Board", url: "/dashboard/maintenance" },
          { title: "Technicians", url: "/dashboard/maintenance/technicians" },
          { title: "Inventory", url: "/dashboard/maintenance/inventory" },
        ],
      },
      {
        title: "Billing",
        url: "/dashboard/billing",
        icon: Receipt,
        subItems: [
          { title: "Invoices", url: "/dashboard/billing" },
          { title: "Payment Plans", url: "/dashboard/billing/plans" },
          { title: "Collections", url: "/dashboard/billing/collections" },
        ],
      },
      {
        title: "Disputes",
        url: "/dashboard/disputes",
        icon: Scale,
        badge: "1",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Tenants",
        url: "/dashboard/tenants",
        icon: Users,
      },
      {
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
      {
        title: "Notifications",
        url: "/dashboard/notifications",
        icon: Bell,
        badge: "5",
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Building2 className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">R.E.P.I.O.S</span>
                    <span className="truncate text-xs">Property Intelligence</span>
                  </div>
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>Acme Properties</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>Elite Real Estate</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Add Organization</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.subItems ? (
                      <Collapsible className="group/collapsible">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                                {item.badge}
                              </Badge>
                            )}
                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">John Doe</span>
                    <span className="truncate text-xs">Property Manager</span>
                  </div>
                  <ChevronDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
