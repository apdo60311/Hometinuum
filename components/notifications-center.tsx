"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Wrench,
  FileText,
  Users,
  Calendar,
  Settings,
  Trash2,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"

const notifications = [
  {
    id: 1,
    type: "payment",
    title: "Payment Received",
    message: "John Smith has paid $2,500 for Sunset Apartments Unit 4B",
    timestamp: "2024-01-15T10:30:00Z",
    read: false,
    priority: "medium",
    actionRequired: false,
    relatedEntity: "Sunset Apartments",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    id: 2,
    type: "maintenance",
    title: "Urgent Maintenance Request",
    message: "HVAC system failure reported at Metro Plaza Office Suite 201",
    timestamp: "2024-01-15T09:15:00Z",
    read: false,
    priority: "high",
    actionRequired: true,
    relatedEntity: "Metro Plaza Office",
    icon: Wrench,
    color: "text-red-600",
  },
  {
    id: 3,
    type: "lease",
    title: "Lease Expiring Soon",
    message: "Sarah Johnson's lease at Green Valley Homes expires in 30 days",
    timestamp: "2024-01-15T08:00:00Z",
    read: true,
    priority: "medium",
    actionRequired: true,
    relatedEntity: "Green Valley Homes",
    icon: FileText,
    color: "text-yellow-600",
  },
  {
    id: 4,
    type: "tenant",
    title: "New Tenant Application",
    message: "Mike Wilson has submitted an application for Riverside Complex",
    timestamp: "2024-01-14T16:45:00Z",
    read: false,
    priority: "medium",
    actionRequired: true,
    relatedEntity: "Riverside Complex",
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: 5,
    type: "inspection",
    title: "Inspection Scheduled",
    message: "Property inspection scheduled for Lakeside Villas on January 20th",
    timestamp: "2024-01-14T14:20:00Z",
    read: true,
    priority: "low",
    actionRequired: false,
    relatedEntity: "Lakeside Villas",
    icon: Calendar,
    color: "text-purple-600",
  },
  {
    id: 6,
    type: "payment",
    title: "Late Payment Alert",
    message: "Sarah Johnson's rent payment is 5 days overdue",
    timestamp: "2024-01-14T12:00:00Z",
    read: false,
    priority: "high",
    actionRequired: true,
    relatedEntity: "Green Valley Homes",
    icon: AlertTriangle,
    color: "text-red-600",
  },
]

const notificationSettings = [
  {
    category: "Payments",
    description: "Payment confirmations and late payment alerts",
    settings: [
      { name: "Payment Received", enabled: true },
      { name: "Late Payments", enabled: true },
      { name: "Payment Plans", enabled: false },
    ],
  },
  {
    category: "Maintenance",
    description: "Maintenance requests and work order updates",
    settings: [
      { name: "New Requests", enabled: true },
      { name: "Work Completed", enabled: true },
      { name: "Scheduled Maintenance", enabled: false },
    ],
  },
  {
    category: "Leases",
    description: "Lease renewals, expirations, and new applications",
    settings: [
      { name: "Lease Expiring", enabled: true },
      { name: "New Applications", enabled: true },
      { name: "Lease Renewals", enabled: true },
    ],
  },
  {
    category: "Property",
    description: "Property inspections and general updates",
    settings: [
      { name: "Inspections", enabled: false },
      { name: "Property Updates", enabled: true },
      { name: "Market Reports", enabled: false },
    ],
  },
]

export function NotificationsCenter() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
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

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "payment":
        return DollarSign
      case "maintenance":
        return Wrench
      case "lease":
        return FileText
      case "tenant":
        return Users
      case "inspection":
        return Calendar
      default:
        return Bell
    }
  }

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.relatedEntity.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "unread" && !notification.read) ||
      (activeTab === "action" && notification.actionRequired) ||
      activeTab === notification.type
    const matchesPriority = filterPriority === "all" || notification.priority === filterPriority

    return matchesSearch && matchesTab && matchesPriority
  })

  const markAsRead = (id: number) => {
    // In a real app, this would update the backend
    console.log(`Marking notification ${id} as read`)
  }

  const deleteNotification = (id: number) => {
    // In a real app, this would delete from backend
    console.log(`Deleting notification ${id}`)
  }

  const markAllAsRead = () => {
    // In a real app, this would update all notifications
    console.log("Marking all notifications as read")
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">
              Unread
              <Badge variant="secondary" className="ml-2">
                {notifications.filter((n) => !n.read).length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="action">Action Required</TabsTrigger>
            <TabsTrigger value="payment">Payments</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="lease">Leases</TabsTrigger>
          </TabsList>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <CheckCircle className="mr-2 h-4 w-4" />
              Mark All Read
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        <TabsContent value={activeTab} className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card>
                <CardContent className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No notifications found</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              filteredNotifications.map((notification) => {
                const IconComponent = getTypeIcon(notification.type)

                return (
                  <Card
                    key={notification.id}
                    className={`transition-all hover:shadow-md ${!notification.read ? "border-l-4 border-l-blue-500 bg-blue-50/30" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-full bg-gray-100 ${notification.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className={`font-semibold ${!notification.read ? "text-gray-900" : "text-gray-600"}`}>
                                {notification.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(notification.priority)}>{notification.priority}</Badge>
                              {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{notification.relatedEntity}</span>
                              <span>•</span>
                              <span>{new Date(notification.timestamp).toLocaleString()}</span>
                              {notification.actionRequired && (
                                <>
                                  <span>•</span>
                                  <Badge variant="outline" className="text-xs">
                                    Action Required
                                  </Badge>
                                </>
                              )}
                            </div>

                            <div className="flex items-center space-x-2">
                              {!notification.read && (
                                <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              )}
                              <Button variant="ghost" size="sm" onClick={() => deleteNotification(notification.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Configure your notification preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {notificationSettings.map((category, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-medium">{category.category}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <div className="space-y-2 pl-4">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="flex items-center justify-between">
                      <span className="text-sm">{setting.name}</span>
                      <Switch checked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
