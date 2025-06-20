"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "ar"
type Direction = "ltr" | "rtl"

interface LocalizationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  direction: Direction
  setDirection: (dir: Direction) => void
  t: (key: string) => string
}

const LocalizationContext = createContext<LocalizationContextType | null>(null)

const translations = {
  en: {
    dashboard: "Dashboard",
    properties: "Properties",
    contracts: "Contracts & Legal",
    finance: "Finance & Accounting",
    maintenance: "Maintenance & Services",
    billing: "Billing & Invoicing",
    disputes: "Disputes",
    tenants: "Tenants",
    welcome: "Welcome back to your property intelligence center",
    totalProperties: "Total Properties",
    activeContracts: "Active Contracts",
    monthlyRevenue: "Monthly Revenue",
    pendingMaintenance: "Pending Maintenance",
  },
  ar: {
    dashboard: "لوحة التحكم",
    properties: "العقارات",
    contracts: "العقود والقانونية",
    finance: "المالية والمحاسبة",
    maintenance: "الصيانة والخدمات",
    billing: "الفواتير والتحصيل",
    disputes: "النزاعات",
    tenants: "المستأجرين",
    welcome: "مرحباً بك في مركز ذكاء العقارات",
    totalProperties: "إجمالي العقارات",
    activeContracts: "العقود النشطة",
    monthlyRevenue: "الإيرادات الشهرية",
    pendingMaintenance: "الصيانة المعلقة",
  },
}

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [direction, setDirection] = useState<Direction>("ltr")

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction)
    document.documentElement.setAttribute("lang", language)
  }, [direction, language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LocalizationContext.Provider
      value={{
        language,
        setLanguage,
        direction,
        setDirection,
        t,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}

export function useLocalization() {
  const context = useContext(LocalizationContext)
  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider")
  }
  return context
}
