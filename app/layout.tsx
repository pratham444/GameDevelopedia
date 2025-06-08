import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CursorTrail } from "@/components/effects/cursor-trail"
import { TouchRipple } from "@/components/effects/touch-ripple"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameDevelopedia - Game Development Tutorials & Services",
  description:
    "Professional game development tutorials, mobile games, internships, and digital services. Learn game development with expert guidance.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  keywords: "game development, tutorials, mobile games, internships, unity, unreal engine",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-deep-black text-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CursorTrail />
          <TouchRipple />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
