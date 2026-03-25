// pages/auth/register.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthLayout from '../../components/auth/AuthLayout'

const SCHOOLS = [
  { value: 'unilag', label: 'University of Lagos (UNILAG)' },
  { value: 'oau',    label: 'Obafemi Awolowo University (OAU)' },
]

export default function Register() {
  const router = useRouter()
  const [name,   setName]   = useState('')
  const [phone,  setPhone]  = useState('')
  const [school, setSchool] = useState('')
  const [is18,   setIs18]   = useState(false)
  const [error,  setError]  = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim())  return setError('Please enter your full name.')
    if (!phone.trim()) return setError('Please enter your phone number.')
    if (!school)       return setError('Please select your university.')
    if (!is18)         return setError('You must confirm you are 18 or older.')
    router.push('/auth/verify-email')
  }

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80"
      imageAlt="Person handing over a phone during a transaction"
      quote="The best deals are always closer than you think — usually just a dorm away."
      quoteAuthor="plug4uni student, UNILAG"
    >
      <div className="mb-6">
        <h1 className="text-[1.75rem] tracking-tight text-[#0f1f1a] mb-1" style={{ fontFamily: '"Instrument Serif", serif' }}>
          Create your account
        </h1>
        <p className="text-sm text-[#4b6b62]">Join your campus marketplace in under a minute.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Name */}
        <div>
          <label className="block text-[13px] font-semibold text-[#0f1f1a] mb-1.5">Full name</label>
          <input
            type="text"
            placeholder="e.g. Tunde Adeyemi"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#c8ede5] bg-[#f4faf8] text-sm text-[#0f1f1a] placeholder:text-[#a0b8b2] outline-none focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10 transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[13px] font-semibold text-[#0f1f1a] mb-1.5">Phone number</label>
          <input
            type="tel"
            placeholder="e.g. 08012345678"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#c8ede5] bg-[#f4faf8] text-sm text-[#0f1f1a] placeholder:text-[#a0b8b2] outline-none focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10 transition-all"
          />
        </div>

        {/* School */}
        <div>
          <label className="block text-[13px] font-semibold text-[#0f1f1a] mb-1.5">University</label>
          <select
            value={school}
            onChange={e => setSchool(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#c8ede5] bg-[#f4faf8] text-sm text-[#0f1f1a] outline-none focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10 transition-all cursor-pointer appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2305b083' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
            }}
          >
            <option value="" disabled>Select your university</option>
            {SCHOOLS.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* 18+ checkbox */}
        <label className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer border transition-all ${is18 ? 'bg-[#e6f8f4] border-[#05b083]' : 'bg-[#f4faf8] border-[#c8ede5]'}`}>
          <input
            type="checkbox"
            checked={is18}
            onChange={e => setIs18(e.target.checked)}
            className="mt-0.5 w-4 h-4 shrink-0 accent-[#05b083] cursor-pointer"
          />
          <span className="text-sm text-[#0f1f1a] leading-relaxed">
            I confirm that I am <strong>18 years or older</strong>
          </span>
        </label>

        {/* Error */}
        {error && (
          <p className="text-[13px] text-center py-2.5 px-4 rounded-xl bg-pink-50 text-pink-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-[#05b083] hover:bg-[#038a67] text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(5,176,131,0.28)] mt-1"
        >
          Create Account →
        </button>
      </form>

      <p className="text-center text-sm text-[#4b6b62] mt-5">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-[#05b083] font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  )
}