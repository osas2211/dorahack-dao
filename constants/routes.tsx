import { ReactNode } from "react"
import { AiFillHome } from "react-icons/ai"
import { TiDocumentText } from "react-icons/ti"
import { CgPoll } from "react-icons/cg"
import { TiTags } from "react-icons/ti"
import { IoSettingsOutline } from "react-icons/io5"
import { TbHelpSquareRounded } from "react-icons/tb"

interface RouteI {
  icon: ReactNode
  name: string
  path: string
}

export const routes: RouteI[] = [
  { icon: <AiFillHome />, name: "Home", path: "/dashboard" },
  { icon: <TiDocumentText />, name: "Proposals", path: "/proposals" },
  { icon: <CgPoll />, name: "Vetted Investments", path: "/investments" },
  { icon: <TiTags />, name: "Shares", path: "/shares" },
  { icon: <IoSettingsOutline />, name: "Settings", path: "/settings" },
  { icon: <TbHelpSquareRounded />, name: "Help", path: "/help" },
]
