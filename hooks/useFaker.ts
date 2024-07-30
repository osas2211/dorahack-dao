import { ProposalI } from "@/interface/proposals"
import { faker } from "@faker-js/faker"
import { useState } from "react"

const proposalsTitles = [
  "R · #21 proposal for 50 Air Conditioners",
  "R · #20 proposal for materials in medlab laboratory",
  "R · #20 proposal for 20 copies of Introduction to Fluid Mechanics by Rajput",
]

function createProposalData(): ProposalI {
  return {
    id: faker.string.uuid(),
    picture: faker.image.avatar(),
    date_submitted: faker.date.anytime().toISOString(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    title: faker.helpers.arrayElement(proposalsTitles),
    status: faker.helpers.arrayElement(["pending", "completed", "rejected"]),
    priority: faker.helpers.arrayElement(["urgent", "low", "high", "medium"]),
    end_date: faker.date.anytime().toISOString(),
    theme: faker.helpers.arrayElement(["Engineering", "Tech", "Web3", "Ai"]),
  }
}

export const useGenerateProposalData = () => {
  // const [proposals, setRequets] = useState<ProposalI[]>([])
  const proposals: ProposalI[] = []
  for (let count = 0; count <= 20; count++) {
    // setRequets((prev) => [...prev, createproposalData()])
    proposals.push(createProposalData())
  }

  return { proposals }
}
