"use client"
import { TimePeriodI } from "@/interface/time_period"
import { Button, DatePicker, Divider, Popover, Select } from "antd"
import React, { useEffect, useState } from "react"
import { PiCalendarDotsThin } from "react-icons/pi"

interface propsI {
  periodState: TimePeriodI
  setPeriodState: React.Dispatch<React.SetStateAction<TimePeriodI>>
}

const options = [
  { value: "today", label: "Today" },
  { value: "week", label: "This week" },
  { value: "month", label: "This month" },
  { value: "year", label: "This year" },
  { value: "custom", label: "Custom period" },
]

export const SelectTimePeriod = ({ ...props }: propsI) => {
  const [openPopover, setOpenPopOver] = useState(false)
  const [period, setPeriod] = useState("today")
  const onSelectPeriod = () => {
    setOpenPopOver(false)
  }
  useEffect(() => {
    if (period === "custom") {
      setOpenPopOver(true)
    } else {
      setOpenPopOver(false)
    }
  }, [period])

  return (
    <div>
      <Popover
        content={
          <div className="w-[328px]">
            <div className="p-3">
              <p className="text-[14px] text-on-surface-variant dark:text-on-surface-variant-dark mb-[24px]">
                Custom period: select date
              </p>
              <div className="flex gap-5 items-center justify-between">
                <h3 className="text-xl">Enter Dates</h3>
                <PiCalendarDotsThin className="text-2xl text-on-surface-variant dark:text-on-surface-variant-dark" />
              </div>
            </div>
            <Divider className="my-1" />
            <div className="p-3 grid grid-cols-2 gap-3 mb-4">
              <div className="w-full">
                <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-1">
                  From
                </p>
                <DatePicker size="large" />
              </div>
              <div className="w-full">
                <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-1">
                  To
                </p>
                <DatePicker size="large" />
              </div>
            </div>

            <div className="flex gap-1">
              <Button
                onClick={onSelectPeriod}
                type="text"
                className="text-primary dark:text-primary-dark"
              >
                <span className="font-medium">Ok</span>
              </Button>
              <Button
                onClick={() => setOpenPopOver(false)}
                type="text"
                className="text-primary dark:text-primary-dark"
              >
                <span className="font-medium">Cancel</span>
              </Button>
            </div>
          </div>
        }
        open={openPopover}
        showArrow={false}
        arrow={false}
        placement={"bottomLeft"}
        // trigger={"click"}
        // onOpenChange={() => setOpenPopOver(false)}
      >
        <Select
          defaultValue={"today"}
          // options={options}
          className="w-[150px] bg-surface-variant dark:bg-surface-variant-dark rounded-md"
          variant="borderless"
          onChange={(value) => setPeriod(value)}
        >
          {options.map((option, index) => {
            return (
              <Select.Option key={index} value={option.value}>
                <p
                  onClick={() => {
                    if (option.value === "custom") setOpenPopOver(true)
                    else setOpenPopOver(false)
                  }}
                >
                  {option.label}
                </p>
              </Select.Option>
            )
          })}
        </Select>
      </Popover>
    </div>
  )
}
