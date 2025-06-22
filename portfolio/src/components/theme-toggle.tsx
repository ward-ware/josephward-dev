"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) { return null }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="text-orange-300" />
      ) : (
        <Moon className="text-slate-800" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
