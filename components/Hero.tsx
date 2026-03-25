// components/Hero.tsx

export default function Hero() {
  return (
    <section
      className="relative min-h-[84vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #edfaf5 0%, #f4faf8 45%, #eef6ff 100%)' }}
    >
      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-[80px] -top-20 -left-20"
          style={{ background: '#05b083', opacity: 0.13 }} />
        <div className="absolute w-80 h-80 rounded-full blur-[70px] -bottom-16 -right-16"
          style={{ background: '#2563eb', opacity: 0.10 }} />
        <div className="absolute w-64 h-64 rounded-full blur-[60px] top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2"
          style={{ background: '#05b083', opacity: 0.07 }} />
      </div>

      {/* Live badge */}
      <div
        className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-7"
        style={{ background: '#e6f8f4', border: '1px solid rgba(5,176,131,0.3)', color: '#038a67' }}
      >
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#05b083' }} />
        Live at 12+ universities across Nigeria
      </div>

      {/* Headline */}
      <h1
        className="relative z-10 text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-2xl mb-5"
        style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
      >
        Your campus<br />
        <em style={{ color: '#05b083', fontStyle: 'italic' }}>marketplace,</em><br />
        simplified.
      </h1>

      <p className="relative z-10 text-base max-w-md leading-relaxed mb-8" style={{ color: '#4b6b62' }}>
        Buy, sell, and swap with students at your uni — textbooks, gadgets, fashion, food, and more.
      </p>

      {/* Search bar */}
      <div
        className="relative z-10 flex w-full max-w-[500px] rounded-full overflow-hidden mb-6"
        style={{
          background: 'white',
          border: '1.5px solid #c8ede5',
          boxShadow: '0 4px 20px rgba(5,176,131,0.10)',
        }}
      >
        <input
          type="text"
          placeholder="Search for textbooks, earbuds, hoodies…"
          className="flex-1 outline-none px-5 py-3 text-sm bg-transparent"
          style={{ color: '#0f1f1a', fontFamily: '"DM Sans", sans-serif' }}
        />
        <button
          className="m-1.5 text-sm font-semibold text-white px-5 py-2 rounded-full transition-opacity hover:opacity-90"
          style={{ background: '#05b083' }}
        >
          Search
        </button>
      </div>

      {/* CTA buttons */}
      <div className="relative z-10 flex flex-wrap gap-3 justify-center mb-14">
        <button
          className="text-sm font-semibold text-white px-7 py-3 rounded-full hover:-translate-y-0.5 transition-all"
          style={{ background: '#05b083', boxShadow: '0 4px 18px rgba(5,176,131,0.30)' }}
        >
          Start Selling →
        </button>
        <button
          className="text-sm font-medium px-7 py-3 rounded-full transition-all hover:bg-[#e6f8f4]"
          style={{ background: 'white', border: '1.5px solid #c8ede5', color: '#0f1f1a' }}
        >
          Browse Deals
        </button>
      </div>

      {/* Stats strip */}
      <div
        className="relative z-10 flex flex-wrap gap-10 justify-center pt-8"
        style={{ borderTop: '1px solid #c8ede5' }}
      >
        {[
          { num: '4,200+', label: 'Active Listings' },
          { num: '12',     label: 'Universities' },
          { num: '8,500+', label: 'Students' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <span
              className="block leading-none mb-1"
              style={{ fontFamily: '"Instrument Serif", serif', fontSize: '2rem', color: '#0f1f1a' }}
            >
              {s.num}
            </span>
            <span
              className="text-[0.72rem] font-semibold uppercase tracking-widest"
              style={{ color: '#4b6b62' }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}