// Interface Tabkes Table
export interface ProposalI {
  name: string
  picture: string
  theme: string
  date_submitted: string
  end_date: string
  title: string
  status: statusT
  id: string
  email?: string
}

export type statusT = "pending" | "passed" | "rejected"
export type priorityT = "urgent" | "low" | "high" | "medium"
