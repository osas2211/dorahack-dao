"use client"
import { Alert, Button, Input } from "antd"
import React, { useState } from "react"

export const FundAllocation = () => {
  const [allocation, setAllocation] = useState("")
  return (
    <div className="text-sm">
      <p className="font-semibold">Invest in strategy</p>
      <div>
        <Alert
          type="success"
          style={{ padding: 12 }}
          description={
            <p className="text-xs">
              Voting has ended and proposal passed approval stage
            </p>
          }
        />
      </div>
      <div className="mt-5">
        <p className="text-sm">Allocate funds</p>
        <Input
          className="w-full bg-transparent border-outline-variant dark:border-outline-variant-dark mb-2 h-[45px]"
          type="number"
          placeholder="Allocate funds"
          onChange={(e) => setAllocation(e.target.value)}
        />
        <Button type="primary" className="w-full" disabled={!allocation}>
          Allocate funds
        </Button>
      </div>
    </div>
  )
}
