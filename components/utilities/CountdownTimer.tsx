"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
}) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeft | {} = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const padWithZero = (value: number) => value.toString().padStart(2, "0")

  const timerComponents: string[] = []

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft
    // @ts-ignore
    if (timeLeft[key] === undefined) {
      return
    }
    // @ts-ignore
    timerComponents.push(padWithZero(timeLeft[key]))
  })

  return (
    <div>
      {timerComponents.length ? (
        <CountdownFormatter countdown={timerComponents.join("")} />
      ) : (
        <CountdownFormatter countdown={"00000000"} />
      )}
    </div>
  )
}

const CountdownFormatter = ({ countdown }: { countdown: string }) => {
  return (
    <div>
      <p>
        <span>Voting ends in</span>
        <span className="mx-1 font-semibold">
          {countdown[0]}
          {countdown[1]}d
        </span>
        <span className="mr-1 font-semibold">
          {countdown[2]}
          {countdown[3]}h
        </span>
        <span className="mr-1 font-semibold">
          {countdown[4]}
          {countdown[5]}m
        </span>
        <span className="mr-1 font-semibold">
          {countdown[6]}
          {countdown[7]}s
        </span>
      </p>
    </div>
  )
}
