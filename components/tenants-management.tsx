"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  FileText,
  MessageCircle,
  Star,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  Download,
  Edit,
  Eye,
  Send,
  CreditCard,
  Home,
  Users,
  Bell,
  X,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const tenants = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    property: "Sunset Apartments",
    unit: "Unit 4B",
    leaseStart: "2024-01-15",
    leaseEnd: "2024-12-15",
    rentAmount: 2500,
    securityDeposit: 5000,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.5,
    yearsAsTenant: 2,
    emergencyContact: "Jane Smith - (555) 987-6543",
    occupation: "Software Engineer",
    moveInDate: "2022-01-15",
    notes: "Excellent tenant, always pays on time",
    maintenanceRequests: 2,
    communicationPreference: "Email",
    petPolicy: "1 Cat - Whiskers",
    renewalStatus: "Eligible",
    creditScore: 780,
    monthlyIncome: 8500,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 234-5678",
    property: "Green Valley Homes",
    unit: "Unit 12A",
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31",
    rentAmount: 1800,
    securityDeposit: 3600,
    status: "Active",
    paymentStatus: "Late",
    lastPayment: "2023-12-15",
    nextPayment: "2024-01-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3.8,
    yearsAsTenant: 1,
    emergencyContact: "Mike Johnson - (555) 876-5432",
    occupation: "Teacher",
    moveInDate: "2023-06-01",
    notes: "Occasionally late on payments, good communicator",
    maintenanceRequests: 5,
    communicationPreference: "Phone",
    petPolicy: "No Pets",
    renewalStatus: "Under Review",
    creditScore: 720,
    monthlyIncome: 4200,
  },
  {
    id: 3,
    name: "Tech Solutions Inc.",
    email: "admin@techsolutions.com",
    phone: "+1 (555) 345-6789",
    property: "Metro Plaza Office",
    unit: "Suite 201",
    leaseStart: "2023-01-01",
    leaseEnd: "2025-12-31",
    rentAmount: 8500,
    securityDeposit: 17000,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
    yearsAsTenant: 3,
    emergencyContact: "David Chen - (555) 765-4321",
    occupation: "Technology Company",
    moveInDate: "2021-01-01",
    notes: "Corporate tenant, excellent payment history",
    maintenanceRequests: 1,
    communicationPreference: "Email",
    petPolicy: "N/A",
    renewalStatus: "Auto-Renewal",
    creditScore: 850,
    monthlyIncome: 150000,
  },
  {
    id: 4,
    name: "Mike Wilson",
    email: "mike.wilson@email.com",
    phone: "+1 (555) 456-7890",
    property: "Riverside Complex",
    unit: "Building A - 3F",
    leaseStart: "2024-02-01",
    leaseEnd: "2025-01-31",
    rentAmount: 2200,
    securityDeposit: 4400,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-15",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.2,
    yearsAsTenant: 0.5,
    emergencyContact: "Lisa Wilson - (555) 654-3210",
    occupation: "Marketing Manager",
    moveInDate: "2024-02-01",
    notes: "New tenant, good references",
    maintenanceRequests: 0,
    communicationPreference: "Text",
    petPolicy: "1 Dog - Max",
    renewalStatus: "Too Early",
    creditScore: 750,
    monthlyIncome: 6800,
  },
  {
    id: 5,
    name: "Lisa Chen",
    email: "lisa.chen@email.com",
    phone: "+1 (555) 567-8901",
    property: "Lakeside Villas",
    unit: "Villa 3",
    leaseStart: "2023-03-01",
    leaseEnd: "2025-02-28",
    rentAmount: 20000,
    securityDeposit: 40000,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.9,
    yearsAsTenant: 1,
    emergencyContact: "Robert Chen - (555) 543-2109",
    occupation: "Investment Banker",
    moveInDate: "2023-03-01",
    notes: "Premium tenant, no issues",
    maintenanceRequests: 1,
    communicationPreference: "Email",
    petPolicy: "No Pets",
    renewalStatus: "Likely to Renew",
    creditScore: 820,
    monthlyIncome: 45000,
  },
]

const communications = [
  {
    id: 1,
    tenantId: 1,
    tenantName: "John Smith",
    type: "Email",
    subject: "Lease Renewal Discussion",
    message: "Hi John, your lease is coming up for renewal. Would you like to schedule a meeting?",
    date: "2024-01-10",
    status: "Sent",
    response: "Yes, I'd like to renew. Can we meet next week?",
  },
  {
    id: 2,
    tenantId: 2,
    tenantName: "Sarah Johnson",
    type: "Phone",
    subject: "Late Payment Reminder",
    message: "Called regarding overdue rent payment",
    date: "2024-01-08",
    status: "Completed",
    response: "Will pay by end of week",
  },
  {
    id: 3,
    tenantId: 3,
    tenantName: "Tech Solutions Inc.",
    type: "Email",
    subject: "Maintenance Schedule",
    message: "HVAC maintenance scheduled for next Tuesday",
    date: "2024-01-05",
    status: "Read",
    response: "Acknowledged",
  },
]

const leaseRenewals = [
  {
    id: 1,
    tenant: "Sarah Johnson",
    property: "Green Valley Homes",
    unit: "Unit 12A",
    currentRent: 1800,
    proposedRent: 1950,
    expiryDate: "2024-05-31",
    daysUntilExpiry: 120,
    status: "Under Review",
    renewalProbability: 75,
  },
  {
    id: 2,
    tenant: "John Smith",
    property: "Sunset Apartments",
    unit: "Unit 4B",
    currentRent: 2500,
    proposedRent: 2650,
    expiryDate: "2024-12-15",
    daysUntilExpiry: 320,
    status: "Eligible",
    renewalProbability: 90,
  },
]

export function TenantsManagement() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPayment, setFilterPayment] = useState("all")
  const [selectedTenant, setSelectedTenant] = useState<any>(null)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "current":
        return "bg-green-100 text-green-800"
      case "late":
        return "bg-red-100 text-red-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.unit.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || tenant.status.toLowerCase() === filterStatus.toLowerCase()
    const matchesPayment = filterPayment === "all" || tenant.paymentStatus.toLowerCase() === filterPayment.toLowerCase()

    return matchesSearch && matchesStatus && matchesPayment
  })

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tenants">All Tenants</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
            <TabsTrigger value="renewals">Lease Renewals</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Tenant
          </Button>
        </div>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{tenants.length}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+2</span> new this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+2.1%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Tenant Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.4/5</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+0.2</span> improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payment Issues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">Late payment</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Tenant Activity</CardTitle>
                <CardDescription>Latest tenant interactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt="John Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">John Smith</p>
                      <p className="text-sm text-muted-foreground">Submitted lease renewal request</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Renewal</Badge>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Payment received - $1,800</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Payment</Badge>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg" alt="Mike Wilson" />
                      <AvatarFallback>MW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Mike Wilson</p>
                      <p className="text-sm text-muted-foreground">Moved in to Riverside Complex</p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Move-in</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Renewals</CardTitle>
                <CardDescription>Leases expiring in the next 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaseRenewals.map((renewal) => (
                    <div key={renewal.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{renewal.tenant}</p>
                        <p className="text-sm text-muted-foreground">
                          {renewal.property} - {renewal.unit}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expires: {new Date(renewal.expiryDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          className={
                            renewal.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }
                        >
                          {renewal.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{renewal.daysUntilExpiry} days</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tenants" className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search tenants, properties, units..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterPayment} onValueChange={setFilterPayment}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Payment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payments</SelectItem>
                  <SelectItem value="current">Current</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Tenants Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTenants.map((tenant) => (
              <Card key={tenant.id} className="property-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
                        <AvatarFallback>
                          {tenant.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{tenant.name}</CardTitle>
                        <CardDescription>{tenant.occupation}</CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <User className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedTenant(tenant)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Status Badges */}
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(tenant.status)}>{tenant.status}</Badge>
                    <Badge className={getPaymentStatusColor(tenant.paymentStatus)}>{tenant.paymentStatus}</Badge>
                  </div>

                  {/* Property Info */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {tenant.property} - {tenant.unit}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="font-semibold">${tenant.rentAmount.toLocaleString()}/month</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Lease until {new Date(tenant.leaseEnd).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{tenant.rating}</span>
                      <span className="text-sm text-muted-foreground">rating</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{tenant.yearsAsTenant} years</span>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                      <span className="truncate">{tenant.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                      <span>{tenant.phone}</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment
                    </Button>
                  </div>

                  {/* Alerts */}
                  {tenant.paymentStatus === "Late" && (
                    <div className="flex items-center p-2 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                      <span className="text-sm text-red-800">Payment overdue</span>
                    </div>
                  )}

                  {tenant.renewalStatus === "Eligible" && (
                    <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                      <Bell className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-800">Renewal eligible</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="communications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication History</CardTitle>
              <CardDescription>All tenant communications and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communications.map((comm) => (
                  <div key={comm.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                      {comm.type === "Email" ? <Mail className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{comm.subject}</h4>
                        <Badge variant="outline">{comm.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">To: {comm.tenantName}</p>
                      <p className="text-sm mb-2">{comm.message}</p>
                      {comm.response && (
                        <div className="p-2 bg-gray-50 rounded text-sm">
                          <strong>Response:</strong> {comm.response}
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">{new Date(comm.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="renewals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lease Renewals</CardTitle>
              <CardDescription>Track and manage upcoming lease renewals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaseRenewals.map((renewal) => (
                  <div key={renewal.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{renewal.tenant}</h4>
                        <p className="text-sm text-muted-foreground">
                          {renewal.property} - {renewal.unit}
                        </p>
                      </div>
                      <Badge
                        className={
                          renewal.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }
                      >
                        {renewal.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Current Rent</p>
                        <p className="text-lg font-bold">${renewal.currentRent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Proposed Rent</p>
                        <p className="text-lg font-bold text-green-600">${renewal.proposedRent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Expiry Date</p>
                        <p className="text-lg font-bold">{new Date(renewal.expiryDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Days Until Expiry</p>
                        <p className="text-lg font-bold">{renewal.daysUntilExpiry}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Renewal Probability</span>
                        <span>{renewal.renewalProbability}%</span>
                      </div>
                      <Progress value={renewal.renewalProbability} className="h-2" />
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Renewal
                      </Button>
                      <Button size="sm" variant="outline">
                        <Send className="mr-2 h-4 w-4" />
                        Contact Tenant
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Tenant Detail Modal */}
      {selectedTenant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={selectedTenant.avatar || "/placeholder.svg"} alt={selectedTenant.name} />
                    <AvatarFallback>
                      {selectedTenant.name
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{selectedTenant.name}</CardTitle>
                    <CardDescription>{selectedTenant.occupation}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedTenant(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="font-semibold mb-3">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{selectedTenant.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{selectedTenant.phone}</span>
                  </div>
                </div>
              </div>

              {/* Lease Information */}
              <div>
                <h3 className="font-semibold mb-3">Lease Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Property</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedTenant.property} - {selectedTenant.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monthly Rent</p>
                    <p className="text-sm text-muted-foreground">${selectedTenant.rentAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lease Period</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(selectedTenant.leaseStart).toLocaleDateString()} -{" "}
                      {new Date(selectedTenant.leaseEnd).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Security Deposit</p>
                    <p className="text-sm text-muted-foreground">${selectedTenant.securityDeposit.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div>
                <h3 className="font-semibold mb-3">Financial Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Credit Score</p>
                    <p className="text-sm text-muted-foreground">{selectedTenant.creditScore}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monthly Income</p>
                    <p className="text-sm text-muted-foreground">${selectedTenant.monthlyIncome.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="font-semibold mb-3">Additional Information</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Emergency Contact</p>
                    <p className="text-sm text-muted-foreground">{selectedTenant.emergencyContact}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pet Policy</p>
                    <p className="text-sm text-muted-foreground">{selectedTenant.petPolicy}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Notes</p>
                    <p className="text-sm text-muted-foreground">{selectedTenant.notes}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
