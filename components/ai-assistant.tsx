"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bot,
  Send,
  Minimize2,
  Maximize2,
  X,
  Lightbulb,
  FileText,
  Calculator,
  Building2,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  Zap,
} from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  suggestions?: string[]
  data?: any
  charts?: any[]
}

const quickActions = [
  {
    icon: Building2,
    label: "Property Analysis",
    description: "Analyze property performance",
    prompt: "Analyze the performance of my top 5 properties",
    category: "analytics",
  },
  {
    icon: Calculator,
    label: "Financial Summary",
    description: "Get financial insights",
    prompt: "Show me this month's financial summary",
    category: "finance",
  },
  {
    icon: FileText,
    label: "Contract Review",
    description: "Review contract terms",
    prompt: "Review upcoming contract renewals",
    category: "legal",
  },
  {
    icon: Lightbulb,
    label: "Recommendations",
    description: "Get AI recommendations",
    prompt: "What are your recommendations for improving occupancy rates?",
    category: "insights",
  },
  {
    icon: AlertTriangle,
    label: "Risk Assessment",
    description: "Identify potential risks",
    prompt: "Assess risks across my property portfolio",
    category: "risk",
  },
  {
    icon: TrendingUp,
    label: "Market Trends",
    description: "Market analysis",
    prompt: "Show me current market trends and opportunities",
    category: "market",
  },
]

const mockResponses = {
  "property analysis": {
    content:
      "Based on your portfolio analysis, here are your top performing properties:\n\n🏆 **Lakeside Villas** - 22.1% ROI, 100% occupancy\n🥈 **Tech Hub Center** - 18.3% ROI, 75% occupancy\n🥉 **Metro Plaza Office** - 15.8% ROI, 100% occupancy\n\n**Key Insights:**\n• Luxury properties show highest ROI\n• Commercial properties maintain full occupancy\n• Consider similar investments in tech district",
    data: {
      topProperties: [
        { name: "Lakeside Villas", roi: 22.1, occupancy: 100, revenue: 120000 },
        { name: "Tech Hub Center", roi: 18.3, occupancy: 75, revenue: 95000 },
        { name: "Metro Plaza Office", roi: 15.8, occupancy: 100, revenue: 85000 },
      ],
    },
  },
  "financial summary": {
    content:
      "📊 **January 2024 Financial Summary**\n\n💰 **Total Revenue:** $452,000 (+8.2%)\n💸 **Total Expenses:** $168,000 (+3.1%)\n📈 **Net Profit:** $284,000 (+12.5%)\n🏠 **Portfolio Value:** $24.8M (+2.1%)\n\n**Highlights:**\n• Best performing month this quarter\n• Maintenance costs reduced by 15%\n• 3 new lease signings",
    data: {
      revenue: 452000,
      expenses: 168000,
      profit: 284000,
      portfolioValue: 24800000,
    },
  },
  "contract review": {
    content:
      "📋 **Contract Renewals Due (Next 60 Days)**\n\n⚠️ **Urgent (30 days):**\n• Riverside Complex - Unit 12A (Jan 25)\n• Green Valley - Unit 8B (Feb 1)\n\n📅 **Upcoming (60 days):**\n• Metro Plaza - Suite 201 (Feb 15)\n• Sunset Apartments - Unit 4B (Mar 1)\n\n**Recommendations:**\n• Start renewal negotiations immediately\n• Consider 5-8% rent increases based on market rates",
    data: {
      urgentRenewals: 2,
      upcomingRenewals: 2,
      totalValue: 185000,
    },
  },
  recommendations: {
    content:
      "🎯 **AI Recommendations for Occupancy Improvement**\n\n**Immediate Actions:**\n1. **Tech Hub Center** (75% occupancy)\n   • Reduce rent by 5% temporarily\n   • Offer 2 months free for 2-year leases\n   • Highlight tech amenities in marketing\n\n2. **Riverside Complex** (88% occupancy)\n   • Upgrade common areas\n   • Add co-working spaces\n   • Partner with local businesses\n\n**Expected Impact:** +12% occupancy within 3 months",
    data: {
      potentialIncrease: 12,
      estimatedRevenue: 45000,
      timeframe: "3 months",
    },
  },
  "risk assessment": {
    content:
      "⚠️ **Portfolio Risk Assessment**\n\n**High Risk Areas:**\n🔴 **Market Risk** (Score: 78/100)\n• Rising interest rates affecting property values\n• Increased competition in tech district\n\n🟡 **Operational Risk** (Score: 85/100)\n• Aging HVAC systems in 3 properties\n• Key tenant concentration in commercial properties\n\n**Mitigation Strategies:**\n• Diversify tenant base\n• Schedule preventive maintenance\n• Build 6-month cash reserves",
    data: {
      overallRisk: 82,
      highRiskProperties: 2,
      recommendedActions: 5,
    },
  },
  "market trends": {
    content:
      "📈 **Market Trends & Opportunities**\n\n**Current Market:**\n• Average rent growth: +6.2% YoY\n• Vacancy rates: 4.8% (down from 6.1%)\n• Cap rates: 5.2% (stable)\n\n**Emerging Opportunities:**\n🏢 **Tech District Expansion**\n• 15% rent premium potential\n• High demand for flexible office space\n\n🏠 **Suburban Residential**\n• Remote work driving demand\n• 8-12% appreciation expected\n\n**Investment Recommendation:** Focus on tech-adjacent properties",
    data: {
      rentGrowth: 6.2,
      vacancyRate: 4.8,
      capRate: 5.2,
      opportunities: 3,
    },
  },
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "👋 Hello! I'm your Hometinuum AI Assistant. I can help you with:\n\n🏢 **Property Analysis** - Performance metrics and insights\n💰 **Financial Planning** - Revenue optimization and forecasting\n📋 **Contract Management** - Renewal tracking and recommendations\n⚠️ **Risk Assessment** - Portfolio risk analysis\n📊 **Market Intelligence** - Trends and opportunities\n\nWhat would you like to explore today?",
      timestamp: new Date(),
      suggestions: [
        "Analyze my property performance",
        "Show financial summary",
        "Check contract renewals",
        "Assess portfolio risks",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messageIdCounter, setMessageIdCounter] = useState(2)

  const generateResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase()

    // Find matching response
    let response = mockResponses["recommendations"] // default
    for (const [key, value] of Object.entries(mockResponses)) {
      if (lowerInput.includes(key.replace(" ", ""))) {
        response = value
        break
      }
    }

    const id = messageIdCounter.toString()
    setMessageIdCounter((prev) => prev + 1)
    return {
      id,
      type: "assistant",
      content: response.content,
      timestamp: new Date(),
      data: response.data,
      suggestions: [
        "Tell me more about this",
        "Show detailed breakdown",
        "Export this data",
        "Set up alerts",
        "Compare with last month",
        "Generate report",
      ],
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return
    const id = messageIdCounter.toString()
    setMessageIdCounter((prev) => prev + 1)
    const userMessage: Message = {
      id,
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateResponse(inputValue)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickAction = (prompt: string) => {
    setInputValue(prompt)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          size="icon"
        >
          <Bot className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    )
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? "w-80 h-16" : "w-96 h-[700px]"
      }`}
    >
      <Card className="h-full shadow-2xl border-2 bg-gradient-to-br from-white to-blue-50/30">
        <CardHeader className="pb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Hometinuum AI Assistant</CardTitle>
                <CardDescription className="text-xs text-blue-100">
                  {isTyping ? "Analyzing data..." : "Ready to help"}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-full p-0">
            {/* Quick Actions */}
            <div className="p-4 border-b bg-gray-50/50">
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Zap className="h-4 w-4 mr-2 text-blue-600" />
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.slice(0, 4).map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="h-auto p-3 flex flex-col items-start text-left hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    onClick={() => handleQuickAction(action.prompt)}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <action.icon className="h-3 w-3 text-blue-600" />
                      <span className="text-xs font-medium">{action.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{action.description}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-lg p-3 ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-white border shadow-sm"
                      }`}
                    >
                      {message.type === "assistant" && (
                        <div className="flex items-center space-x-2 mb-2">
                          <Bot className="h-4 w-4 text-blue-600" />
                          <span className="text-xs font-medium text-blue-600">AI Assistant</span>
                        </div>
                      )}

                      <div className="text-sm whitespace-pre-line">{message.content}</div>

                      {/* Data Visualization */}
                      {message.data && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {Object.entries(message.data).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize text-muted-foreground">
                                  {key.replace(/([A-Z])/g, " $1").trim()}:
                                </span>
                                <span className="font-medium">
                                  {typeof value === "number" && value > 1000 ? `$${(value / 1000).toFixed(0)}K` : value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-xs opacity-70 mt-2">{message.timestamp.toLocaleTimeString()}</p>

                      {message.suggestions && (
                        <div className="mt-3 space-y-1">
                          <p className="text-xs opacity-70">Quick actions:</p>
                          <div className="flex flex-wrap gap-1">
                            {message.suggestions.slice(0, 3).map((suggestion, index) => (
                              <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className="h-6 text-xs px-2 bg-blue-50 hover:bg-blue-100 text-blue-700"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border shadow-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-blue-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about properties, finances, contracts..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isTyping && handleSendMessage()}
                  className="text-sm border-gray-200 focus:border-blue-400"
                  disabled={isTyping}
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    AI Powered
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    Online
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Press Enter to send</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}