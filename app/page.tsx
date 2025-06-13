"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 space-y-6">
      <h1 className="text-4xl font-bold text-center tracking-tight">
        Welcome to the <span className="text-indigo-600 dark:text-indigo-400">Mood Tracker</span>
      </h1>
      <div className="flex gap-4">
        <Link href="/mood">
          <Button className="px-6 py-2 text-lg">Submit Your Mood</Button>
        </Link>
        <Link href="/admin">
          <Button variant="outline" className="px-6 py-2 text-lg">Admin Dashboard</Button>
        </Link>
      </div>
      <ThemeToggle />
    </main>
  )
}