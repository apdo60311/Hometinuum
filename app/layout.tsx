import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LocalizationProvider } from "@/components/localization-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.E.P.I.O.S - Real Estate & Property Intelligence OS",
  description: "Advanced multi-tenant SaaS platform for real estate management",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
