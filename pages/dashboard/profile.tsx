// pages/dashboard/profile.tsx
import { useState, useRef } from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'

const SCHOOLS = [
  { value: 'unilag', label: 'University of Lagos (UNILAG)' },
  { value: 'oau',    label: 'Obafemi Awolowo University (OAU)' },
]

export default function ProfilePage() {
  const [avatar,  setAvatar]  = useState<string | null>(null)
  const [name,    setName]    = useState('Tunde Adeyemi')
  const [phone,   setPhone]   = useState('08012345678')
  const [school,  setSchool]  = useState('unilag')
  const [bio,     setBio]     = useState('')
  const [saved,   setSaved]   = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => setAvatar(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[#c8ede5] bg-[#f4faf8] text-sm text-[#0f1f1a] placeholder:text-[#a0b8b2] outline-none focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10 transition-all"
  const labelCls = "block text-[13px] font-semibold text-[#0f1f1a] mb-1.5"

  return (
    <DashboardLayout title="My Profile" subtitle="Manage your account details">

      <div className="max-w-2xl">

        {/* Avatar card */}
        <div className="bg-white rounded-2xl border border-[#c8ede5] p-6 mb-5">
          <h2 className="font-semibold text-[#0f1f1a] mb-4">Profile picture</h2>
          <div className="flex items-center gap-5">

            {/* Avatar display */}
            <div className="relative shrink-0">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#05b083]"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#e6f8f4] border-2 border-[#c8ede5] flex items-center justify-center text-2xl font-bold text-[#05b083]"
                  style={{ fontFamily: '"Instrument Serif", serif' }}>
                  {name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
              )}
              {/* Edit badge */}
              <button
                onClick={() => fileRef.current?.click()}
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#05b083] border-2 border-white flex items-center justify-center text-white text-xs hover:bg-[#038a67] transition-colors"
              >
                ✎
              </button>
            </div>

            <div>
              <p className="text-sm font-medium text-[#0f1f1a] mb-1">Upload a profile photo</p>
              <p className="text-xs text-[#4b6b62] mb-3">JPG, PNG or GIF — max 5MB</p>
              <button
                onClick={() => fileRef.current?.click()}
                className="text-xs font-semibold text-[#05b083] border border-[#c8ede5] bg-[#f4faf8] hover:bg-[#e6f8f4] px-4 py-2 rounded-full transition-all"
              >
                Choose photo
              </button>
              {avatar && (
                <button
                  onClick={() => setAvatar(null)}
                  className="ml-2 text-xs font-medium text-[#9d174d] hover:underline"
                >
                  Remove
                </button>
              )}
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
        </div>

        {/* Profile form */}
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-[#c8ede5] p-6">
          <h2 className="font-semibold text-[#0f1f1a] mb-5">Account details</h2>

          <div className="flex flex-col gap-4">

            <div>
              <label className={labelCls}>Full name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>Phone number</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>University</label>
              <select
                value={school}
                onChange={e => setSchool(e.target.value)}
                className={`${inputCls} cursor-pointer appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2305b083' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                }}
              >
                {SCHOOLS.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelCls}>Bio <span className="font-normal text-[#4b6b62]">(optional)</span></label>
              <textarea
                value={bio}
                onChange={e => setBio(e.target.value)}
                placeholder="Tell your campus community a little about you..."
                rows={3}
                maxLength={160}
                className={`${inputCls} resize-none`}
              />
              <p className="text-[11px] text-[#4b6b62] mt-1 text-right">{bio.length}/160</p>
            </div>

          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#05b083] hover:bg-[#038a67] text-white text-sm font-semibold transition-all shadow-[0_3px_12px_rgba(5,176,131,0.28)] hover:-translate-y-0.5"
            >
              Save changes
            </button>
            {saved && (
              <span className="text-sm text-[#038a67] font-medium animate-pulse">
                ✓ Saved!
              </span>
            )}
          </div>
        </form>

      </div>
    </DashboardLayout>
  )
}