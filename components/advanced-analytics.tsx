"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { TrendingUp, DollarSign, Building2, Users, Download, Filter, RefreshCw } from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 125000, expenses: 45000, profit: 80000, occupancy: 92 },
  { month: "Feb", revenue: 132000, expenses: 48000, profit: 84000, occupancy: 94 },
  { month: "Mar", revenue: 128000, expenses: 46000, profit: 82000, occupancy: 91 },
  { month: "Apr", revenue: 145000, expenses: 52000, profit: 93000, occupancy: 96 },
  { month: "May", revenue: 158000, expenses: 55000, profit: 103000, occupancy: 98 },
  { month: "Jun", revenue: 162000, expenses: 58000, profit: 104000, occupancy: 97 },
  { month: "Jul", revenue: 168000, expenses: 60000, profit: 108000, occupancy: 99 },
  { month: "Aug", revenue: 175000, expenses: 62000, profit: 113000, occupancy: 98 },
  { month: "Sep", revenue: 182000, expenses: 65000, profit: 117000, occupancy: 97 },
  { month: "Oct", revenue: 189000, expenses: 67000, profit: 122000, occupancy: 99 },
  { month: "Nov", revenue: 195000, expenses: 70000, profit: 125000, occupancy: 98 },
  { month: "Dec", revenue: 201000, expenses: 72000, profit: 129000, occupancy: 99 },
]

const propertyPerformance = [
  { name: "Sunset Apartments", revenue: 48000, occupancy: 92, roi: 12.5, maintenance: 2300 },
  { name: "Metro Plaza", revenue: 85000, occupancy: 100, roi: 15.8, maintenance: 4200 },
  { name: "Riverside Complex", revenue: 72000, occupancy: 88, roi: 11.2, maintenance: 3800 },
  { name: "Green Valley", revenue: 32000, occupancy: 94, roi: 9.8, maintenance: 1500 },
  { name: "Tech Hub Center", revenue: 95000, occupancy: 75, roi: 18.3, maintenance: 5600 },
  { name: "Lakeside Villas", revenue: 120000, occupancy: 100, roi: 22.1, maintenance: 2800 },
]

const marketTrends = [
  { quarter: "Q1 2023", marketRate: 2800, ourRate: 2650, demand: 85 },
  { quarter: "Q2 2023", marketRate: 2900, ourRate: 2750, demand: 88 },
  { quarter: "Q3 2023", marketRate: 3000, ourRate: 2850, demand: 92 },
  { quarter: "Q4 2023", marketRate: 3100, ourRate: 2950, demand: 95 },
  { quarter: "Q1 2024", marketRate: 3200, ourRate: 3050, demand: 97 },
  { quarter: "Q2 2024", marketRate: 3300, ourRate: 3150, demand: 94 },
]

const tenantAnalytics = [
  { segment: "Young Professionals", count: 45, satisfaction: 4.2, retention: 89 },
  { segment: "Families", count: 32, satisfaction: 4.5, retention: 94 },
  { segment: "Students", count: 28, satisfaction: 3.8, retention: 76 },
  { segment: "Seniors", count: 18, satisfaction: 4.7, retention: 97 },
  { segment: "Corporate", count: 12, satisfaction: 4.1, retention: 85 },
]

const riskMetrics = [
  { category: "Financial", score: 85, trend: "stable" },
  { category: "Operational", score: 92, trend: "improving" },
  { category: "Market", score: 78, trend: "declining" },
  { category: "Regulatory", score: 88, trend: "stable" },
  { category: "Environmental", score: 91, trend: "improving" },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

export function AdvancedAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Advanced Analytics</h2>
          <p className="text-muted-foreground">Deep insights into your property portfolio performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="risk">Risk</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24.8M</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+8.2%</span> from last quarter
                </p>
                <Progress value={82} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Operating Income</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1.89M</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12.5%</span> YoY growth
                </p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14.8%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+2.1%</span> above market
                </p>
                <Progress value={88} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tenant Satisfaction</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.3/5</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+0.2</span> from last survey
                </p>
                <Progress value={86} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend Analysis</CardTitle>
                <CardDescription>12-month revenue, expenses, and profit overview</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stackId="2"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Occupancy vs Profit Correlation</CardTitle>
                <CardDescription>Relationship between occupancy rates and profitability</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={revenueData}>
                    <CartesianGrid />
                    <XAxis dataKey="occupancy" name="Occupancy %" />
                    <YAxis dataKey="profit" name="Profit $" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter dataKey="profit" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Financial Performance</CardTitle>
                <CardDescription>Revenue, expenses, and net profit trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} name="Revenue" />
                    <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={2} name="Expenses" />
                    <Line type="monotone" dataKey="profit" stroke="#ffc658" strokeWidth={2} name="Profit" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cash Flow Analysis</CardTitle>
                <CardDescription>Monthly cash inflows and outflows</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#8884d8" name="Inflow" />
                    <Bar dataKey="expenses" fill="#82ca9d" name="Outflow" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="properties" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Property Performance Matrix</CardTitle>
              <CardDescription>Comprehensive view of all property metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {propertyPerformance.map((property, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{property.name}</h4>
                      <p className="text-sm text-muted-foreground">Property {index + 1}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Revenue</p>
                      <p className="text-lg font-bold text-green-600">${property.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Occupancy</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={property.occupancy} className="flex-1" />
                        <span className="text-sm font-bold">{property.occupancy}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">ROI</p>
                      <p className="text-lg font-bold text-blue-600">{property.roi}%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Maintenance</p>
                      <p className="text-lg font-bold text-orange-600">${property.maintenance.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Market Rate Comparison</CardTitle>
                <CardDescription>Our rates vs market average</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={marketTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="marketRate" stroke="#8884d8" strokeWidth={2} name="Market Rate" />
                    <Line type="monotone" dataKey="ourRate" stroke="#82ca9d" strokeWidth={2} name="Our Rate" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demand Trends</CardTitle>
                <CardDescription>Market demand indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={marketTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="demand" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tenants" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tenant Segmentation</CardTitle>
                <CardDescription>Distribution by tenant type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tenantAnalytics}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ segment, percent }) => `${segment} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {tenantAnalytics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tenant Satisfaction & Retention</CardTitle>
                <CardDescription>Satisfaction scores and retention rates by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tenantAnalytics.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{segment.segment}</span>
                        <Badge variant="outline">{segment.count} tenants</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Satisfaction</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={segment.satisfaction * 20} className="flex-1" />
                            <span className="text-sm font-bold">{segment.satisfaction}/5</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Retention</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={segment.retention} className="flex-1" />
                            <span className="text-sm font-bold">{segment.retention}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment Matrix</CardTitle>
                <CardDescription>Multi-dimensional risk analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={riskMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="category" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Risk Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Trends</CardTitle>
                <CardDescription>Risk score changes over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskMetrics.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="font-medium">{risk.category}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Progress value={risk.score} className="w-20" />
                        <span className="font-bold">{risk.score}</span>
                        <Badge
                          variant={
                            risk.trend === "improving"
                              ? "default"
                              : risk.trend === "stable"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {risk.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
