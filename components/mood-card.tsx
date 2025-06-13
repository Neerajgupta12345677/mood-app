"use client"

export function MoodCard({ mood, label, onClick, selected }: {
  mood: string,
  label: string,
  selected: boolean,
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-xl border text-3xl transition-all text-center
        ${selected ? "border-indigo-500 bg-indigo-100 dark:bg-indigo-900" : "hover:border-indigo-300"}`}
    >
      <div>{mood}</div>
      <div className="text-sm mt-2">{label}</div>
    </div>
  )
}