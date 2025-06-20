import { PropertyNavigator } from "@/components/property-navigator"

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">Manage and explore your property portfolio</p>
        </div>
      </div>

      <PropertyNavigator />
    </div>
  )
}
