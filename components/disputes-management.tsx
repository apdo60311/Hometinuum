"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Scale,
  AlertTriangle,
  Clock,
  CheckCircle,
  FileText,
  DollarSign,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MessageCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const disputes = [
  {
    id: "DSP-001",
    title: "Noise Complaint - Excessive Music",
    type: "Noise Complaint",
    status: "Open",
    priority: "Medium",
    complainant: "Sarah Johnson",
    respondent: "Mike Wilson",
    property: "Riverside Complex",
    unit: "Building A - 3F vs 2F",
    dateReported: "2024-01-10",
    description: "Tenant reports excessive music and noise from upstairs neighbor during late hours",
    assignedTo: "Legal Team A",
    estimatedResolution: "2024-01-25",
    progress: 35,
    documents: 3,
    communications: 5,
    lastUpdate: "2024-01-14",
    severity: "Low",
    legalRisk: "Low",
    financialImpact: 0,
  },
  {
    id: "DSP-002",
    title: "Security Deposit Dispute",
    type: "Financial Dispute",
    status: "In Mediation",
    priority: "High",
    complainant: "John Smith",
    respondent: "Property Management",
    property: "Sunset Apartments",
    unit: "Unit 4B",
    dateReported: "2024-01-05",
    description: "Former tenant disputes security deposit deductions for alleged damages",
    assignedTo: "Legal Team B",
    estimatedResolution: "2024-02-15",
    progress: 60,
    documents: 8,
    communications: 12,
    lastUpdate: "2024-01-13",
    severity: "Medium",
    legalRisk: "Medium",
    financialImpact: 2500,
  },
  {
    id: "DSP-003",
    title: "Lease Violation - Unauthorized Pet",
    type: "Lease Violation",
    status: "Under Review",
    priority: "Medium",
    complainant: "Property Management",
    respondent: "Lisa Chen",
    property: "Green Valley Homes",
    unit: "Unit 8A",
    dateReported: "2024-01-08",
    description: "Tenant has unauthorized pet in violation of lease agreement",
    assignedTo: "Property Manager",
    estimatedResolution: "2024-01-30",
    progress: 25,
    documents: 4,
    communications: 3,
    lastUpdate: "2024-01-12",
    severity: "Low",
    legalRisk: "Low",
    financialImpact: 500,
  },
  {
    id: "DSP-004",
    title: "Maintenance Negligence Claim",
    type: "Maintenance Dispute",
    status: "Escalated",
    priority: "High",
    complainant: "Tech Solutions Inc.",
    respondent: "Property Management",
    property: "Metro Plaza Office",
    unit: "Suite 201",
    dateReported: "2024-01-03",
    description: "Commercial tenant claims property damage due to delayed HVAC repairs",
    assignedTo: "Legal Team A",
    estimatedResolution: "2024-02-28",
    progress: 45,
    documents: 15,
    communications: 18,
    lastUpdate: "2024-01-15",
    severity: "High",
    legalRisk: "High",
    financialImpact: 15000,
  },
]

const resolutionMethods = [
  {
    id: 1,
    name: "Direct Communication",
    description: "Facilitate direct discussion between parties",
    successRate: 75,
    avgDuration: "7 days",
    cost: "$0",
  },
  {
    id: 2,
    name: "Mediation",
    description: "Third-party mediation service",
    successRate: 85,
    avgDuration: "21 days",
    cost: "$500-1500",
  },
  {
    id: 3,
    name: "Arbitration",
    description: "Binding arbitration process",
    successRate: 95,
    avgDuration: "45 days",
    cost: "$2000-5000",
  },
  {
    id: 4,
    name: "Legal Action",
    description: "Court proceedings",
    successRate: 70,
    avgDuration: "180 days",
    cost: "$5000+",
  },
]

export function DisputesManagement() {
  const [activeTab, setActiveTab] = useState("disputes")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")
  const [selectedDispute, setSelectedDispute] = useState<any>(null)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-blue-100 text-blue-800"
      case "in mediation":
        return "bg-yellow-100 text-yellow-800"
      case "under review":
        return "bg-purple-100 text-purple-800"
      case "escalated":
        return "bg-red-100 text-red-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const filteredDisputes = disputes.filter((dispute) => {
    const matchesSearch =
      dispute.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dispute.complainant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dispute.property.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || dispute.status.toLowerCase() === filterStatus.toLowerCase()
    const matchesPriority = filterPriority === "all" || dispute.priority.toLowerCase() === filterPriority.toLowerCase()

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="disputes">Active Disputes</TabsTrigger>
            <TabsTrigger value="resolution">Resolution Methods</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Dispute
          </Button>
        </div>

        <TabsContent value="disputes" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Disputes</CardTitle>
                <Scale className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{disputes.length}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">2 high priority</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28 days</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">-5 days</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+3%</span> improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Financial Impact</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$18K</div>
                <p className="text-xs text-muted-foreground">Total exposure</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search disputes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in mediation">In Mediation</SelectItem>
                  <SelectItem value="under review">Under Review</SelectItem>
                  <SelectItem value="escalated">Escalated</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
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

          {/* Disputes List */}
          <div className="space-y-4">
            {filteredDisputes.map((dispute) => (
              <Card key={dispute.id} className="property-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-lg">{dispute.title}</CardTitle>
                        <Badge className={getStatusColor(dispute.status)}>{dispute.status}</Badge>
                        <Badge className={getPriorityColor(dispute.priority)}>{dispute.priority}</Badge>
                      </div>
                      <CardDescription>
                        {dispute.property} • {dispute.unit} • Case #{dispute.id}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedDispute(dispute)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{dispute.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Complainant</p>
                      <p className="text-muted-foreground">{dispute.complainant}</p>
                    </div>
                    <div>
                      <p className="font-medium">Respondent</p>
                      <p className="text-muted-foreground">{dispute.respondent}</p>
                    </div>
                    <div>
                      <p className="font-medium">Assigned To</p>
                      <p className="text-muted-foreground">{dispute.assignedTo}</p>
                    </div>
                    <div>
                      <p className="font-medium">Est. Resolution</p>
                      <p className="text-muted-foreground">
                        {new Date(dispute.estimatedResolution).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{dispute.progress}%</span>
                    </div>
                    <Progress value={dispute.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{dispute.documents} docs</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{dispute.communications} messages</span>
                      </div>
                      <div className="flex items-center">
                        <AlertTriangle className={`h-4 w-4 mr-1 ${getRiskColor(dispute.legalRisk)}`} />
                        <span className={getRiskColor(dispute.legalRisk)}>{dispute.legalRisk} risk</span>
                      </div>
                    </div>

                    {dispute.financialImpact > 0 && (
                      <div className="text-sm font-semibold text-red-600">
                        ${dispute.financialImpact.toLocaleString()} exposure
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Parties
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <FileText className="mr-2 h-4 w-4" />
                      View Documents
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="mr-2 h-4 w-4" />
                      Update Status
                    </Button>
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
