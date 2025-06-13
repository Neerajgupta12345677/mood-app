"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MoodCard } from "@/components/mood-card"

const MOOD_OPTIONS = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😞", label: "Sad" },
]

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = async () => {
    if (!selectedMood) return
    await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood: selectedMood, comment })
    })
    setSelectedMood("")
    setComment("")
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-semibold">How are you feeling today?</h1>
      <div className="grid grid-cols-3 gap-6">
        {MOOD_OPTIONS.map((option) => (
          <MoodCard
            key={option.label}
            mood={option.emoji}
            label={option.label}
            selected={selectedMood === option.label}
            onClick={() => setSelectedMood(option.label)}
          />
        ))}
      </div>
      <textarea
        placeholder="Optional comment..."
        className="w-full max-w-md p-3 border rounded-md dark:bg-gray-800"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button onClick={handleSubmit} className="px-6 py-2">Submit</Button>
    </main>
  )
}