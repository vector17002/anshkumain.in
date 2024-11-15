"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [curr , setCurr] = React.useState<"light" | "dark">("light")
  const { setTheme } = useTheme()
  return (
        <Button variant="outline" size="icon" className="rounded-full dark:text-white text-emerald-500" onClick={() => {setTheme(curr === "light" ? "dark" : "light") 
          setCurr(curr === "light" ? "dark" : "light")
        }}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
  )
}