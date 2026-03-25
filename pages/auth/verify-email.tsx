// pages/auth/verify-email.tsx
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthLayout from '../../components/auth/AuthLayout'

const CODE_LENGTH = 6

export default function VerifyEmail() {
  const router = useRouter()
  const [digits,    setDigits]    = useState<string[]>(Array(CODE_LENGTH).fill(''))
  const [error,     setError]     = useState('')
  const [resent,    setResent]    = useState(false)
  const [countdown, setCountdown] = useState(30)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  function handleDigit(index: number, value: string) {
    if (!/^\d*$/.test(value)) return
    const next = [...digits]
    next[index] = value.slice(-1)
    setDigits(next)
    if (value && index < CODE_LENGTH - 1) inputRefs.current[index + 1]?.focus()
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, CODE_LENGTH)
    if (!pasted) return
    const next = [...digits]
    pasted.split('').forEach((d, i) => { next[i] = d })
    setDigits(next)
    inputRefs.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (digits.join('').length < CODE_LENGTH) return setError('Please enter the full 6-digit code.')
    router.push('/profile')
  }

  function handleResend() {
    if (countdown > 0) return
    setResent(true)
    setCountdown(30)
    setDigits(Array(CODE_LENGTH).fill(''))
    inputRefs.current[0]?.focus()
    setTimeout(() => setResent(false), 3000)
  }

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=80"
      imageAlt="Person checking phone for verification"
      quote="One quick tap and you're in — your campus marketplace is waiting."
      quoteAuthor="plug4uni team"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#e6f8f4] border border-[#c8ede5] flex items-center justify-center text-2xl mx-auto mb-5">
        ✉️
      </div>

      <div className="text-center mb-6">
        <h1 className="text-[1.75rem] tracking-tight text-[#0f1f1a] mb-1" style={{ fontFamily: '"Instrument Serif", serif' }}>
          Check your email
        </h1>
        <p className="text-sm text-[#4b6b62] leading-relaxed">
          We sent a 6-digit code to your email.<br />
          Enter it below to verify your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* OTP boxes */}
        <div className="flex gap-2 justify-center" onPaste={handlePaste}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={el => { inputRefs.current[i] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={e => handleDigit(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
              className={`w-12 h-14 rounded-xl border-2 bg-[#f4faf8] text-center text-xl font-bold text-[#0f1f1a] outline-none transition-all
                ${d
                  ? 'border-[#05b083] ring-2 ring-[#05b083]/10'
                  : 'border-[#c8ede5] focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10'
                }`}
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="text-[13px] text-center py-2.5 px-4 rounded-xl bg-pink-50 text-pink-700">
            {error}
          </p>
        )}

        {/* Resent success */}
        {resent && (
          <p className="text-[13px] text-center py-2.5 px-4 rounded-xl bg-[#e6f8f4] text-[#038a67]">
            Code resent! Check your inbox.
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-[#05b083] hover:bg-[#038a67] text-white font-semibold text-[15px] transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(5,176,131,0.28)]"
        >
          Verify Email →
        </button>
      </form>

      {/* Resend */}
      <p className="text-center text-sm text-[#4b6b62] mt-5">
        Didn't get the code?{' '}
        <button
          onClick={handleResend}
          disabled={countdown > 0}
          className={`font-semibold transition-colors ${countdown > 0 ? 'text-[#a0b8b2] cursor-not-allowed' : 'text-[#05b083] hover:underline cursor-pointer'}`}
        >
          {countdown > 0 ? `Resend in ${countdown}s` : 'Resend code'}
        </button>
      </p>

      <div className="h-px bg-[#c8ede5] my-4" />

      <p className="text-center text-sm">
        <Link href="/auth/login" className="text-[#05b083] font-semibold hover:underline">
          ← Back to login
        </Link>
      </p>
    </AuthLayout>
  )
}