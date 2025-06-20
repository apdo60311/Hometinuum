"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wrench, Calendar, MapPin, Clock, User, Phone, Plus, Search, Star, Truck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const serviceRequests = [
  {
    id: "SR001",
    title: "HVAC System Repair",
    property: "Sunset Apartments",
    unit: "Unit 4B",
    priority: "High",
    status: "In Progress",
    assignedTo: "Mike Johnson",
    requestedBy: "John Smith (Tenant)",
    createdDate: "2024-01-15",
    scheduledDate: "2024-01-16",
    description: "Air conditioning not working properly, making loud noises",
    estimatedCost: 450,
    category: "HVAC",
  },
  {
    id: "SR002",
    title: "Plumbing Leak Fix",
    property: "Metro Plaza Office",
    unit: "Suite 201",
    priority: "High",
    status: "Pending",
    assignedTo: null,
    requestedBy: "Sarah Wilson (Property Manager)",
    createdDate: "2024-01-14",
    scheduledDate: null,
    description: "Water leak in the bathroom ceiling",
    estimatedCost: 320,
    category: "Plumbing",
  },
  {
    id: "SR003",
    title: "Electrical Outlet Replacement",
    property: "Riverside Complex",
    unit: "Building A - Lobby",
    priority: "Medium",
    status: "Completed",
    assignedTo: "David Brown",
    requestedBy: "Lisa Chen (Facility Manager)",
    createdDate: "2024-01-12",
    scheduledDate: "2024-01-13",
    description: "Replace faulty electrical outlets in lobby area",
    estimatedCost: 180,
    category: "Electrical",
  },
  {
    id: "SR004",
    title: "Carpet Cleaning",
    property: "Green Valley Homes",
    unit: "Unit 12A",
    priority: "Low",
    status: "Scheduled",
    assignedTo: "Clean Pro Services",
    requestedBy: "Property Management",
    createdDate: "2024-01-10",
    scheduledDate: "2024-01-18",
    description: "Deep carpet cleaning before new tenant move-in",
    estimatedCost: 250,
    category: "Cleaning",
  },
]

const technicians = [
  {
    id: 1,
    name: "Mike Johnson",
    specialty: "HVAC & Electrical",
    rating: 4.8,
    activeJobs: 3,
    completedJobs: 127,
    phone: "+1 (555) 123-4567",
    status: "Available",
    location: "Downtown Area",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "David Brown",
    specialty: "Plumbing & General",
    rating: 4.9,
    activeJobs: 2,
    completedJobs: 89,
    phone: "+1 (555) 234-5678",
    status: "On Job",
    location: "Business District",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Sarah Martinez",
    specialty: "Electrical & Security",
    rating: 4.7,
    activeJobs: 1,
    completedJobs: 156,
    phone: "+1 (555) 345-6789",
    status: "Available",
    location: "Riverside",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const inventory = [
  {
    id: 1,
    name: "HVAC Filters",
    category: "HVAC",
    quantity: 45,
    minStock: 20,
    unit: "pieces",
    cost: 15.99,
    supplier: "HVAC Supply Co.",
  },
  {
    id: 2,
    name: "Plumbing Pipes (PVC)",
    category: "Plumbing",
    quantity: 12,
    minStock: 15,
    unit: "pieces",
    cost: 8.5,
    supplier: "PlumbPro",
  },
  {
    id: 3,
    name: "Electrical Wire (12 AWG)",
    category: "Electrical",
    quantity: 8,
    minStock: 10,
    unit: "rolls",
    cost: 45.0,
    supplier: "ElectroMax",
  },
  {
    id: 4,
    name: "Paint (Interior White)",
    category: "General",
    quantity: 25,
    minStock: 15,
    unit: "gallons",
    cost: 32.99,
    supplier: "Paint Plus",
  },
]

export function MaintenanceCenter() {
  const [activeTab, setActiveTab] = useState("requests")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterPriority, setFilterPriority] = useState("all")

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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in progress":
        return "bg-blue-100 text-blue-800"
      case "scheduled":
        return "bg-purple-100 text-purple-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredRequests = serviceRequests.filter((request) => {
    const matchesSearch =
      request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.property.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || request.status.toLowerCase() === filterStatus.toLowerCase()
    const matchesPriority = filterPriority === "all" || request.priority.toLowerCase() === filterPriority.toLowerCase()

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="requests">Service Requests</TabsTrigger>
            <TabsTrigger value="technicians">Technicians</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Service Request
          </Button>
        </div>

        <TabsContent value="requests" className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search service requests..."
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
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
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
          </div>

          {/* Service Requests */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="property-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Wrench className="h-5 w-5" />
                        {request.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {request.property} • {request.unit}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getPriorityColor(request.priority)}>{request.priority}</Badge>
                      <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{request.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="truncate">{request.requestedBy}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{new Date(request.createdDate).toLocaleDateString()}</span>
                    </div>
                    {request.assignedTo && (
                      <div className="flex items-center">
                        <Wrench className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="truncate">{request.assignedTo}</span>
                      </div>
                    )}
                    {request.scheduledDate && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{new Date(request.scheduledDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="font-semibold">Est. Cost: ${request.estimatedCost}</span>
                    <Badge variant="outline">{request.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="technicians" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicians.map((technician) => (
              <Card key={technician.id} className="property-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={technician.avatar || "/placeholder.svg"} alt={technician.name} />
                      <AvatarFallback>
                        {technician.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{technician.name}</CardTitle>
                      <CardDescription>{technician.specialty}</CardDescription>
                    </div>
                    <Badge variant={technician.status === "Available" ? "default" : "secondary"}>
                      {technician.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{technician.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{technician.completedJobs} jobs completed</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{technician.activeJobs} active jobs</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="truncate">{technician.location}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{technician.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Profile
                    </Button>
                    <Button size="sm" className="flex-1">
                      Assign Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parts & Supplies Inventory</CardTitle>
              <CardDescription>Track maintenance supplies and equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                        <Truck className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.supplier} • ${item.cost} per {item.unit}
                        </p>
                        <Badge variant="outline" className="mt-1">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {item.quantity} {item.unit}
                      </p>
                      <p className="text-sm text-muted-foreground">Min: {item.minStock}</p>
                      {item.quantity <= item.minStock && (
                        <Badge variant="destructive" className="mt-1">
                          Low Stock
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Calendar</CardTitle>
              <CardDescription>Schedule and track maintenance activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Interactive calendar view would be integrated here</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Showing scheduled maintenance and service appointments
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
