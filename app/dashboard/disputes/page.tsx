import { DisputesManagement } from "@/components/disputes-management"

export default function DisputesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Disputes Management</h1>
          <p className="text-muted-foreground">Handle tenant disputes, legal cases, and resolution processes</p>
        </div>
      </div>

      <DisputesManagement />
    </div>
  )
}
