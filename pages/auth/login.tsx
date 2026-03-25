// pages/auth/login.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthLayout from '../../components/auth/AuthLayout'

export default function Login() {
  const router = useRouter()
  const [identifier, setIdentifier] = useState('')
  const [error,      setError]      = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!identifier.trim()) return setError('Please enter your phone number or email.')
    router.push('/profile')
  }

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&auto=format&fit=crop&q=80"
      imageAlt="Mobile payment transaction on phone"
      quote="From textbooks to gadgets — your next great find is already on campus."
      quoteAuthor="plug4uni student, OAU"
    >
      <div className="mb-6">
        <h1 className="text-[1.75rem] tracking-tight text-[#0f1f1a] mb-1" style={{ fontFamily: '"Instrument Serif", serif' }}>
          Welcome back 👋
        </h1>
        <p className="text-sm text-[#4b6b62]">Log in to your campus marketplace account.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div>
          <label className="block text-[13px] font-semibold text-[#0f1f1a] mb-1.5">
            Phone number or email
          </label>
          <input
            type="text"
            placeholder="08012345678 or you@school.edu.ng"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#c8ede5] bg-[#f4faf8] text-sm text-[#0f1f1a] placeholder:text-[#a0b8b2] outline-none focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10 transition-all"
          />
        </div>

        {error && (
          <p className="text-[13px] text-center py-2.5 px-4 rounded-xl bg-pink-50 text-pink-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-[#05b083] hover:bg-[#038a67] text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(5,176,131,0.28)] mt-1"
        >
          Continue →
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#c8ede5]" />
        <span className="text-xs font-medium text-[#4b6b62]">or</span>
        <div className="flex-1 h-px bg-[#c8ede5]" />
      </div>

      <button
        onClick={() => router.push('/auth/verify-email')}
        className="w-full py-3 rounded-full border border-[#c8ede5] bg-white text-[#038a67] text-sm font-semibold hover:bg-[#e6f8f4] transition-all"
      >
        Verify with email link instead
      </button>

      <p className="text-center text-sm text-[#4b6b62] mt-5">
        Don't have an account?{' '}
        <Link href="/auth/register" className="text-[#05b083] font-semibold hover:underline">
          Sign up free
        </Link>
      </p>
    </AuthLayout>
  )
}