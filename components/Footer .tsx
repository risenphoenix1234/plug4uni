// components/Footer.tsx
import Link from 'next/link'

const LINKS = {
  Marketplace: [
    { label: 'Browse Listings', href: '/browse' },
    { label: 'Post an Item',    href: '/post' },
    { label: 'Categories',      href: '/categories' },
    { label: 'My University',   href: '/my-uni' },
  ],
  Support: [
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Safety Tips',  href: '/safety' },
    { label: 'Contact Us',   href: '/contact' },
    { label: 'FAQs',         href: '/faqs' },
  ],
  Company: [
    { label: 'About',           href: '/about' },
    { label: 'Privacy Policy',  href: '/privacy' },
    { label: 'Terms',           href: '/terms' },
    { label: 'Partner with us', href: '/partner' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0a1a15', color: 'rgba(255,255,255,0.55)' }} className="px-8 pt-14 pb-8">
      <div className="max-w-[1100px] mx-auto flex flex-wrap gap-12 justify-between mb-10">

        {/* Brand */}
        <div className="min-w-[160px]">
          <div
            className="text-2xl text-white mb-2 tracking-tight"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            plug<span style={{ color: '#05b083' }}>4</span>uni
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.40)' }}>
            The campus marketplace,<br />
            by students, for students.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([group, links]) => (
          <div key={group} className="flex flex-col gap-2 min-w-[130px]">
            <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white mb-1">
              {group}
            </h4>
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[0.85rem] transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1100px] mx-auto flex flex-wrap justify-between gap-2 pt-6 text-[0.78rem]"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.28)' }}
      >
        <span>© 2025 plug4uni. Made with ❤️ for Nigerian students.</span>
        <span>🇳🇬 Built for the campus hustle</span>
      </div>
    </footer>
  )
}