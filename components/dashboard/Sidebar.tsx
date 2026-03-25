// components/dashboard/Sidebar.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV = [
  { href: '/dashboard',          icon: '▦',  label: 'Overview' },
  { href: '/dashboard/profile',  icon: '◎',  label: 'My Profile' },
  { href: '/dashboard/listings', icon: '⊞',  label: 'My Listings' },
  { href: '/dashboard/messages', icon: '◻',  label: 'Messages' },
  { href: '/dashboard/saved',    icon: '♡',  label: 'Saved Items' },
]

export default function Sidebar() {
  const { pathname } = useRouter()

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex flex-col w-[220px] min-h-screen bg-[#0a1a15] shrink-0">

        {/* Logo */}
        <Link
          href="/"
          className="px-6 py-5 text-xl tracking-tight text-white border-b border-white/8"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          plug<span className="text-[#05b083]">4</span>uni
        </Link>

        {/* Nav items */}
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {NAV.map(item => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${active
                    ? 'bg-[#05b083] text-white shadow-[0_2px_12px_rgba(5,176,131,0.35)]'
                    : 'text-white/55 hover:text-white hover:bg-white/8'
                  }`}
              >
                <span className="text-base w-5 text-center">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Bottom: user mini card */}
        <div className="px-3 pb-5">
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/6 border border-white/8">
            <div className="w-8 h-8 rounded-full bg-[#05b083]/30 flex items-center justify-center text-xs font-bold text-[#34d399] shrink-0">
              TA
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-white truncate">Tunde Adeyemi</p>
              <p className="text-[11px] text-white/40 truncate">UNILAG</p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 mt-2 px-3 py-2 rounded-xl text-xs font-medium text-white/40 hover:text-white/70 transition-colors"
          >
            <span>↩</span> Back to marketplace
          </Link>
        </div>
      </aside>

      {/* ── Mobile bottom tab bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-[#0a1a15] border-t border-white/10">
        {NAV.map(item => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] font-medium transition-colors
                ${active ? 'text-[#05b083]' : 'text-white/45 hover:text-white/70'}`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>
    </>
  )
}