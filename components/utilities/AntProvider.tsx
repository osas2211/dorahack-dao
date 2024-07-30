"use client"
import React, { ReactNode } from "react"
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
  const colors = {
    light: {
      primaryColor: "#3A5A40",
      surfaceColor: "#FBFBFB",
      controlOutlineColor: "#3A5A40",
      borderColor: "#A6AEB2",
    },
    dark: {
      primaryColor: "#A3B18A",
      surfaceColor: "#282C2E",
      controlOutlineColor: "#A3B18A",
      borderColor: "#DFE2E3",
    },
  }
  const antTheme =
    mode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm

  return (
    <ConfigProvider
      theme={{
        algorithm: antTheme,
        token: {
          colorPrimary: primary_color || colors[mode].primaryColor,
          colorBgContainer: colors[mode].surfaceColor,
          colorBorder: colors[mode].borderColor,
          controlOutline: colors[mode].primaryColor,
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
