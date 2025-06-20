import { BillingStudio } from "@/components/billing-studio"

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing & Invoicing</h1>
          <p className="text-muted-foreground">Create invoices, manage billing cycles, and track payments</p>
        </div>
      </div>

      <BillingStudio />
    </div>
  )
}
