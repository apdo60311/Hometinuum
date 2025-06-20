import { MaintenanceCenter } from "@/components/maintenance-center"

export default function MaintenancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Maintenance & Services</h1>
          <p className="text-muted-foreground">Coordinate maintenance tasks and service requests</p>
        </div>
      </div>

      <MaintenanceCenter />
    </div>
  )
}
