"use client"
import { Avatar } from "antd"
import React from "react"
import { FaChartPie } from "react-icons/fa"

const investment_options = [
  {
    title: "Corporate debt 1",
    percentage: "8.5%",
    period: "6 months",
    price_per_unit: 5000,
    maturity_date: "1st December 2024",
  },
  {
    title: "Corporate debt 2",
    percentage: "4.5%",
    period: "3 months",
    price_per_unit: 5000,
    maturity_date: "1st October 2024",
  },
  {
    title: "Corporate debt 3",
    percentage: "18.5%",
    period: "18 months",
    price_per_unit: 5000,
    maturity_date: "1st December 2025",
  },
]

export const InvestmentOptions = () => {
  return (
    <div className="text-sm">
      <p className="font-semibold">Investment Options</p>
      <div>
        <p className="">
          <span className="font-medium">Start Date: </span>
          <span>12th August 2024</span>
        </p>
      </div>
      <div className="my-4 md:my-6 grid md:grid-cols-3 gap-6">
        {investment_options.map((option, index) => {
          return (
            <div
              key={index}
              className="shadow-sm bg-surface-container-low dark:bg-surface-container-high-dark p-4 rounded-lg"
            >
              <div className="w-full">
                <Avatar
                  size={45}
                  className="bg-secondary/20 dark:bg-secondary-dark/20 rounded-lg"
                >
                  <FaChartPie
                    className="text-secondary dark:text-secondary-dark"
                    size={23}
                  />
                </Avatar>
              </div>
              <div className=" my-3">
                <p className="font-medium">{option.title}</p>
                <p className="">
                  <span className="font-medium">Period: </span>
                  <span>{option.period}</span>
                </p>
                <p className="">
                  <span className="font-medium">Expected Return: </span>
                  <span>{option.percentage}</span>
                </p>

                <p className="">
                  <span className="font-medium">Maturity Date: </span>
                  <span>{option.maturity_date}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
