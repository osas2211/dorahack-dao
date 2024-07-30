"use client"
import React, { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1440px] mx-auto px-[16px]">{children}</div>
}
