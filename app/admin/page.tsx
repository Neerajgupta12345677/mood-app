"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

interface MoodEntry {
  mood: string
  comment?: string
  time: string
}

export default function AdminPage() {
  const [moods, setMoods] = useState<MoodEntry[]>([])

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("/api/mood")
      const data = await res.json()
      setMoods(data)
    }
    fetchMoods()
  }, [])

  return (
    <main className="min-h-screen p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mood</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {moods.map((entry, idx) => (
            <TableRow key={idx}>
              <TableCell>{entry.mood}</TableCell>
              <TableCell>{entry.comment || "—"}</TableCell>
              <TableCell>{new Date(entry.time).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
