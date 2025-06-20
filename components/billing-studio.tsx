"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Receipt,
  Calendar,
  DollarSign,
  Clock,
  User,
  Building2,
  Plus,
  Download,
  Send,
  Eye,
  AlertTriangle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const invoices = [
  {
    id: "INV-001",
    tenant: "John Smith",
    property: "Sunset Apartments",
    unit: "Unit 4B",
    amount: 2500,
    dueDate: "2024-02-01",
    issueDate: "2024-01-01",
    status: "Paid",
    type: "Monthly Rent",
    paymentMethod: "Bank Transfer",
    paidDate: "2024-01-28",
  },
  {
    id: "INV-002",
    tenant: "Tech Solutions Inc.",
    property: "Metro Plaza Office",
    unit: "Suite 201",
    amount: 8500,
    dueDate: "2024-02-15",
    issueDate: "2024-01-15",
    status: "Pending",
    type: "Commercial Lease",
    paymentMethod: null,
    paidDate: null,
  },
  {
    id: "INV-003",
    tenant: "Sarah Johnson",
    property: "Green Valley Homes",
    unit: "Unit 12A",
    amount: 1800,
    dueDate: "2024-01-25",
    issueDate: "2024-01-01",
    status: "Overdue",
    type: "Monthly Rent",
    paymentMethod: null,
    paidDate: null,
  },
  {
    id: "INV-004",
    tenant: "Elite Properties",
    property: "Riverside Complex",
    unit: "Building A",
    amount: 3200,
    dueDate: "2024-02-10",
    issueDate: "2024-01-10",
    status: "Partial",
    type: "Maintenance Fee",
    paymentMethod: "Check",
    paidDate: null,
    paidAmount: 1600,
  },
]

const paymentPlans = [
  {
    id: "PP-001",
    tenant: "Mike Wilson",
    property: "Downtown Complex",
    totalAmount: 15000,
    paidAmount: 9000,
    remainingAmount: 6000,
    installments: 6,
    completedInstallments: 3,
    nextDueDate: "2024-02-15",
    monthlyAmount: 2500,
    status: "Active",
  },
  {
    id: "PP-002",
    tenant: "Lisa Chen",
    property: "Lakeside Villas",
    totalAmount: 24000,
    paidAmount: 24000,
    remainingAmount: 0,
    installments: 12,
    completedInstallments: 12,
    nextDueDate: null,
    monthlyAmount: 2000,
    status: "Completed",
  },
  {
    id: "PP-003",
    tenant: "David Brown",
    property: "Tech Hub Center",
    totalAmount: 18000,
    paidAmount: 3000,
    remainingAmount: 15000,
    installments: 9,
    completedInstallments: 1,
    nextDueDate: "2024-01-20",
    monthlyAmount: 2000,
    status: "Behind",
  },
]

const collections = [
  {
    id: "COL-001",
    tenant: "Sarah Johnson",
    property: "Green Valley Homes",
    amount: 1800,
    daysOverdue: 15,
    lastContact: "2024-01-10",
    status: "First Notice",
    assignedTo: "Collections Team A",
  },
  {
    id: "COL-002",
    tenant: "David Brown",
    property: "Tech Hub Center",
    amount: 4000,
    daysOverdue: 45,
    lastContact: "2024-01-05",
    status: "Final Notice",
    assignedTo: "Collections Team B",
  },
]

export function BillingStudio() {
  const [activeTab, setActiveTab] = useState("invoices")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      case "partial":
        return "bg-blue-100 text-blue-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "behind":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || invoice.status.toLowerCase() === filterStatus.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="plans">Payment Plans</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="builder">Invoice Builder</TabsTrigger>
          </TabsList>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Invoice
          </Button>
        </div>

        <TabsContent value="invoices" className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Input
                  placeholder="Search invoices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="partial">Partial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>

          {/* Invoices Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInvoices.map((invoice) => (
              <Card key={invoice.id} className="property-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Receipt className="h-5 w-5" />
                        {invoice.id}
                      </CardTitle>
                      <CardDescription className="mt-1">{invoice.tenant}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="truncate">{invoice.property}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="truncate">{invoice.unit}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Due: {new Date(invoice.dueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="font-semibold">${invoice.amount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <Badge variant="outline">{invoice.type}</Badge>
                    {invoice.status === "Partial" && invoice.paidAmount && (
                      <span className="text-sm text-muted-foreground">
                        Paid: ${invoice.paidAmount.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </div>

                  {invoice.status === "Overdue" && (
                    <div className="flex items-center p-2 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                      <span className="text-sm text-red-800">Payment overdue</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid gap-6">
            {paymentPlans.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Payment Plan {plan.id}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {plan.tenant} • {plan.property}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(plan.status)}>{plan.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm font-medium">Total Amount</p>
                      <p className="text-lg font-bold">${plan.totalAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Paid Amount</p>
                      <p className="text-lg font-bold text-green-600">${plan.paidAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Remaining</p>
                      <p className="text-lg font-bold text-red-600">${plan.remainingAmount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Monthly Payment</p>
                      <p className="text-lg font-bold">${plan.monthlyAmount.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        {plan.completedInstallments}/{plan.installments} installments
                      </span>
                    </div>
                    <Progress value={(plan.completedInstallments / plan.installments) * 100} className="h-2" />
                  </div>

                  {plan.nextDueDate && (
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Next payment due</span>
                      </div>
                      <span className="font-semibold">{new Date(plan.nextDueDate).toLocaleDateString()}</span>
                    </div>
                  )}

                  {plan.status === "Behind" && (
                    <div className="flex items-center p-2 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                      <span className="text-sm text-red-800">Payment plan is behind schedule</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collections" className="space-y-6">
          <div className="grid gap-6">
            {collections.map((collection) => (
              <Card key={collection.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        Collection Case {collection.id}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {collection.tenant} • {collection.property}
                      </CardDescription>
                    </div>
                    <Badge variant="destructive">{collection.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Amount Owed</p>
                        <p className="text-lg font-bold text-red-600">${collection.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Days Overdue</p>
                        <p className="text-lg font-bold">{collection.daysOverdue}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Last Contact</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(collection.lastContact).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Assigned To</p>
                        <p className="text-sm text-muted-foreground">{collection.assignedTo}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
