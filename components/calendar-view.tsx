"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  User,
  Wrench,
  FileText,
  DollarSign,
  Building2,
  Filter,
  Download,
} from "lucide-react"

const events = [
  {
    id: 1,
    title: "Property Inspection - Sunset Apartments",
    type: "Inspection",
    date: "2024-01-15",
    time: "10:00 AM",
    duration: "2 hours",
    location: "Sunset Apartments - Unit 4B",
    attendees: ["John Smith (Tenant)", "Sarah Johnson (Inspector)"],
    status: "Scheduled",
    priority: "Medium",
    description: "Annual property inspection",
  },
  {
    id: 2,
    title: "Lease Signing - Green Valley Homes",
    type: "Legal",
    date: "2024-01-16",
    time: "2:00 PM",
    duration: "1 hour",
    location: "Office",
    attendees: ["Mike Wilson (New Tenant)", "Property Manager"],
    status: "Confirmed",
    priority: "High",
    description: "New lease agreement signing",
  },
  {
    id: 3,
    title: "HVAC Maintenance - Metro Plaza",
    type: "Maintenance",
    date: "2024-01-17",
    time: "9:00 AM",
    duration: "4 hours",
    location: "Metro Plaza Office - Suite 201",
    attendees: ["HVAC Technician", "Building Manager"],
    status: "Scheduled",
    priority: "High",
    description: "Quarterly HVAC system maintenance",
  },
  {
    id: 4,
    title: "Rent Collection Meeting",
    type: "Financial",
    date: "2024-01-18",
    time: "11:00 AM",
    duration: "30 minutes",
    location: "Office",
    attendees: ["Sarah Johnson (Tenant)"],
    status: "Pending",
    priority: "Medium",
    description: "Discuss late payment and payment plan",
  },
  {
    id: 5,
    title: "Property Showing - Lakeside Villas",
    type: "Showing",
    date: "2024-01-19",
    time: "3:00 PM",
    duration: "1 hour",
    location: "Lakeside Villas - Villa 5",
    attendees: ["Potential Tenant", "Leasing Agent"],
    status: "Scheduled",
    priority: "Medium",
    description: "Show available luxury villa to prospective tenant",
  },
]

const eventTypes = {
  Inspection: { color: "bg-blue-100 text-blue-800", icon: Building2 },
  Legal: { color: "bg-purple-100 text-purple-800", icon: FileText },
  Maintenance: { color: "bg-orange-100 text-orange-800", icon: Wrench },
  Financial: { color: "bg-green-100 text-green-800", icon: DollarSign },
  Showing: { color: "bg-pink-100 text-pink-800", icon: User },
}

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [view, setView] = useState<"month" | "week" | "day">("month")

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return events.filter((event) => event.date === dateStr)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  return (
    <div className="space-y-6">
      <Tabs value={view} onValueChange={(v) => setView(v as any)} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="day">Day</TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </div>
        </div>

        <TabsContent value="month" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="icon" onClick={() => navigateMonth("prev")}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle className="text-2xl">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </CardTitle>
                  <Button variant="outline" size="icon" onClick={() => navigateMonth("next")}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
                  Today
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 text-center font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentDate).map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-[120px] p-2 border rounded-lg ${
                      day ? "bg-white hover:bg-gray-50" : "bg-gray-50"
                    } ${
                      day === new Date().getDate() &&
                      currentDate.getMonth() === new Date().getMonth() &&
                      currentDate.getFullYear() === new Date().getFullYear()
                        ? "ring-2 ring-blue-500"
                        : ""
                    }`}
                  >
                    {day && (
                      <>
                        <div className="font-medium mb-1">{day}</div>
                        <div className="space-y-1">
                          {getEventsForDate(day).map((event) => {
                            const eventType = eventTypes[event.type as keyof typeof eventTypes]
                            return (
                              <div
                                key={event.id}
                                className="text-xs p-1 rounded cursor-pointer hover:opacity-80"
                                style={{ backgroundColor: eventType.color.split(" ")[0] }}
                                onClick={() => setSelectedEvent(event)}
                              >
                                <div className="font-medium truncate">{event.title}</div>
                                <div className="text-xs opacity-75">{event.time}</div>
                              </div>
                            )
                          })}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Week View</CardTitle>
              <CardDescription>Weekly schedule overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Week view would be implemented here</p>
                  <p className="text-sm text-muted-foreground mt-2">Showing detailed weekly schedule</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="day" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Day View</CardTitle>
              <CardDescription>Detailed daily schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Day view would be implemented here</p>
                  <p className="text-sm text-muted-foreground mt-2">Showing hourly schedule breakdown</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Next 7 days schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.slice(0, 5).map((event) => {
              const eventType = eventTypes[event.type as keyof typeof eventTypes]
              const IconComponent = eventType.icon

              return (
                <div
                  key={event.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className={`p-2 rounded-full ${eventType.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{event.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <Badge className={eventType.color}>{event.type}</Badge>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{selectedEvent.title}</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setSelectedEvent(null)}>
                  <ChevronRight className="h-4 w-4 rotate-45" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className={eventTypes[selectedEvent.type as keyof typeof eventTypes].color}>
                  {selectedEvent.type}
                </Badge>
                <Badge variant="outline">{selectedEvent.status}</Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>
                    {selectedEvent.time} ({selectedEvent.duration})
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Attendees</h4>
                <div className="space-y-1">
                  {selectedEvent.attendees.map((attendee: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <User className="h-3 w-3 mr-2 text-muted-foreground" />
                      <span className="text-sm">{attendee}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedEvent.description}</p>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  Edit Event
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Cancel Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
