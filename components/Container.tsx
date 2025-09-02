export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      {children}
    </div>
  )
}