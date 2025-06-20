"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Grid3X3,
  List,
  Map,
  Building2,
  MapPin,
  DollarSign,
  Users,
  Search,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  Star,
  Wifi,
  Car,
  Dumbbell,
  Shield,
  Zap,
  Droplets,
  Thermometer,
  Camera,
  Play,
  Calendar,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const properties = [
  {
    id: 1,
    name: "Abraj Al-Zamalek (Zamalek Towers)",
    type: "Residential",
    location: "Zamalek, Cairo",
    address: "15 Sharia Al-Nil, Zamalek, Cairo",
    units: 32,
    occupancy: 95,
    monthlyRevenue: 180000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    yearBuilt: 2019,
    totalArea: "18,500 sq ft",
    parkingSpaces: 40,
    amenities: ["Wifi", "Gym", "Parking", "Security", "Pool"],
    manager: "Ahmed Hassan",
    lastInspection: "2024-01-10",
    maintenanceScore: 92,
    energyRating: "A",
    virtualTour: true,
    photos: 28,
    roi: 14.2,
    appreciation: 9.8,
    tenantSatisfaction: 4.6,
    avgRent: 5625,
    marketValue: 4200000,
  },
  {
    id: 2,
    name: "Markaz Al-Tijara Al-Jadid (New Trade Center)",
    type: "Commercial",
    location: "New Administrative Capital",
    address: "Central Business District, New Capital",
    units: 18,
    occupancy: 88,
    monthlyRevenue: 320000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    yearBuilt: 2021,
    totalArea: "45,000 sq ft",
    parkingSpaces: 80,
    amenities: ["Wifi", "Security", "Parking", "Conference Rooms", "Cafeteria"],
    manager: "Fatima Al-Rashid",
    lastInspection: "2024-01-05",
    maintenanceScore: 95,
    energyRating: "A+",
    virtualTour: true,
    photos: 22,
    roi: 18.5,
    appreciation: 15.3,
    tenantSatisfaction: 4.7,
    avgRent: 17778,
    marketValue: 8500000,
  },
  {
    id: 3,
    name: "Mugamma' Masr Al-Jadida (New Cairo Complex)",
    type: "Mixed Use",
    location: "New Cairo",
    address: "90th Street, Fifth Settlement, New Cairo",
    units: 45,
    occupancy: 91,
    monthlyRevenue: 275000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    yearBuilt: 2018,
    totalArea: "32,000 sq ft",
    parkingSpaces: 65,
    amenities: ["Wifi", "Gym", "Pool", "Security", "Garden"],
    manager: "Omar Mahmoud",
    lastInspection: "2024-01-08",
    maintenanceScore: 87,
    energyRating: "A-",
    virtualTour: true,
    photos: 35,
    roi: 13.8,
    appreciation: 8.9,
    tenantSatisfaction: 4.4,
    avgRent: 6111,
    marketValue: 6200000,
  },
  {
    id: 4,
    name: "Buyut Al-Sahel Al-Shamali (North Coast Homes)",
    type: "Luxury",
    location: "North Coast, Alexandria",
    address: "Marina District, North Coast",
    units: 12,
    occupancy: 100,
    monthlyRevenue: 450000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    yearBuilt: 2020,
    totalArea: "25,000 sq ft",
    parkingSpaces: 24,
    amenities: ["Wifi", "Pool", "Gym", "Concierge", "Beach Access"],
    manager: "Layla Abdel-Rahman",
    lastInspection: "2024-01-03",
    maintenanceScore: 98,
    energyRating: "A+",
    virtualTour: true,
    photos: 42,
    roi: 22.5,
    appreciation: 18.7,
    tenantSatisfaction: 4.8,
    avgRent: 37500,
    marketValue: 12000000,
  },
  {
    id: 5,
    name: "Abraj Madinat Nasr (Nasr City Towers)",
    type: "Residential",
    location: "Nasr City, Cairo",
    address: "Abbas Al-Akkad Street, Nasr City",
    units: 28,
    occupancy: 89,
    monthlyRevenue: 165000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    yearBuilt: 2017,
    totalArea: "16,800 sq ft",
    parkingSpaces: 35,
    amenities: ["Wifi", "Gym", "Parking", "Security"],
    manager: "Youssef Al-Masri",
    lastInspection: "2024-01-12",
    maintenanceScore: 84,
    energyRating: "B+",
    virtualTour: false,
    photos: 26,
    roi: 11.8,
    appreciation: 7.2,
    tenantSatisfaction: 4.2,
    avgRent: 5893,
    marketValue: 3800000,
  },
  {
    id: 6,
    name: "Markaz Al-Amal Al-Tijari (Hope Commercial Center)",
    type: "Commercial",
    location: "Heliopolis, Cairo",
    address: "Salah Salem Road, Heliopolis",
    units: 15,
    occupancy: 93,
    monthlyRevenue: 285000,
    status: "Maintenance",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    yearBuilt: 2019,
    totalArea: "38,000 sq ft",
    parkingSpaces: 55,
    amenities: ["Wifi", "Security", "Parking", "Conference Rooms"],
    manager: "Nadia Farouk",
    lastInspection: "2024-01-15",
    maintenanceScore: 76,
    energyRating: "A",
    virtualTour: true,
    photos: 19,
    roi: 16.2,
    appreciation: 12.4,
    tenantSatisfaction: 4.3,
    avgRent: 19000,
    marketValue: 7200000,
  },
  {
    id: 7,
    name: "Qaryat Al-Gouna Al-Siyahiya (El Gouna Resort Village)",
    type: "Luxury",
    location: "El Gouna, Red Sea",
    address: "Marina District, El Gouna",
    units: 8,
    occupancy: 100,
    monthlyRevenue: 380000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    yearBuilt: 2021,
    totalArea: "20,000 sq ft",
    parkingSpaces: 16,
    amenities: ["Wifi", "Pool", "Beach Access", "Concierge", "Marina"],
    manager: "Amira Saeed",
    lastInspection: "2024-01-01",
    maintenanceScore: 96,
    energyRating: "A+",
    virtualTour: true,
    photos: 38,
    roi: 24.8,
    appreciation: 20.1,
    tenantSatisfaction: 4.9,
    avgRent: 47500,
    marketValue: 15000000,
  },
  {
    id: 8,
    name: "Mugamma' Al-Tagammu' Al-Khamis (Fifth Settlement Complex)",
    type: "Mixed Use",
    location: "Fifth Settlement, New Cairo",
    address: "South 90th Street, Fifth Settlement",
    units: 38,
    occupancy: 87,
    monthlyRevenue: 245000,
    status: "Active",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    yearBuilt: 2018,
    totalArea: "28,500 sq ft",
    parkingSpaces: 50,
    amenities: ["Wifi", "Gym", "Security", "Garden", "Playground"],
    manager: "Khaled Ibrahim",
    lastInspection: "2024-01-09",
    maintenanceScore: 89,
    energyRating: "A-",
    virtualTour: false,
    photos: 31,
    roi: 12.9,
    appreciation: 8.5,
    tenantSatisfaction: 4.3,
    avgRent: 6447,
    marketValue: 5500000,
  },
]

const tenants = [
  {
    id: 1,
    name: "Ahmed Mohamed Ali",
    email: "ahmed.ali@email.com",
    phone: "+20 (10) 123-4567",
    property: "Abraj Al-Zamalek",
    unit: "Unit 12A",
    leaseStart: "2024-01-15",
    leaseEnd: "2024-12-15",
    rentAmount: 6500,
    securityDeposit: 13000,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.5,
    yearsAsTenant: 2,
    emergencyContact: "Fatima Ali - (010) 987-6543",
    occupation: "Software Engineer",
    moveInDate: "2022-01-15",
    notes: "Excellent tenant, always pays on time",
    maintenanceRequests: 2,
    communicationPreference: "Email",
    petPolicy: "No Pets",
    renewalStatus: "Eligible",
    creditScore: 780,
    monthlyIncome: 25000,
  },
  {
    id: 2,
    name: "Mona Hassan Mahmoud",
    email: "mona.hassan@email.com",
    phone: "+20 (11) 234-5678",
    property: "Mugamma' Masr Al-Jadida",
    unit: "Unit 8B",
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31",
    rentAmount: 5800,
    securityDeposit: 11600,
    status: "Active",
    paymentStatus: "Late",
    lastPayment: "2023-12-15",
    nextPayment: "2024-01-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3.8,
    yearsAsTenant: 1,
    emergencyContact: "Omar Hassan - (011) 876-5432",
    occupation: "Marketing Manager",
    moveInDate: "2023-06-01",
    notes: "Occasionally late on payments, good communicator",
    maintenanceRequests: 5,
    communicationPreference: "Phone",
    petPolicy: "1 Cat - Mishmish",
    renewalStatus: "Under Review",
    creditScore: 720,
    monthlyIncome: 18000,
  },
  {
    id: 3,
    name: "Sharikat Al-Hulul Al-Taqaniya (Tech Solutions Company)",
    email: "admin@techsolutions-eg.com",
    phone: "+20 (2) 345-6789",
    property: "Markaz Al-Tijara Al-Jadid",
    unit: "Suite 301",
    leaseStart: "2023-01-01",
    leaseEnd: "2025-12-31",
    rentAmount: 22000,
    securityDeposit: 44000,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
    yearsAsTenant: 3,
    emergencyContact: "Yasser Abdel-Aziz - (012) 765-4321",
    occupation: "Technology Company",
    moveInDate: "2021-01-01",
    notes: "Corporate tenant, excellent payment history",
    maintenanceRequests: 1,
    communicationPreference: "Email",
    petPolicy: "N/A",
    renewalStatus: "Auto-Renewal",
    creditScore: 850,
    monthlyIncome: 450000,
  },
  {
    id: 4,
    name: "Karim Youssef Farid",
    email: "karim.farid@email.com",
    phone: "+20 (12) 456-7890",
    property: "Abraj Madinat Nasr",
    unit: "Unit 15C",
    leaseStart: "2024-02-01",
    leaseEnd: "2025-01-31",
    rentAmount: 5200,
    securityDeposit: 10400,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-15",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.2,
    yearsAsTenant: 0.5,
    emergencyContact: "Dina Farid - (012) 654-3210",
    occupation: "Financial Analyst",
    moveInDate: "2024-02-01",
    notes: "New tenant, good references",
    maintenanceRequests: 0,
    communicationPreference: "WhatsApp",
    petPolicy: "No Pets",
    renewalStatus: "Too Early",
    creditScore: 750,
    monthlyIncome: 22000,
  },
  {
    id: 5,
    name: "Yasmin Adel Mansour",
    email: "yasmin.mansour@email.com",
    phone: "+20 (10) 567-8901",
    property: "Buyut Al-Sahel Al-Shamali",
    unit: "Villa 5",
    leaseStart: "2023-03-01",
    leaseEnd: "2025-02-28",
    rentAmount: 45000,
    securityDeposit: 90000,
    status: "Active",
    paymentStatus: "Current",
    lastPayment: "2024-01-01",
    nextPayment: "2024-02-01",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.9,
    yearsAsTenant: 1,
    emergencyContact: "Tarek Mansour - (011) 543-2109",
    occupation: "Investment Consultant",
    moveInDate: "2023-03-01",
    notes: "Premium tenant, no issues",
    maintenanceRequests: 1,
    communicationPreference: "Email",
    petPolicy: "No Pets",
    renewalStatus: "Likely to Renew",
    creditScore: 820,
    monthlyIncome: 120000,
  },
]

const amenityIcons = {
  Wifi: Wifi,
  Gym: Dumbbell,
  Parking: Car,
  Security: Shield,
  Pool: Droplets,
  Garden: Thermometer,
  "Conference Rooms": Building2,
  Cafeteria: Users,
  Concierge: Star,
  "Beach Access": Droplets,
  Marina: Users,
  Playground: Users,
}

export function PropertyNavigator() {
  const [view, setView] = useState<"grid" | "list" | "map">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [selectedProperty, setSelectedProperty] = useState<(typeof properties)[0] | null>(null)
  const [isTourOpen, setIsTourOpen] = useState(false)

  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = filterType === "all" || property.type.toLowerCase() === filterType.toLowerCase()
      const matchesStatus = filterStatus === "all" || property.status.toLowerCase() === filterStatus.toLowerCase()

      return matchesSearch && matchesType && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "revenue":
          return b.monthlyRevenue - a.monthlyRevenue
        case "occupancy":
          return b.occupancy - a.occupancy
        case "roi":
          return b.roi - a.roi
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800"
      case "vacant":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEnergyRatingColor = (rating: string) => {
    if (rating.startsWith("A")) return "bg-green-100 text-green-800"
    if (rating.startsWith("B")) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const openVirtualTour = (property: (typeof properties)[0]) => {
    setSelectedProperty(property)
    setIsTourOpen(true)
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Filters and Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex flex-1 gap-4 items-center flex-wrap">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search properties, locations, addresses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="mixed use">Mixed Use</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="vacant">Vacant</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="occupancy">Occupancy</SelectItem>
              <SelectItem value="roi">ROI</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Tabs value={view} onValueChange={(v) => setView(v as any)} className="w-auto">
            <TabsList>
              <TabsTrigger value="grid" className="px-3">
                <Grid3X3 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list" className="px-3">
                <List className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="map" className="h-4 w-4" />
            </TabsList>
          </Tabs>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>
      </div>

      {/* Property Views */}
      {view === "grid" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="property-card overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Status and Rating Badges */}
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge className={getStatusColor(property.status)}>{property.status}</Badge>
                  <Badge className={getEnergyRatingColor(property.energyRating)}>
                    <Zap className="w-3 h-3 mr-1" />
                    {property.energyRating}
                  </Badge>
                </div>

                {/* Virtual Tour and Photos */}
                <div className="absolute top-2 right-2 flex gap-2">
                  {property.virtualTour && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200 transition-colors"
                      onClick={() => openVirtualTour(property)}
                    >
                      <Play className="w-3 h-3 mr-1" />
                      3D Tour
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    <Camera className="w-3 h-3 mr-1" />
                    {property.photos}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="absolute bottom-2 left-2 flex items-center space-x-1 text-white">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{property.rating}</span>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Property
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Inspection
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{property.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {property.address}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{property.units} units</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{property.occupancy}% occupied</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-semibold">${property.monthlyRevenue.toLocaleString()}/mo</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-semibold">{property.roi}% ROI</span>
                  </div>
                </div>

                {/* Occupancy Progress */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Occupancy Rate</span>
                    <span>{property.occupancy}%</span>
                  </div>
                  <Progress value={property.occupancy} className="h-2" />
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1">
                  {property.amenities.slice(0, 4).map((amenity) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Building2
                    return (
                      <Badge key={amenity} variant="outline" className="text-xs">
                        <IconComponent className="w-3 h-3 mr-1" />
                        {amenity}
                      </Badge>
                    )
                  })}
                  {property.amenities.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{property.amenities.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Property Manager */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg" alt={property.manager} />
                      <AvatarFallback className="text-xs">
                        {property.manager
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{property.manager}</span>
                  </div>
                  <Badge variant="outline">{property.type}</Badge>
                </div>

                {/* Maintenance Alert */}
                {property.maintenanceScore < 80 && (
                  <div className="flex items-center p-2 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                    <span className="text-sm text-yellow-800">Maintenance attention needed</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {view === "list" && (
        <Card>
          <CardHeader>
            <CardTitle>Properties List</CardTitle>
            <CardDescription>Detailed view of all properties with comprehensive metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between p-6 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-6 flex-1">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{property.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{property.rating}</span>
                        </div>
                        <Badge className={getStatusColor(property.status)}>{property.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {property.address}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <span>{property.units} units</span>
                        <span>{property.occupancy}% occupied</span>
                        <span>{property.totalArea}</span>
                        <span>Built {property.yearBuilt}</span>
                        <Badge variant="outline" className="text-xs">
                          {property.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 mt-2">
                        {property.amenities.slice(0, 3).map((amenity) => {
                          const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Building2
                          return (
                            <div key={amenity} className="flex items-center text-xs text-muted-foreground">
                              <IconComponent className="w-3 h-3 mr-1" />
                              {amenity}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="font-semibold text-lg">${property.monthlyRevenue.toLocaleString()}/month</p>
                    <p className="text-sm text-muted-foreground">ROI: {property.roi}%</p>
                    <p className="text-sm text-muted-foreground">
                      Value: ${(property.marketValue / 1000000).toFixed(1)}M
                    </p>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg" alt={property.manager} />
                        <AvatarFallback className="text-xs">
                          {property.manager
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{property.manager}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {view === "map" && (
        <Card>
          <CardHeader>
            <CardTitle>Property Map View</CardTitle>
            <CardDescription>Geographic distribution with interactive property markers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Mock Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-gray-200"></div>
                  ))}
                </div>
              </div>

              {/* Property Markers */}
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="absolute bg-white rounded-lg shadow-lg p-3 border-2 border-blue-500 cursor-pointer hover:shadow-xl transition-shadow"
                  style={{
                    left: `${20 + index * 12}%`,
                    top: `${30 + (index % 3) * 20}%`,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-sm">{property.name}</p>
                      <p className="text-xs text-muted-foreground">${property.monthlyRevenue.toLocaleString()}/mo</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center z-10">
                <Map className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Interactive map view with property locations</p>
                <p className="text-sm text-muted-foreground mt-2">Showing {filteredProperties.length} properties</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
