"use client"
import { Button, Input, Popover } from "antd"
import React from "react"
import { RiSearch2Line } from "react-icons/ri"
import { MdAddBox } from "react-icons/md"
import { FaCaretDown } from "react-icons/fa"
import Link from "next/link"

export const DesktopHeader = () => {
  return (
    <div className="sticky top-0 left-[0] z-[20] bg-surface dark:bg-surface-dark py-[6px] pb-[12px] md:block hidden">
      <header className="flex w-[100%] items-center justify-between ">
        <p className="text-[18px] md:text-[25px]">Proposals</p>
        <Button
          icon={<MdAddBox size={20} />}
          className="h-[45px] font-semibold"
          type="primary"
        >
          <span>Create Proposal</span>
        </Button>
      </header>
    </div>
  )
}
