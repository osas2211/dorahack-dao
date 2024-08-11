"use client"
import { Avatar, Button, Input, Popover } from "antd"
import React from "react"
import { RiSearch2Line } from "react-icons/ri"
import { MdAddBox } from "react-icons/md"
import { FaCaretDown } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiCheckDouble, BiUser } from "react-icons/bi"

export const DesktopHeader = () => {
  const pathname = usePathname()
  const title = pathname.includes("/proposal")
    ? "Proposals"
    : pathname.includes("/dashboard")
    ? "Dashboard"
    : ""
  return (
    <div className="sticky top-1 left-[0] z-[20] bg-surface dark:bg-surface-dark py-[6px] pb-[12px] md:block hidden">
      <header className="flex w-[100%] items-center justify-between ">
        <p className="text-[18px] md:text-[20px]">{title}</p>
        <div className="flex items-center gap-5">
          <div>
            <Link
              href={"/proposals/create"}
              className="bg-secondary/5 dark:bg-secondary-dark/10 text-secondary dark:text-secondary-dark h-[45px] rounded-lg px-6 flex items-center justify-center text-sm"
            >
              + Create proposal
            </Link>
          </div>
          <div className="w-[180px] bg-white dark:bg-black/30 h-[45px] flex items-center gap-3 px-2 rounded-lg shadow-black/5 shadow-lg">
            <Avatar
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/148.jpg"
              size={35}
            >
              {<BiUser />}
            </Avatar>
            <p className="text-sm">Muhammed</p>
            <BiCheckDouble className="text-secondary dark:text-secondary-dark" />
          </div>
        </div>
      </header>
    </div>
  )
}
