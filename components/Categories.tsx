// components/Categories.tsx

const CATEGORIES = [
  { icon: '📚', label: 'Textbooks',     bg: '#e6f8f4' },
  { icon: '💻', label: 'Gadgets',       bg: '#eef6ff' },
  { icon: '👕', label: 'Fashion',       bg: '#fef3e6' },
  { icon: '🍱', label: 'Food & Snacks', bg: '#e6f8f4' },
  { icon: '🛋️', label: 'Furniture',     bg: '#eef6ff' },
  { icon: '🎨', label: 'Art & Craft',   bg: '#fce7f3' },
  { icon: '🎮', label: 'Games',         bg: '#eef6ff' },
  { icon: '🔧', label: 'Services',      bg: '#e6f8f4' },
]

export default function Categories() {
  return (
    <section className="px-6 py-20" style={{ background: '#f4faf8' }}>
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#05b083' }}>
          Explore
        </p>
        <h2
          className="text-3xl md:text-4xl tracking-tight mb-8"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
        >
          Shop by category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              className="flex flex-col items-center gap-2.5 p-5 rounded-2xl transition-all hover:-translate-y-1"
              style={{
                background: 'white',
                border: '1.5px solid #c8ede5',
                boxShadow: '0 2px 8px rgba(5,176,131,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#05b083'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(5,176,131,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#c8ede5'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(5,176,131,0.06)'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{ background: cat.bg }}
              >
                {cat.icon}
              </div>
              <span className="text-[0.8rem] font-semibold text-center leading-tight" style={{ color: '#0f1f1a' }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}