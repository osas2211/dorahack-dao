import { useLocalStorage } from "usehooks-ts"

export const useThemeMode = () => {
  const [mode, setMode] = useLocalStorage<"light" | "dark">(
    "dao-color-mode",
    "light"
  )

  return { mode, setMode }
}
