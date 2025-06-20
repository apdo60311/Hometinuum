"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: "John Smith",
    action: "Created new contract",
    target: "Sunset Apartments Unit 4B",
    time: "2 hours ago",
    type: "contract",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    action: "Completed maintenance",
    target: "Downtown Office - HVAC Repair",
    time: "4 hours ago",
    type: "maintenance",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    user: "Mike Wilson",
    action: "Payment received",
    target: "$2,500 from Elite Properties",
    time: "6 hours ago",
    type: "payment",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    user: "Lisa Chen",
    action: "Property inspection",
    target: "Riverside Complex Building A",
    time: "1 day ago",
    type: "inspection",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 5,
    user: "David Brown",
    action: "Contract renewal",
    target: "Metro Plaza Office Suite",
    time: "2 days ago",
    type: "contract",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const typeColors = {
  contract: "bg-blue-100 text-blue-800",
  maintenance: "bg-orange-100 text-orange-800",
  payment: "bg-green-100 text-green-800",
  inspection: "bg-purple-100 text-purple-800",
}

interface RecentActivityProps {
  className?: string
}

export function RecentActivity({ className }: RecentActivityProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across your properties</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                <AvatarFallback>
                  {activity.user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <Badge variant="secondary" className={typeColors[activity.type as keyof typeof typeColors]}>
                    {activity.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.action} • {activity.target}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
