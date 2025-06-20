import { FinanceWorkspace } from "@/components/finance-workspace"

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Finance & Accounting</h1>
          <p className="text-muted-foreground">Track finances, manage ledgers, and analyze performance</p>
        </div>
      </div>

      <FinanceWorkspace />
    </div>
  )
}
