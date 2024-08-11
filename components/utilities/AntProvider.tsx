"use client"
import React, { ReactNode, useEffect, useState } from "react"
import { ConfigProvider, theme } from "antd"
import { useThemeMode } from "@/hooks/useThemeMode"

export const AntProvider = ({
  children,
  primary_color,
}: {
  children: ReactNode
  primary_color?: string
}) => {
  const { mode } = useThemeMode()
  const [modeState, setModeState] = useState<"light" | "dark">("light")
  useEffect(() => {
    if (mode) {
      setModeState(mode)
    }
  }, [mode])
  const colors = {
    light: {
      primaryColor: "#65B741",
      surfaceColor: "#FBFBFB",
      controlOutlineColor: "#65B741",
      borderColor: "#A6AEB2",
    },
    dark: {
      primaryColor: "#80AF81",
      surfaceColor: "#282C2E",
      controlOutlineColor: "#80AF81",
      borderColor: "#DFE2E3",
    },
  }
  const antTheme =
    modeState === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm

  return (
    <ConfigProvider
      theme={{
        algorithm: antTheme,
        token: {
          colorPrimary: primary_color || colors[modeState].primaryColor,
          colorBgContainer: colors[modeState].surfaceColor,
          colorBorder: colors[modeState].borderColor,
          controlOutline: colors[modeState].primaryColor,
          fontFamily: "",
          controlHeight: 40,
          fontSize: 16,
        },
        components: {
          Table: {
            headerBg: "transparent",
            headerSplitColor: "transparent",
            cellFontSize: 14,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
