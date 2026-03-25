// components/CTABanner.tsx

export default function CTABanner() {
  return (
    <section
      className="relative px-6 py-24 text-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #edfaf5 0%, #f4faf8 50%, #eef6ff 100%)' }}
    >
      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-[90px] -top-20 left-1/2 -translate-x-1/2"
          style={{ background: '#05b083', opacity: 0.10 }} />
        <div className="absolute w-64 h-64 rounded-full blur-[70px] bottom-0 left-[10%]"
          style={{ background: '#2563eb', opacity: 0.08 }} />
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        <h2
          className="text-4xl md:text-6xl tracking-tight mb-4"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
        >
          Ready to{' '}
          <em style={{ color: '#05b083', fontStyle: 'italic' }}>plug in?</em>
        </h2>
        <p className="text-base leading-relaxed mb-8 max-w-sm mx-auto" style={{ color: '#4b6b62' }}>
          Join thousands of students already buying and selling on their campus.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            className="text-sm font-semibold text-white px-8 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
            style={{ background: '#05b083', boxShadow: '0 4px 18px rgba(5,176,131,0.30)' }}
          >
            Create Free Account →
          </button>
          <button
            className="text-sm font-medium px-8 py-3.5 rounded-full transition-all hover:bg-[#e6f8f4]"
            style={{ background: 'white', border: '1.5px solid #c8ede5', color: '#0f1f1a' }}
          >
            Browse listings
          </button>
        </div>
      </div>
    </section>
  )
}