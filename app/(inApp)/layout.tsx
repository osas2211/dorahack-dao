import { PageContainer } from "@/components/utilities/PageContainer"
import { SideNav } from "@/components/utilities/SideNav"
import type { Metadata } from "next"

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
    <main>
      <PageContainer> {children}</PageContainer>
    </main>
  )
}
