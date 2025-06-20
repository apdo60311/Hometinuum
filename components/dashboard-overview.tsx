"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FileText, DollarSign, Wrench, TrendingUp, TrendingDown, Users, AlertTriangle } from "lucide-react"
import { useLocalization } from "@/components/localization-provider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const stats = [
  {
    title: "totalProperties",
    value: "247",
    change: "+12%",
    icon: Building2,
    color: "text-blue-600",
    trend: "up",
    details: "5 new properties added this month",
    target: 300,
    current: 247,
  },
  {
    title: "activeContracts",
    value: "189",
    change: "+5%",
    icon: FileText,
    color: "text-green-600",
    trend: "up",
    details: "12 contracts renewed, 3 new signings",
    target: 200,
    current: 189,
  },
  {
    title: "monthlyRevenue",
    value: "$1.2M",
    change: "+8%",
    icon: DollarSign,
    color: "text-yellow-600",
    trend: "up",
    details: "Revenue increased by $89K",
    target: 1500000,
    current: 1200000,
  },
  {
    title: "pendingMaintenance",
    value: "23",
    change: "-15%",
    icon: Wrench,
    color: "text-red-600",
    trend: "down",
    details: "8 requests completed this week",
    target: 15,
    current: 23,
  },
]

const additionalMetrics = [
  {
    title: "Occupancy Rate",
    value: "94.2%",
    change: "+2.1%",
    icon: Users,
    color: "text-purple-600",
    trend: "up",
  },
  {
    title: "Avg Response Time",
    value: "2.4h",
    change: "-0.8h",
    icon: AlertTriangle,
    color: "text-orange-600",
    trend: "down",
  },
]

export function DashboardOverview() {
  const { t } = useLocalization()
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})

  useEffect(() => {
    // Animate progress bars
    const timer = setTimeout(() => {
      const values: Record<string, number> = {}
      stats.forEach((stat) => {
        values[stat.title] = (stat.current / stat.target) * 100
      })
      setAnimatedValues(values)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title} className="property-card hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t(stat.title)}</CardTitle>
            <div className="flex items-center space-x-2">
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{stat.change}</span>{" "}
                from last month
              </p>
              <Badge variant="outline" className="text-xs">
                {stat.trend === "up" ? "↗" : "↘"}
              </Badge>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Progress to target</span>
                <span>{Math.round((stat.current / stat.target) * 100)}%</span>
              </div>
              <Progress value={animatedValues[stat.title] || 0} className="h-1.5" />
            </div>
            <p className="text-xs text-muted-foreground">{stat.details}</p>
          </CardContent>
        </Card>
      ))}

      {additionalMetrics.map((metric) => (
        <Card key={metric.title} className="property-card hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <div className="flex items-center space-x-2">
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
              {metric.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{metric.change}</span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
