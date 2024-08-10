import { ProposalsDashboard } from "@/components/proposals/Proposals"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "DoraHack - DAO | Proposals",
  description: "DoraHack - DAO",
}

const ProposalsPage = () => {
  return (
    <div>
      <ProposalsDashboard />
    </div>
  )
}

export default ProposalsPage
