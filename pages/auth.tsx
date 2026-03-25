// pages/auth.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SCHOOLS = [
  { value: 'unilag', label: 'University of Lagos (UNILAG)' },
  { value: 'oau',    label: 'Obafemi Awolowo University (OAU)' },
]

type Mode = 'choose' | 'register' | 'login'

export default function Auth() {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>('choose')

  // Register fields
  const [name,    setName]    = useState('')
  const [phone,   setPhone]   = useState('')
  const [school,  setSchool]  = useState('')
  const [is18,    setIs18]    = useState(false)
  const [regErr,  setRegErr]  = useState('')

  // Login fields
  const [identifier, setIdentifier] = useState('')
  const [loginErr,   setLoginErr]   = useState('')

  function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setRegErr('')
    if (!name.trim())   return setRegErr('Please enter your full name.')
    if (!phone.trim())  return setRegErr('Please enter your phone number.')
    if (!school)        return setRegErr('Please select your university.')
    if (!is18)          return setRegErr('You must confirm you are 18 or older.')
    router.push('/profile')
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoginErr('')
    if (!identifier.trim()) return setLoginErr('Please enter your phone number or email.')
    router.push('/profile')
  }

  // ── shared style tokens ──────────────────────────────────
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid #c8ede5',
    background: '#f4faf8',
    fontSize: '14px',
    color: '#0f1f1a',
    outline: 'none',
    fontFamily: '"DM Sans", sans-serif',
    transition: 'border-color 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#0f1f1a',
    marginBottom: '6px',
  }
  const primaryBtn: React.CSSProperties = {
    width: '100%',
    padding: '13px',
    borderRadius: '999px',
    border: 'none',
    background: '#05b083',
    color: 'white',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: '"DM Sans", sans-serif',
    boxShadow: '0 4px 16px rgba(5,176,131,0.28)',
    transition: 'opacity 0.2s',
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: 'linear-gradient(145deg, #edfaf5 0%, #f4faf8 50%, #eef6ff 100%)' }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-3xl tracking-tight mb-10"
        style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
      >
        plug<span style={{ color: '#05b083' }}>4</span>uni
      </Link>

      {/* Card */}
      <div
        className="w-full max-w-md rounded-3xl p-8"
        style={{
          background: 'white',
          border: '1.5px solid #c8ede5',
          boxShadow: '0 8px 40px rgba(5,176,131,0.10)',
        }}
      >

        {/* ── CHOOSE ── */}
        {mode === 'choose' && (
          <div className="flex flex-col items-center text-center gap-3">
            <h1
              className="text-3xl tracking-tight mb-1"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
            >
              Welcome 👋
            </h1>
            <p className="text-sm mb-6" style={{ color: '#4b6b62' }}>
              Join your campus marketplace or sign back in.
            </p>

            <button
              onClick={() => setMode('register')}
              style={primaryBtn}
            >
              Create an account
            </button>

            <button
              onClick={() => setMode('login')}
              className="w-full py-3 rounded-full text-sm font-semibold transition-all hover:bg-[#e6f8f4]"
              style={{ border: '1.5px solid #c8ede5', color: '#038a67', background: 'white', fontFamily: '"DM Sans", sans-serif', cursor: 'pointer' }}
            >
              Log in
            </button>

            <p className="text-[11px] mt-2" style={{ color: '#4b6b62' }}>
              By continuing you agree to our{' '}
              <a href="/terms" style={{ color: '#05b083' }}>Terms</a> &{' '}
              <a href="/privacy" style={{ color: '#05b083' }}>Privacy Policy</a>
            </p>
          </div>
        )}

        {/* ── REGISTER ── */}
        {mode === 'register' && (
          <>
            <button
              onClick={() => setMode('choose')}
              className="flex items-center gap-1 text-sm mb-6 hover:opacity-70 transition-opacity"
              style={{ color: '#4b6b62', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}
            >
              ← Back
            </button>

            <h1
              className="text-2xl tracking-tight mb-1"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
            >
              Create your account
            </h1>
            <p className="text-sm mb-6" style={{ color: '#4b6b62' }}>
              Takes less than a minute.
            </p>

            <form onSubmit={handleRegister} className="flex flex-col gap-4">

              {/* Name */}
              <div>
                <label style={labelStyle}>Full name</label>
                <input
                  type="text"
                  placeholder="e.g. Tunde Adeyemi"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#05b083')}
                  onBlur={e  => (e.target.style.borderColor = '#c8ede5')}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone number</label>
                <input
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#05b083')}
                  onBlur={e  => (e.target.style.borderColor = '#c8ede5')}
                />
              </div>

              {/* School */}
              <div>
                <label style={labelStyle}>University</label>
                <select
                  value={school}
                  onChange={e => setSchool(e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2305b083' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: '40px' }}
                  onFocus={e => (e.target.style.borderColor = '#05b083')}
                  onBlur={e  => (e.target.style.borderColor = '#c8ede5')}
                >
                  <option value="" disabled>Select your university</option>
                  {SCHOOLS.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>

              {/* Age confirmation */}
              <label
                className="flex items-start gap-3 cursor-pointer p-4 rounded-2xl transition-all"
                style={{
                  background: is18 ? '#e6f8f4' : '#f4faf8',
                  border: `1.5px solid ${is18 ? '#05b083' : '#c8ede5'}`,
                }}
              >
                <input
                  type="checkbox"
                  checked={is18}
                  onChange={e => setIs18(e.target.checked)}
                  className="mt-0.5 shrink-0 accent-[#05b083]"
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span className="text-sm leading-relaxed" style={{ color: '#0f1f1a' }}>
                  I confirm that I am <strong>18 years or older</strong>
                </span>
              </label>

              {/* Error */}
              {regErr && (
                <p className="text-sm text-center py-2.5 px-4 rounded-xl" style={{ background: '#fce7f3', color: '#9d174d' }}>
                  {regErr}
                </p>
              )}

              <button type="submit" style={{ ...primaryBtn, marginTop: '4px' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Create Account →
              </button>
            </form>

            <p className="text-center text-sm mt-5" style={{ color: '#4b6b62' }}>
              Already have an account?{' '}
              <button onClick={() => setMode('login')} style={{ color: '#05b083', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                Log in
              </button>
            </p>
          </>
        )}

        {/* ── LOGIN ── */}
        {mode === 'login' && (
          <>
            <button
              onClick={() => setMode('choose')}
              className="flex items-center gap-1 text-sm mb-6 hover:opacity-70 transition-opacity"
              style={{ color: '#4b6b62', background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}
            >
              ← Back
            </button>

            <h1
              className="text-2xl tracking-tight mb-1"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
            >
              Welcome back 👋
            </h1>
            <p className="text-sm mb-6" style={{ color: '#4b6b62' }}>
              Log in with your phone number or email.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label style={labelStyle}>Phone number or email</label>
                <input
                  type="text"
                  placeholder="e.g. 08012345678 or you@uni.edu"
                  value={identifier}
                  onChange={e => setIdentifier(e.target.value)}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#05b083')}
                  onBlur={e  => (e.target.style.borderColor = '#c8ede5')}
                />
              </div>

              {/* Error */}
              {loginErr && (
                <p className="text-sm text-center py-2.5 px-4 rounded-xl" style={{ background: '#fce7f3', color: '#9d174d' }}>
                  {loginErr}
                </p>
              )}

              <button type="submit" style={{ ...primaryBtn, marginTop: '4px' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Continue →
              </button>
            </form>

            <p className="text-center text-sm mt-5" style={{ color: '#4b6b62' }}>
              Don't have an account?{' '}
              <button onClick={() => setMode('register')} style={{ color: '#05b083', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                Sign up
              </button>
            </p>
          </>
        )}

      </div>
    </div>
  )
}