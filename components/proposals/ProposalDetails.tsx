"use client"
import React from "react"
import { ProposalDescription } from "./ProposalDescription"
import { ProposalVoters } from "./ProposalVoters"
import { CastVote } from "./CastVote"
import { GoBack } from "../utilities/GoBack"
import { VoteStats } from "./VoteStats"
import { InvestmentOptions } from "./InvestmentOptions"
import { CommentSection } from "./CommentSection"
import { useParams } from "next/navigation"
import { proposals } from "@/db/proposals"
import { FundAllocation } from "./FundAllocation"

export const ProposalDetails = () => {
  const { proposal_id } = useParams()
  const proposal = proposals.find((proposal) => proposal.id === proposal_id)
  const status = proposal?.status
  return (
    <div>
      <GoBack />
      <div className="grid md:grid-cols-[70%,30%] gap-5 mt-2">
        <div className="w-full space-y-5">
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm ">
            <ProposalDescription />
          </div>
          <div className="md:block hidden space-y-5">
            {/* Shows In Desktop */}
            <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm">
              <InvestmentOptions />
            </div>
            <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm">
              <CommentSection />
            </div>
            <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm">
              <ProposalVoters />
            </div>
          </div>
        </div>
        <div className="md:sticky md:h-[70vh] md:top-[70px] md:right-0 w-full space-y-5">
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-lg p-4 md:p-6 shadow-sm">
            {status === "pending" ? <CastVote /> : <FundAllocation />}
          </div>
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-lg shadow-sm">
            <VoteStats />
          </div>
        </div>
        <div className="md:hidden space-y-5">
          {/* Shows In Mobile */}
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm">
            <InvestmentOptions />
          </div>
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm">
            <CommentSection />
          </div>
          <div className="w-full bg-white dark:bg-surface-container-low-dark rounded-xl p-4 md:p-6 shadow-sm">
            <ProposalVoters />
          </div>
        </div>
      </div>
    </div>
  )
}
