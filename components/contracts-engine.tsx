"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Eye,
  Edit,
  Download,
  Scale,
  Users,
  Building2,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const contracts = [
  {
    id: 1,
    title: "Sunset Apartments - Unit 4B Lease",
    property: "Sunset Apartments",
    tenant: "John Smith",
    type: "Residential Lease",
    status: "Active",
    startDate: "2024-01-15",
    endDate: "2024-12-15",
    monthlyAmount: 2500,
    progress: 75,
    daysRemaining: 92,
  },
  {
    id: 2,
    title: "Metro Plaza Office Suite Contract",
    property: "Metro Plaza Office",
    tenant: "Tech Solutions Inc.",
    type: "Commercial Lease",
    status: "Active",
    startDate: "2023-06-01",
    endDate: "2025-05-31",
    monthlyAmount: 8500,
    progress: 45,
    daysRemaining: 365,
  },
  {
    id: 3,
    title: "Riverside Complex Maintenance Agreement",
    property: "Riverside Complex",
    tenant: "ProMaint Services",
    type: "Service Contract",
    status: "Pending Renewal",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    monthlyAmount: 3200,
    progress: 90,
    daysRemaining: 30,
  },
  {
    id: 4,
    title: "Green Valley Homes - Unit 12A",
    property: "Green Valley Homes",
    tenant: "Sarah Johnson",
    type: "Residential Lease",
    status: "Draft",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    monthlyAmount: 1800,
    progress: 25,
    daysRemaining: 0,
  },
]

const legalCases = [
  {
    id: 1,
    title: "Tenant Eviction - Unit 7C",
    property: "Downtown Complex",
    type: "Eviction",
    status: "In Progress",
    priority: "High",
    assignedTo: "Legal Team A",
    filedDate: "2024-01-10",
    nextHearing: "2024-02-15",
    expenses: 5500,
  },
  {
    id: 2,
    title: "Property Damage Claim",
    property: "Sunset Apartments",
    type: "Insurance Claim",
    status: "Under Review",
    priority: "Medium",
    assignedTo: "Legal Team B",
    filedDate: "2024-01-20",
    nextHearing: null,
    expenses: 2300,
  },
]

export function ContractsEngine() {
  const [activeTab, setActiveTab] = useState("contracts")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending renewal":
        return "bg-yellow-100 text-yellow-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      case "expired":
        return "bg-red-100 text-red-800"
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

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
            <TabsTrigger value="legal">Legal Cases</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="composer">AI Composer</TabsTrigger>
          </TabsList>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            {activeTab === "contracts" ? "New Contract" : "New Case"}
          </Button>
        </div>

        <TabsContent value="contracts" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contracts.map((contract) => (
              <Card key={contract.id} className="property-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2">{contract.title}</CardTitle>
                      <CardDescription className="mt-1">{contract.tenant}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Contract
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Contract
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                    <Badge variant="outline">{contract.type}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Contract Progress</span>
                      <span>{contract.progress}%</span>
                    </div>
                    <Progress value={contract.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="truncate">{contract.property}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>${contract.monthlyAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{new Date(contract.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{contract.daysRemaining > 0 ? `${contract.daysRemaining} days left` : "Draft"}</span>
                    </div>
                  </div>

                  {contract.daysRemaining <= 30 && contract.daysRemaining > 0 && (
                    <div className="flex items-center p-2 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className="text-sm text-yellow-800">Renewal required soon</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="legal" className="space-y-6">
          <div className="grid gap-6">
            {legalCases.map((legalCase) => (
              <Card key={legalCase.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Scale className="h-5 w-5" />
                        {legalCase.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {legalCase.property} • Filed on {new Date(legalCase.filedDate).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getPriorityColor(legalCase.priority)}>{legalCase.priority} Priority</Badge>
                      <Badge variant="outline">{legalCase.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Assigned To</p>
                        <p className="text-sm text-muted-foreground">{legalCase.assignedTo}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Next Hearing</p>
                        <p className="text-sm text-muted-foreground">
                          {legalCase.nextHearing
                            ? new Date(legalCase.nextHearing).toLocaleDateString()
                            : "Not scheduled"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Legal Expenses</p>
                        <p className="text-sm text-muted-foreground">${legalCase.expenses.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Status</p>
                        <p className="text-sm text-muted-foreground">{legalCase.status}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="property-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Residential Lease Template
                </CardTitle>
                <CardDescription>Standard residential lease agreement template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Includes standard clauses for residential properties</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">Use Template</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="property-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Commercial Lease Template
                </CardTitle>
                <CardDescription>Comprehensive commercial lease agreement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Advanced clauses for commercial properties</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">Use Template</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="property-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Service Agreement Template
                </CardTitle>
                <CardDescription>Maintenance and service contract template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">For maintenance and service providers</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm">Use Template</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="composer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                AI Contract Composer
              </CardTitle>
              <CardDescription>Generate contract clauses and documents using AI assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-muted/50">
                  <h4 className="font-semibold mb-2">Smart Clause Generation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-powered clause suggestions based on property type, tenant profile, and legal requirements.
                  </p>
                  <Button>Start Composing</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Document Analysis</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload existing contracts for AI analysis and improvement suggestions.
                  </p>
                  <Button variant="outline">Upload Document</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
