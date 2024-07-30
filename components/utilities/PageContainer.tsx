"use client"
import React from "react"
import { SideNav } from "./SideNav"
import { motion } from "framer-motion"
import { MobileHeader } from "./MobileHeader"
import { DesktopHeader } from "./DesktopHeader"
import { usePathname } from "next/navigation"

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="grid md:grid-cols-[200px,auto] xl:grid-cols-[250px,auto] min-h-screen relative"
    >
      <div className="md:block hidden fixed top-0 left-0 h-[100vh] xl:w-[250px] z-[30]">
        <SideNav />
      </div>
      <div className="md:block hidden"></div>
      <div className="pb-[32px] pt-[16px] px-[16px] md:px-[32px] xl:max-w-[1640px] md:max-w-[1000px] w-full mx-auto relative">
        <MobileHeader />
        <DesktopHeader />
        <div className="mt-[100px] md:mt-[32px]">{children}</div>
      </div>
    </motion.div>
  )
}
