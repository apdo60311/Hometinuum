import { DashboardOverview } from "@/components/dashboard-overview"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"
import { FinancialSummary } from "@/components/financial-summary"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your Hometinuum property intelligence center</p>
        </div>
        <QuickActions />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardOverview />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <FinancialSummary className="col-span-4" />
        <RecentActivity className="col-span-3" />
      </div>
    </div>
  )
}