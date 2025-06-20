"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const data = [
  { month: "Jan", revenue: 65000, expenses: 28000 },
  { month: "Feb", revenue: 72000, expenses: 31000 },
  { month: "Mar", revenue: 68000, expenses: 29000 },
  { month: "Apr", revenue: 78000, expenses: 33000 },
  { month: "May", revenue: 82000, expenses: 35000 },
  { month: "Jun", revenue: 89000, expenses: 38000 },
]

interface FinancialSummaryProps {
  className?: string
}

export function FinancialSummary({ className }: FinancialSummaryProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
        <CardDescription>Revenue vs expenses over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} name="Revenue" />
            <Line type="monotone" dataKey="expenses" stroke="hsl(var(--destructive))" strokeWidth={2} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
