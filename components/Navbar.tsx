// components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 h-16 backdrop-blur-md"
      style={{
        background: 'rgba(244,250,248,0.88)',
        borderBottom: '1px solid #c8ede5',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl tracking-tight"
        style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
      >
        plug<span style={{ color: '#05b083' }}>4</span>uni
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: 'Browse',        href: '/browse' },
          { label: 'How it works',  href: '/how-it-works' },
          { label: 'My Uni',        href: '/my-uni' },
        ].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: '#4b6b62' }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full transition-all"
          style={{ color: '#4b6b62' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#e6f8f4')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          Log in
        </Link>
        <Link
          href="/post"
          className="text-sm font-semibold text-white px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
          style={{
            background: '#05b083',
            boxShadow: '0 3px 12px rgba(5,176,131,0.30)',
          }}
        >
          + Post Item
        </Link>
      </div>
    </nav>
  )
}