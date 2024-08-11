"use client"
import { Input } from "antd"
import React from "react"
import { RiSearch2Line } from "react-icons/ri"
import { CiBoxList } from "react-icons/ci"
import { CiGrid41 } from "react-icons/ci"
import { LiaPollSolid } from "react-icons/lia"
import { MdOutlineAdd } from "react-icons/md"
import { ProposalsTable } from "./ProposalTable"
import { proposals } from "@/db/proposals"
import Link from "next/link"

export const ProposalsDashboard = () => {
  return (
    <div className="relative">
      <div className="sticky w-full top-12 md:top-8 left-0 z-[10] bg-surface dark:bg-surface-dark">
        <p className="mb-4">All Proposals</p>
        <div className="grid xl:grid-cols-[65%,1fr,1fr,1fr] rounded-md lg:grid-cols-[50%,1fr,1fr,1fr] grid-cols-2 lg:gap-0 gap-1 lg:h-[56px] h-auto border-outline-variant dark:border-outline-variant-dark lg:border-[1px]">
          <div className="col-span-2 lg:col-span-1 lg:mb-0">
            <Input
              className="w-full lg:h-full h-[50px] focus:outline-none focus:border-0 outline-none lg:border-none border-outline-variant dark:border-outline-variant-dark"
              prefix={<RiSearch2Line size={25} />}
              placeholder="Search proposals by title or name of creator"
            />
          </div>
          <button className="rounded-md lg:rounded-none lg:p-0 p-4 lg:border-y-0 border-[1px] border-r-[1px] border-l-[1px] h-full w-full border-outline-variant dark:border-outline-variant-dark flex items-center gap-2 justify-center hover:bg-surface-container-high">
            <CiBoxList size={22} />
            <span>List view</span>
          </button>
          <button className="rounded-md lg:rounded-none lg:p-0 p-4 lg:border-y-0 lg:border-l-0 border-[1px] border-r-[1px] h-full w-full border-outline-variant dark:border-outline-variant-dark flex items-center gap-2 justify-center hover:bg-surface-container-high">
            <CiGrid41 size={22} />
            <span>Grid view</span>
          </button>

          <Link href={"/proposals/create"}>
            <button className="rounded-md lg:rounded-none lg:p-0 p-4 lg:border-y-0 lg:border-x-0 border-[1px] h-full w-full border-outline-variant dark:border-outline-variant-dark flex items-center gap-2 justify-center hover:bg-surface-container-high">
              <MdOutlineAdd size={22} />
              <span>Create</span>
            </button>
          </Link>
        </div>
        <div></div>
      </div>
      <ProposalsTable data={proposals} />
    </div>
  )
}
