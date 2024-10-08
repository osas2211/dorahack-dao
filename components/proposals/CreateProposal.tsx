"use client"
import { Alert, Button, DatePicker, Form, Input } from "antd"
import { useForm } from "antd/es/form/Form"
import React, { useState } from "react"

type investment_optionT = {
  period: string
  investment_return: string
  index: number
}
interface formData {
  proposal_title: string
  proposal_description: string
  voting_end_date: string
  investment_strategy: string
  investment_description: string
  investment_options: investment_optionT[]
}

export const CreateProposal = () => {
  const [form] = useForm()
  const [options, setOptions] = useState<investment_optionT[]>([])
  return (
    <div>
      <Alert
        type="warning"
        className="bg-secondary/5 dark:bg-secondary-dark/5 border-0"
        description={
          <p className="text-xs text-secondary dark:text-secondary-dark">
            Investing/Fund allocation begins once the investment strategy has
            passed the voting stage.
          </p>
        }
      />
      <div className="my-10 bg-white dark:bg-black/10 p-4 md:p-6 rounded-xl">
        <Form form={form} layout="vertical">
          <Form.Item
            rules={[{ required: true }]}
            name={"proposal_title"}
            label="Proposal title"
          >
            <Input
              className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark"
              placeholder="Proposal title"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true }]}
            name={"proposal_description"}
            label="Proposal description"
          >
            <Input.TextArea
              className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark"
              placeholder="Proposal description"
              style={{ minHeight: "7rem" }}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name={"voting_end_date"}
            label="Voting Ends"
          >
            <DatePicker className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name={"investment_strategy"}
            label="Investment strategy"
          >
            <Input
              className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark"
              placeholder="Investment strategy"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name={"investment_description"}
            label="About investment"
          >
            <Input.TextArea
              className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark"
              placeholder="About investment strategy"
              style={{ minHeight: "7rem" }}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            name={"investment_options"}
            label="Investment Options"
          >
            <div className="md:grid-cols-2 grid gap-3">
              {options.map((option, index) => {
                return (
                  <div key={index} className="my-3">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <p>Option {index + 1}</p>
                      <p
                        className="text-error dark:text-error-dark text-sm cursor-pointer"
                        onClick={() => {
                          setOptions((prev) =>
                            prev.filter((option, index_) => index_ !== index)
                          )
                        }}
                      >
                        Remove
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Maturity period (months)</p>
                      <Input
                        required
                        className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark mb-3"
                        placeholder="Maturity Period (months)"
                        type="number"
                        value={
                          options.find((option, index_) => index_ === index)
                            ?.period || ""
                        }
                        onChange={(e) =>
                          setOptions((prev) =>
                            prev.map((option_, index_) => {
                              if (index_ === index) {
                                return { ...option_, period: e.target.value }
                              }
                              return option_
                            })
                          )
                        }
                      />
                    </div>
                    <div>
                      <p className="text-sm">Investment returns (%)</p>
                      <Input
                        required
                        className="w-full h-[45px] bg-transparent border-outline-variant dark:border-outline-variant-dark"
                        placeholder="Investment return (%)"
                        type="number"
                        max={100}
                        value={
                          options.find((option, index_) => index_ === index)
                            ?.investment_return || ""
                        }
                        onChange={(e) =>
                          setOptions((prev) =>
                            prev.map((option_, index_) => {
                              if (index_ === index) {
                                return {
                                  ...option_,
                                  investment_return: e.target.value,
                                }
                              }
                              return option_
                            })
                          )
                        }
                      />
                    </div>
                  </div>
                )
              })}
              <button
                onClick={() => {
                  setOptions((prev) => [
                    ...prev,
                    {
                      index: options.length - 1,
                      period: "",
                      investment_return: "",
                    },
                  ])
                }}
              >
                + Add Option
              </button>
            </div>
          </Form.Item>

          <Button htmlType="submit" type="primary" className="w-full">
            Submit proposal
          </Button>
        </Form>
      </div>
    </div>
  )
}
