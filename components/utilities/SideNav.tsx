"use client"
import { useThemeMode } from "@/hooks/useThemeMode"
import { Avatar, Badge, Divider, Image, Switch } from "antd"
import React, { useEffect, useState } from "react"
import { CgBell } from "react-icons/cg"
import { routes } from "@/constants/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideNav = () => {
  const { mode, setMode } = useThemeMode()
  const [modeState, setModeState] = useState<"light" | "dark">("light")
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light")
    setModeState(mode === "light" ? "dark" : "light")
  }
  const pathname = usePathname()
  useEffect(() => {
    if (mode) {
      setModeState(mode)
    }
  }, [mode])
  return (
    <aside className="w-full h-[100vh] bg-surface-container-low dark:bg-surface-container-low-dark py-[30px] space-y-[32px]">
      <div className="flex flex-col gap-[16px] px-[16px]">
        <div className="flex items-center gap-3">
          <Avatar src="/fuse.png" size={50} />
          <p className="font-normal">Fuse - DAO</p>
        </div>
      </div>
      <div className="">
        <Divider className="border-[1px] mb-0" />
      </div>
      <div className="max-h-[400px] md:max-h-[55vh] xl:min-h-[72vh] overflow-y-auto">
        <nav className="space-y-[4px]">
          {routes.map((route, index) => {
            const active = pathname.includes(route.path)
            return (
              <Link
                href={route.path}
                key={index}
                className={`px-6 py-[16px] flex items-center gap-[8px] text-on-surface dark:text-on-surface-dark ${
                  active
                    ? "bg-gradient-to-r from-secondary/15 to-secondary/0 dark:from-secondary-dark/20 dark:to-secondary-dark/0 border-l-[5px] border-secondary dark:border-secondary-dark"
                    : "pl-[30px]"
                }`}
              >
                <div
                  className={`text-[24px] ${
                    active
                      ? "text-secondary dark:text-secondary-dark"
                      : "text-on-surface dark:text-on-surface-dark"
                  }`}
                >
                  {route.icon}
                </div>
                <p
                  className={`text-[14px] ${
                    active
                      ? "font-extrabold text-secondary dark:text-secondary-dark"
                      : "text-on-surface dark:text-on-surface-dark"
                  }`}
                >
                  {route.name}
                </p>
              </Link>
            )
          })}
        </nav>
      </div>
      <Divider className="border-[1px] mb-0" />
      <div className="px-[16px] pb-[20px]">
        <span className="text-[14px] mr-3">Dark theme</span>
        <Switch value={modeState === "dark"} onChange={toggleMode} />
      </div>
    </aside>
  )
}
