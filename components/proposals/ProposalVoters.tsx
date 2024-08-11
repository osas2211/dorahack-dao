"use client"
import { Avatar } from "antd"
import React from "react"
import { BiCheck, BiUser } from "react-icons/bi"
import { CgClose } from "react-icons/cg"

export const ProposalVoters = () => {
  return (
    <div className="ms:text-[16px] text-sm">
      <p>Votes</p>
      <div className="grid md:grid-cols-[60%,20%,20%] grid-cols-[80%,20%] gap-2 text-sm mt-4 mb-5">
        <p>Voter</p>
        <p>Vote</p>
        <p className="md:block hidden">Voting power</p>
      </div>
      <div className="space-y-5">
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="yes"
          voting_power="0.0004543%"
          name="Nikita.eth"
        />
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="yes"
          voting_power="0.543%"
          name="Nikita.eth"
        />
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="no"
          voting_power="0.0004543%"
          name="Nikita.eth"
        />
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="yes"
          voting_power="0.04543%"
          name="Nikita.eth"
        />
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="no"
          voting_power="0.0003%"
          name="Nikita.eth"
        />
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="yes"
          voting_power="0.004543%"
          name="Nikita.eth"
        />
        <Voter
          icon="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg"
          vote="yes"
          voting_power="0.01304543%"
          name="Nikita.eth"
        />
      </div>
    </div>
  )
}

const Voter = ({
  icon,
  vote,
  voting_power,
  name,
}: {
  icon: string
  vote: "yes" | "no"
  voting_power: string
  name: string
}) => {
  return (
    <div>
      <div className="grid md:grid-cols-[60%,20%,20%] grid-cols-[80%,20%] gap-2">
        <div>
          <div className="flex items-center gap-2 text-on-surface dark:text-on-surface-dark">
            <div>
              <Avatar
                size={35}
                src={icon}
                className="bg-tertiary-container text-primary"
              >
                <BiUser />
              </Avatar>
            </div>
            <div>
              <p className="text-sm leading-snug">
                <span className="">{name}</span>
              </p>
            </div>
          </div>
        </div>

        {vote === "yes" ? (
          <div className="text-success flex items-center h-[40px]">
            <div>
              Yes <BiCheck className="inline" size={20} />
            </div>
          </div>
        ) : (
          <div className="text-error flex items-center h-[40px]">
            <div>
              No <CgClose className="inline" size={18} />
            </div>
          </div>
        )}
        <div className="hidden items-center h-[40px] md:flex">
          <p>{voting_power}</p>
        </div>
      </div>
    </div>
  )
}
