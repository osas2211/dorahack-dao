import { RequestDisplayI } from "@/interface/requests"
import { faker } from "@faker-js/faker"
import { useState } from "react"

const requestsTitles = [
  "R · #21 Request for 50 Air Conditioners",
  "R · #20 Request for materials in medlab laboratory",
  "R · #20 Request for 20 copies of Introduction to Fluid Mechanics by Rajput",
]

function createRequestData(): RequestDisplayI {
  return {
    id: faker.string.uuid(),
    picture: faker.image.avatar(),
    date_submitted: faker.date.anytime().toISOString(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    title: faker.helpers.arrayElement(requestsTitles),
    status: faker.helpers.arrayElement(["pending", "completed", "rejected"]),
    priority: faker.helpers.arrayElement(["urgent", "low", "high", "medium"]),
    due_date: faker.date.anytime().toISOString(),
    department: faker.helpers.arrayElement([
      "Engineering",
      "Med Lab",
      "Accounting",
      "Law",
    ]),
  }
}

export const useGenerateRequestData = () => {
  // const [requests, setRequets] = useState<RequestDisplayI[]>([])
  const requests: RequestDisplayI[] = []
  for (let count = 0; count <= 20; count++) {
    // setRequets((prev) => [...prev, createRequestData()])
    requests.push(createRequestData())
  }

  return { requests }
}
