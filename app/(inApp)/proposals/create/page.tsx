"use client"
import { CreateProposal } from "@/components/proposals/CreateProposal"
import { GoBack } from "@/components/utilities/GoBack"
import React from "react"

const CreateProposalPage = () => {
  return (
    <div className="max-w-[650px] mx-auto">
      <GoBack />
      <div className="my-3">
        <CreateProposal />
      </div>
    </div>
  )
}

export default CreateProposalPage
