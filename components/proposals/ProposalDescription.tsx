"use client"
import { proposals } from "@/db/proposals"
import { useParams } from "next/navigation"
import React from "react"
import { Status } from "./Status"
import { statusT } from "@/interface/proposals"
import { Avatar } from "antd"
import moment from "moment"

export const ProposalDescription = () => {
  const { proposal_id } = useParams()
  const proposal = proposals.find(({ id }) => proposal_id === id)
  return (
    <div>
      <div>
        <Status type={proposal?.status as statusT} size="small" />
        <p className="my-2 mb-3 lg:text-2xl text-lg font-semibold">
          TempCheck: Choosing a team to develop wstETH bridge and BNB
        </p>
      </div>
      <div className="flex items-center gap-2 text-on-surface dark:text-on-surface-dark">
        <div>
          <Avatar
            size={42}
            src={proposal?.picture}
            className="bg-tertiary-container text-primary"
          >
            <span>{proposal?.name[0]}</span>
          </Avatar>
        </div>
        <div>
          <p className="text-sm leading-snug">
            <span className="font-semibold">{proposal?.name}</span> created this
            proposal.
          </p>
          <p className="text-[11px] leading-snug -mt-1">
            <span className="font-[600]">Created: </span>
            {moment(proposal?.date_submitted).format("LL")}
          </p>
        </div>
      </div>
      <div className="my-10">
        <p className="opacity-80 md:text-[15px] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo fuga
          nam quod dolor earum aperiam autem illum nihil repellat consequatur
          recusandae facilis, laborum eveniet. Omnis aperiam expedita nesciunt
          fuga nemo sapiente tenetur molestiae impedit ipsum ea dignissimos quas
          laborum officiis nihil, nisi rem dolorum repellendus ducimus libero?
          Ipsa inventore asperiores, aut consequatur architecto optio molestias
          alias sint ullam nemo? Exercitationem inventore sit autem quaerat
          quidem reprehenderit fuga, asperiores ipsum molestiae!
        </p>
      </div>
      <div className="md:text-[15px] text-sm">
        <p className="opacity-90">Voting conditions</p>
        <p className="opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo fuga
          nam quod dolor earum aperiam autem illum nihil repellat consequatur
          recusandae facilis, laborum eveniet. Omnis aperiam expedita nesciunt
          fuga nemo sapiente tenetur molestiae impedit ipsum ea dignissimos quas
        </p>
        <ol className="list-decimal px-6 my-2 opacity-70">
          <li>One</li>
          <li>Two</li>
        </ol>
      </div>
    </div>
  )
}
