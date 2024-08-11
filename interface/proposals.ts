// Interface Tabkes Table
export interface ProposalI {
  name: string;
  picture: string;
  theme: string;
  date_submitted: string;
  end_date: string;
  title: string;
  status: statusT;
  priority: priorityT;
  id: string;
  email?: string;
  creator_address: string;
  recipient_address: string;
}

export type statusT = "pending" | "completed" | "rejected";
export type priorityT = "urgent" | "low" | "high" | "medium";

export enum STATUS {
  "pending" = "pending",
  "completed" = "completed",
  "rejected" = "rejected",
}

export enum PRIORITY {
  "urgent" = "urgent",
  "low" = "low",
  "high" = "high",
  "medium" = "medium",
}
