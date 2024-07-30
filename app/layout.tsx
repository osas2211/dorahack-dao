import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/utilities/ThemeProvider"
import { AntProvider } from "@/components/utilities/AntProvider"

export const metadata: Metadata = {
  title: "DoraHack - DAO",
  description: "DoraHack - DAO",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ThemeProvider>
        <AntProvider>{children}</AntProvider>
      </ThemeProvider>
    </>
  )
}
