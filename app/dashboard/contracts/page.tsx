import { ContractsEngine } from "@/components/contracts-engine"

export default function ContractsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contracts & Legal</h1>
          <p className="text-muted-foreground">Manage contracts, legal workflows, and documentation</p>
        </div>
      </div>

      <ContractsEngine />
    </div>
  )
}
