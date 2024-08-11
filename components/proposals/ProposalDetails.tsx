"use client"
import React from "react"
import { ProposalDescription } from "./ProposalDescription"
import { ProposalVoters } from "./ProposalVoters"
import { CastVote } from "./CastVote"
import { GoBack } from "../utilities/GoBack"

export const ProposalDetails = () => {
  return (
    <div>
      <GoBack />
      <div className="grid md:grid-cols-[70%,30%] gap-5 mt-2">
        <div className="w-full space-y-5">
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm ">
            <ProposalDescription />
          </div>

          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm md:block hidden">
            {/* Shows In Desktop */}
            <ProposalVoters />
          </div>
        </div>
        <div className="md:sticky md:h-[70vh] md:top-[70px] md:right-0 w-full">
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-lg p-4 md:p-6 shadow-sm">
            <CastVote />
          </div>
        </div>
        <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm md:hidden">
          {/* Shows In Mobile */}
          <ProposalVoters />
        </div>
      </div>
    </div>
  )
}
