"use client"
import { useThemeMode } from "@/hooks/useThemeMode"
import React, { useEffect } from "react"
import { Inter, Poppins, Space_Grotesk } from "next/font/google"
const font_family = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeMode()
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark")
    document.querySelector("html")?.classList.add(mode)
  }, [mode])
  return (
    <>
      <html lang="en" className="dark">
        <body
          className={`${font_family.className} bg-surface dark:bg-surface-dark`}
        >
          <main className=" text-on-surface dark:text-on-surface-dark min-h-[100vh]">
            {children}
          </main>
        </body>
      </html>
    </>
  )
}
