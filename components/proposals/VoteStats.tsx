"use client"
import { Alert, Divider, Tooltip } from "antd"
import React from "react"
import { ImInfo } from "react-icons/im"

export const VoteStats = () => {
  const total_votes = 14000
  const votesPercentage = {
    yes: 73,
    no: 10,
    abstain: 17,
  }
  const quorom = 70
  const convertToThousand = (value: number): string => {
    return `${Number(value / 1000).toFixed(1)}k`
  }
  return (
    <div className="text-sm">
      <div className="p-4 md:p-6">
        <p className="font-semibold">Current votes</p>
        <div className="my-4 mb-6">
          <div className="flex gap-1 h-[10px] rounded-full shadow-md">
            <div
              className="bg-success dark:bg-success-dark rounded-l-full"
              style={{ width: `${votesPercentage.yes}%` }}
            />
            <div
              className="bg-black/20 dark:bg-white/20"
              style={{ width: `${votesPercentage.abstain}%` }}
            />
            <div
              className="bg-error dark:bg-error-dark rounded-r-full"
              style={{ width: `${votesPercentage.no}%` }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-[12px] h-[6px] rounded-full bg-success dark:bg-success-dark shadow-md" />
              <p>Yes</p>
            </div>
            <p>
              <span className="font-semibold mr-1">
                {convertToThousand(
                  Number((total_votes * votesPercentage.yes) / 100)
                )}
              </span>
              <span>({votesPercentage.yes}%)</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-[12px] h-[6px] rounded-full bg-black/20 dark:bg-white/20 shadow-md" />
              <p>Abstain</p>
            </div>
            <p>
              <span className="font-semibold mr-1">
                {convertToThousand(
                  Number((total_votes * votesPercentage.abstain) / 100)
                )}
              </span>
              <span>({votesPercentage.abstain}%)</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-[12px] h-[6px] rounded-full bg-error dark:bg-error-dark shadow-md" />
              <p>No</p>
            </div>
            <p>
              <span className="font-semibold mr-1">
                {convertToThousand(
                  Number((total_votes * votesPercentage.no) / 100)
                )}
              </span>
              <span>({votesPercentage.no}%)</span>
            </p>
          </div>
        </div>
      </div>
      <Divider className="my-1" />
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Quorum</p>
          <Tooltip
            title={
              <p className="text-xs">
                the minimum number of members of an assembly or society that
                must be present at any of its meetings to make the proceedings
                of that meeting valid.
              </p>
            }
          >
            <ImInfo className="cursor-pointer" />
          </Tooltip>
        </div>
        <div className="my-4 mb-4">
          <div className="flex gap-1 h-[10px] rounded-full shadow-sm bg-surface-container">
            <div
              className="bg-black/20 dark:bg-white/20 rounded-full"
              style={{ width: `${quorom}%` }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Approval Quorum</p>
          <p className="font-semibold">{quorom}%</p>
        </div>
        <div className="text-sm mt-4">
          <Alert
            type="success"
            style={{ padding: 10 }}
            description={
              <p className="text-xs">
                The proposal has reached the required quorom. If the current
                vote stands, the proposal will pass.
              </p>
            }
          ></Alert>
        </div>
      </div>
    </div>
  )
}
