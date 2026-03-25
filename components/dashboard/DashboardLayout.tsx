// components/dashboard/DashboardLayout.tsx
import Sidebar from './Sidebar'

interface Props {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function DashboardLayout({ children, title, subtitle }: Props) {
  return (
    <div className="flex min-h-screen bg-[#f4faf8]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#c8ede5] px-6 md:px-8 py-4">
          <h1
            className="text-xl md:text-2xl tracking-tight text-[#0f1f1a]"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            {title}
          </h1>
          {subtitle && <p className="text-sm text-[#4b6b62] mt-0.5">{subtitle}</p>}
        </header>

        {/* Page content */}
        <div className="flex-1 px-6 md:px-8 py-6 pb-24 md:pb-8">
          {children}
        </div>
      </main>
    </div>
  )
}