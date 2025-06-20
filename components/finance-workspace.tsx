"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle, Plus, Download, Search, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 125000, expenses: 45000 },
  { month: "Feb", revenue: 132000, expenses: 48000 },
  { month: "Mar", revenue: 128000, expenses: 46000 },
  { month: "Apr", revenue: 145000, expenses: 52000 },
  { month: "May", revenue: 158000, expenses: 55000 },
  { month: "Jun", revenue: 162000, expenses: 58000 },
]

const expenseBreakdown = [
  { name: "Maintenance", value: 35, color: "#8884d8" },
  { name: "Utilities", value: 25, color: "#82ca9d" },
  { name: "Insurance", value: 15, color: "#ffc658" },
  { name: "Property Tax", value: 20, color: "#ff7300" },
  { name: "Other", value: 5, color: "#00ff00" },
]

const transactions = [
  {
    id: 1,
    type: "Income",
    description: "Rent Payment - Sunset Apartments Unit 4B",
    amount: 2500,
    date: "2024-01-15",
    status: "Completed",
    category: "Rental Income",
    property: "Sunset Apartments",
  },
  {
    id: 2,
    type: "Expense",
    description: "HVAC Maintenance - Metro Plaza",
    amount: -850,
    date: "2024-01-14",
    status: "Completed",
    category: "Maintenance",
    property: "Metro Plaza Office",
  },
  {
    id: 3,
    type: "Income",
    description: "Commercial Lease - Tech Hub Center",
    amount: 8500,
    date: "2024-01-13",
    status: "Pending",
    category: "Rental Income",
    property: "Tech Hub Center",
  },
  {
    id: 4,
    type: "Expense",
    description: "Property Insurance Premium",
    amount: -1200,
    date: "2024-01-12",
    status: "Completed",
    category: "Insurance",
    property: "Multiple Properties",
  },
  {
    id: 5,
    type: "Income",
    description: "Parking Fee - Riverside Complex",
    amount: 150,
    date: "2024-01-11",
    status: "Completed",
    category: "Additional Income",
    property: "Riverside Complex",
  },
]

const vouchers = [
  {
    id: "V001",
    date: "2024-01-15",
    description: "Monthly Rent Collection",
    debit: 15000,
    credit: 0,
    balance: 15000,
    status: "Posted",
  },
  {
    id: "V002",
    date: "2024-01-14",
    description: "Maintenance Expenses",
    debit: 0,
    credit: 2500,
    balance: 12500,
    status: "Posted",
  },
  {
    id: "V003",
    date: "2024-01-13",
    description: "Utility Bills Payment",
    debit: 0,
    credit: 1800,
    balance: 10700,
    status: "Pending",
  },
]

export function FinanceWorkspace() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.property.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || transaction.type.toLowerCase() === filterType.toLowerCase()

    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="ledger">Ledger</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Financial Summary Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$162,000</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <TrendingDown className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$58,000</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">+5%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$104,000</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+15%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,500</div>
                <p className="text-xs text-muted-foreground">3 pending payments</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses</CardTitle>
                <CardDescription>Monthly comparison over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenue" />
                    <Bar dataKey="expenses" fill="hsl(var(--destructive))" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Distribution of expenses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>

          {/* Transactions List */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>All financial transactions across your properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${
                          transaction.type === "Income" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                      >
                        {transaction.type === "Income" ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{transaction.description}</h3>
                        <p className="text-sm text-muted-foreground">
                          {transaction.property} • {transaction.category}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <Badge variant={transaction.status === "Completed" ? "default" : "secondary"} className="mt-1">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ledger" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Ledger</CardTitle>
              <CardDescription>Accounting vouchers and journal entries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vouchers.map((voucher) => (
                  <div key={voucher.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Voucher {voucher.id}</h3>
                        <p className="text-sm text-muted-foreground">{voucher.description}</p>
                        <p className="text-xs text-muted-foreground">{new Date(voucher.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex gap-4 text-sm">
                        <span className="text-green-600">Dr: ${voucher.debit.toLocaleString()}</span>
                        <span className="text-red-600">Cr: ${voucher.credit.toLocaleString()}</span>
                      </div>
                      <p className="font-semibold">Balance: ${voucher.balance.toLocaleString()}</p>
                      <Badge variant={voucher.status === "Posted" ? "default" : "secondary"}>{voucher.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="property-card">
              <CardHeader>
                <CardTitle>Profit & Loss Report</CardTitle>
                <CardDescription>Comprehensive P&L statement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Generate detailed profit and loss reports</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">Generate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="property-card">
              <CardHeader>
                <CardTitle>Cash Flow Statement</CardTitle>
                <CardDescription>Track cash inflows and outflows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Monitor cash flow across properties</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">Generate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="property-card">
              <CardHeader>
                <CardTitle>Tax Summary</CardTitle>
                <CardDescription>Tax-ready financial summaries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Prepare tax documentation</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">Generate</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
