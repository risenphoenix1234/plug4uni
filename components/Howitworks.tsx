// components/HowItWorks.tsx

const STEPS = [
  {
    num: '01',
    title: 'Create your account',
    desc: "Sign up with your university email to verify you're a student. Takes 30 seconds.",
  },
  {
    num: '02',
    title: 'Post or browse',
    desc: 'List items in 2 minutes or scroll through deals from your campus community.',
  },
  {
    num: '03',
    title: 'Chat & close',
    desc: 'Message buyers or sellers directly. Meet on campus or arrange a quick delivery.',
  },
  {
    num: '04',
    title: 'Leave a review',
    desc: 'Build your campus rep. Trusted sellers get more eyes on their listings.',
  },
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-20" style={{ background: 'white', borderTop: '1px solid #c8ede5', borderBottom: '1px solid #c8ede5' }}>
      <div className="max-w-[1000px] mx-auto">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#05b083' }}>
          Simple as that
        </p>
        <h2
          className="text-3xl md:text-4xl tracking-tight mb-8"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
        >
          How plug4uni works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="p-7 rounded-2xl transition-all hover:-translate-y-1"
              style={{
                background: i % 2 === 0 ? '#edfaf5' : '#eef6ff',
                border: '1.5px solid',
                borderColor: i % 2 === 0 ? '#c8ede5' : '#bfdbfe',
              }}
            >
              <div
                className="text-[2.5rem] leading-none mb-3"
                style={{ fontFamily: '"Instrument Serif", serif', color: i % 2 === 0 ? '#05b083' : '#2563eb', opacity: 0.3 }}
              >
                {step.num}
              </div>
              <h3 className="text-[0.95rem] font-semibold mb-2" style={{ color: '#0f1f1a' }}>{step.title}</h3>
              <p className="text-[0.84rem] leading-relaxed" style={{ color: '#4b6b62' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}