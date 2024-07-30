"use client"
import { statusT } from "@/interface/proposals"
import React from "react"

const statusColors: Record<statusT, string> = {
  pending: "#F7E7B2",
  completed: "#B3E9B2",
  rejected: "#FAA6A6",
}

export const Status = ({ type }: { type: statusT }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="h-[16px] w-[16px] rounded-full"
        style={{ background: statusColors[type] }}
      />
      <p className="font-medium capitalize">{type}</p>
    </div>
  )
}
