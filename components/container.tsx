// components/ui/container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
