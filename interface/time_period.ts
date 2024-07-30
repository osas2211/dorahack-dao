type periodType = "today" | "week" | "month" | "custom"
export interface TimePeriodI {
  type: periodType
  start_date: string
  end_date: string
}
