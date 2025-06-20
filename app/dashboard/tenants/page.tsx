import { TenantsManagement } from "@/components/tenants-management"

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenants Management</h1>
          <p className="text-muted-foreground">Manage tenant relationships, leases, and communications</p>
        </div>
      </div>

      <TenantsManagement />
    </div>
  )
}
