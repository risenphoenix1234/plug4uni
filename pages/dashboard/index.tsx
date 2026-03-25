// pages/dashboard/index.tsx
import Link from 'next/link'
import DashboardLayout from '../../components/dashboard/DashboardLayout'

const STATS = [
  { label: 'Active Listings', value: '3', icon: '⊞', bg: 'bg-[#e6f8f4]', text: 'text-[#038a67]' },
  { label: 'Total Views',     value: '142', icon: '◎', bg: 'bg-[#eef6ff]', text: 'text-[#1d4ed8]' },
  { label: 'Messages',        value: '5',   icon: '◻', bg: 'bg-[#fef3e6]', text: 'text-[#b45309]' },
  { label: 'Saved by others', value: '18',  icon: '♡', bg: 'bg-[#fce7f3]', text: 'text-[#9d174d]' },
]

export default function DashboardHome() {
  return (
    <DashboardLayout title="Overview" subtitle="Welcome back, Tunde 👋">

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {STATS.map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#c8ede5] p-5">
            <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center text-base mb-3`}>
              <span className={s.text}>{s.icon}</span>
            </div>
            <p className="text-2xl font-bold text-[#0f1f1a]" style={{ fontFamily: '"Instrument Serif", serif' }}>{s.value}</p>
            <p className="text-xs text-[#4b6b62] font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/dashboard/listings"
          className="group flex items-center justify-between bg-[#05b083] hover:bg-[#038a67] text-white rounded-2xl px-6 py-5 transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(5,176,131,0.28)]"
        >
          <div>
            <p className="font-semibold text-base">Post a new item</p>
            <p className="text-sm text-white/70 mt-0.5">List something for your campus</p>
          </div>
          <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link
          href="/dashboard/profile"
          className="group flex items-center justify-between bg-white hover:bg-[#f4faf8] border border-[#c8ede5] hover:border-[#05b083] rounded-2xl px-6 py-5 transition-all hover:-translate-y-0.5"
        >
          <div>
            <p className="font-semibold text-base text-[#0f1f1a]">Complete your profile</p>
            <p className="text-sm text-[#4b6b62] mt-0.5">Add photo & details</p>
          </div>
          <span className="text-2xl text-[#05b083] group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* Recent activity placeholder */}
      <div className="bg-white rounded-2xl border border-[#c8ede5] p-6">
        <h2 className="font-semibold text-[#0f1f1a] mb-4">Recent activity</h2>
        <div className="flex flex-col gap-3">
          {[
            { text: 'Someone viewed your Oraimo Earbuds listing', time: '2 min ago', dot: 'bg-[#05b083]' },
            { text: 'New message from Adaeze about Chemistry textbook', time: '1 hr ago', dot: 'bg-[#2563eb]' },
            { text: 'Your Reading Desk was saved by 3 people', time: 'Yesterday', dot: 'bg-[#f59e0b]' },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-3 py-3 border-b border-[#f4faf8] last:border-0">
              <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#0f1f1a]">{a.text}</p>
                <p className="text-xs text-[#4b6b62] mt-0.5">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </DashboardLayout>
  )
}