// components/Testimonials.tsx

const TESTIMONIALS = [
  {
    quote: "Sold my 200L textbooks in 2 days. Didn't even have to leave campus. This thing just works.",
    avatar: '👩🏾',
    avatarBg: '#e6f8f4',
    name: 'Adaeze O.',
    uni: 'Medicine · UNILAG',
  },
  {
    quote: 'Got a barely-used laptop charger for half the market price. My guy was literally 2 blocks away in the hostel.',
    avatar: '👨🏾',
    avatarBg: '#eef6ff',
    name: 'Tunde A.',
    uni: 'Engineering · OAU',
  },
  {
    quote: 'I make extra money selling crochet accessories between lectures. plug4uni is literally part of my hustle.',
    avatar: '👩🏾',
    avatarBg: '#fce7f3',
    name: 'Zainab M.',
    uni: 'Business · BUK',
  },
]

export default function Testimonials() {
  return (
    <section
      className="px-6 py-20"
      style={{ background: 'white', borderTop: '1px solid #c8ede5', borderBottom: '1px solid #c8ede5' }}
    >
      <div className="max-w-[1000px] mx-auto">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#05b083' }}>
          Real students
        </p>
        <h2
          className="text-3xl md:text-4xl tracking-tight mb-8"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
        >
          What they're saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl transition-all hover:-translate-y-1"
              style={{
                background: '#f4faf8',
                border: '1.5px solid #c8ede5',
              }}
            >
              <p className="text-[0.9rem] leading-relaxed italic mb-5" style={{ color: '#0f1f1a' }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[0.85rem] font-semibold" style={{ color: '#0f1f1a' }}>{t.name}</div>
                  <div className="text-[0.75rem]" style={{ color: '#4b6b62' }}>{t.uni}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}