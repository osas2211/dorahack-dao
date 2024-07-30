"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { GoArrowLeft } from "react-icons/go"

export const GoBack = ({ hideText }: { hideText?: boolean }) => {
  const router = useRouter()
  return (
    <div
      className="inline-flex items-center gap-[8px] bg-surface-container-high dark:bg-surface-container-high-dark rounded-[8px] py-[12px] px-[16px] cursor-pointer"
      onClick={router.back}
    >
      <GoArrowLeft className="font-[600] text-[16px]" />
      {!hideText && <span className="font-[600] text-[16px]">Back</span>}
    </div>
  )
}
