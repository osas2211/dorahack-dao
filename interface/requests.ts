// Interface Tabkes Table
export interface RequestDisplayI {
  name: string
  picture: string
  department: string
  date_submitted: string
  due_date: string
  title: string
  status: statusT
  priority: priorityT
  id: string
  email: string
}

export type statusT = "pending" | "completed" | "rejected"
export type priorityT = "urgent" | "low" | "high" | "medium"
