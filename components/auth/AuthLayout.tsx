// components/auth/AuthLayout.tsx
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  imageUrl: string
  imageAlt: string
  quote: string
  quoteAuthor: string
}

export default function AuthLayout({ children, imageUrl, imageAlt, quote, quoteAuthor }: Props) {
  return (
    <div className="min-h-screen flex" style={{ fontFamily: '"DM Sans", sans-serif' }}>

      {/* ── LEFT image panel ── */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden flex-col justify-between p-12">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#055040]/75 via-[#0a1a15]/55 to-[#0a1a15]/80" />

        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 text-2xl tracking-tight text-white"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          plug<span className="text-emerald-400">4</span>uni
        </Link>

        {/* Quote */}
        <div className="relative z-10">
          <p
            className="text-white text-xl leading-snug mb-3 max-w-sm italic"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            "{quote}"
          </p>
          <p className="text-sm font-medium text-white/60">— {quoteAuthor}</p>
        </div>
      </div>

      {/* ── RIGHT form panel ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 overflow-y-auto bg-gradient-to-br from-[#edfaf5] via-[#f4faf8] to-[#eef6ff]">

        {/* Mobile logo */}
        <Link
          href="/"
          className="lg:hidden text-2xl tracking-tight text-[#0f1f1a] mb-8"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          plug<span className="text-[#05b083]">4</span>uni
        </Link>

        {/* Card */}
        <div className="w-full max-w-[420px] bg-white rounded-3xl p-8 border border-[#c8ede5] shadow-[0_8px_40px_rgba(5,176,131,0.10)]">
          {children}
        </div>
      </div>
    </div>
  )
}