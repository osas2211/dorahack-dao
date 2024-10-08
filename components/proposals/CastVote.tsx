"use client"
import { Button } from "antd"
import React, { useState } from "react"
import { CountdownTimer } from "../utilities/CountdownTimer"

export const CastVote = () => {
  const [choice, setChoice] = useState("")
  const votes = ["yes", "no", "abstain"]
  return (
    <div className="text-sm">
      <p className="font-semibold">Cast your vote</p>
      <div className="mt-5 space-y-2">
        {votes.map((vote, index) => {
          const isChoice = choice === vote
          return (
            <div
              onClick={() => setChoice(vote)}
              key={index}
              className={`${
                isChoice
                  ? "bg-secondary/10 dark:bg-secondary-dark/15 text-secondary dark:text-secondary-dark"
                  : "bg-surface-container-low dark:bg-surface-container-low-dark"
              }  cursor-pointer border-[1px] border-outline-variant/30 dark:border-outline-variant-dark rounded-lg p-4 py-3`}
            >
              <p
                className={`${
                  isChoice ? "font-semibold text-[16px]" : ""
                } capitalize`}
              >
                {vote}
              </p>
            </div>
          )
        })}
      </div>
      <div className="mt-4">
        <Button
          className="h-[45px] rounded-lg w-full border-0"
          type="primary"
          disabled={!choice}
        >
          Vote
        </Button>
      </div>
      <div className="text-sm mt-3">
        <CountdownTimer targetDate="2024-08-12T00:59:00.910Z" />
      </div>
    </div>
  )
}
