"use client"
import { useThemeMode } from "@/hooks/useThemeMode"
import { Avatar, Badge, Divider, Image, Switch } from "antd"
import React from "react"
import { CgBell } from "react-icons/cg"
import { routes } from "@/constants/routes"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SideNav = () => {
  const { mode, setMode } = useThemeMode()
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light")
  }
  const pathname = usePathname()
  return (
    <aside className="w-full h-[100vh] bg-surface-container-low dark:bg-surface-container-low-dark py-[30px] space-y-[32px] shadow-md">
      <div className="flex flex-col gap-[16px] px-[16px]">
        {/* <Image
          src={mode === "light" ? "/sourcify.svg" : "/sourcify-dark.svg"}
          alt="logo"
          preview={false}
          width={117}
        /> */}
        <p className="font-semibold">DoraHack - DAO</p>
      </div>
      <div className="">
        <div className="p-[16px] flex gap-[28px] items-center">
          <Avatar
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg"
            size={52}
          ></Avatar>
          <Badge
            count={5}
            className="text-sm cursor-pointer"
            styles={{ indicator: { color: "#fff" } }}
          >
            <CgBell className="text-2xl" />
          </Badge>
        </div>
        <p className="p-[16px] py-[0px] text-on-surface-variant dark:text-on-surface-variant-dark">
          Welcome, John
        </p>
        <Divider className="border-[1.5px] mb-0" />
      </div>
      <div className="px-[16px] max-h-[400px] md:max-h-[45vh] xl:min-h-[62vh] overflow-y-auto">
        <nav className="space-y-[4px]">
          {routes.map((route, index) => {
            const active = route.path === pathname
            return (
              <Link
                href={route.path}
                key={index}
                className={`px-[8px] py-[12px] flex items-center gap-[8px] rounded-md text-on-surface dark:text-on-surface-dark ${
                  active
                    ? "bg-secondary-container dark:bg-secondary-container-dark text-on-secondary dark:text-on-secondary-dark"
                    : ""
                }`}
              >
                <div
                  className={`text-[24px] ${
                    active
                      ? "text-on-secondary dark:text-on-secondary-dark"
                      : "text-on-surface dark:text-on-surface-dark"
                  }`}
                >
                  {route.icon}
                </div>
                <p
                  className={`text-[14px] ${
                    active
                      ? "font-extrabold text-on-secondary dark:text-on-secondary-dark"
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
      <Divider className="border-[1.5px] mb-0" />
      <div className="px-[16px] pb-[20px]">
        <span className="text-[14px] mr-3">Dark theme</span>
        <Switch value={mode === "dark"} onChange={toggleMode} />
      </div>
    </aside>
  )
}
