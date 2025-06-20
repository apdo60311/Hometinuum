"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Building2, FileText, Receipt, Wrench } from "lucide-react"

export function QuickActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Quick Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <Building2 className="mr-2 h-4 w-4" />
          <span>Add Property</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Create Contract</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Receipt className="mr-2 h-4 w-4" />
          <span>Generate Invoice</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Wrench className="mr-2 h-4 w-4" />
          <span>Schedule Maintenance</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
