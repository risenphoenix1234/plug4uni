// pages/dashboard/listings.tsx
import { useState } from 'react'
import DashboardLayout from '../../components/dashboard/DashboardLayout'

const CATEGORIES = ['Textbooks', 'Gadgets', 'Fashion', 'Food & Snacks', 'Furniture', 'Art & Craft', 'Games', 'Services']

interface Listing {
  id: string
  title: string
  price: string
  category: string
  description: string
  condition: string
}

const EMPTY: Omit<Listing, 'id'> = { title: '', price: '', category: '', description: '', condition: 'used-good' }

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [form,     setForm]     = useState({ ...EMPTY })
  const [editing,  setEditing]  = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [error,    setError]    = useState('')
  const [success,  setSuccess]  = useState('')

  const MAX = 3
  const canAdd = listings.length < MAX

  function openAdd() {
    setForm({ ...EMPTY })
    setEditing(null)
    setError('')
    setShowForm(true)
  }

  function openEdit(listing: Listing) {
    const { id, ...rest } = listing
    setForm(rest)
    setEditing(id)
    setError('')
    setShowForm(true)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.title.trim())    return setError('Please enter a title.')
    if (!form.price.trim())    return setError('Please enter a price.')
    if (!form.category)        return setError('Please select a category.')

    if (editing) {
      setListings(prev => prev.map(l => l.id === editing ? { id: editing, ...form } : l))
      setSuccess('Listing updated!')
    } else {
      setListings(prev => [...prev, { id: Date.now().toString(), ...form }])
      setSuccess('Listing added!')
    }

    setShowForm(false)
    setEditing(null)
    setForm({ ...EMPTY })
    setTimeout(() => setSuccess(''), 3000)
  }

  function handleDelete(id: string) {
    setListings(prev => prev.filter(l => l.id !== id))
    if (showForm && editing === id) setShowForm(false)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[#c8ede5] bg-[#f4faf8] text-sm text-[#0f1f1a] placeholder:text-[#a0b8b2] outline-none focus:border-[#05b083] focus:ring-2 focus:ring-[#05b083]/10 transition-all"
  const labelCls = "block text-[13px] font-semibold text-[#0f1f1a] mb-1.5"

  const conditionOpts = [
    { value: 'brand-new',  label: '✨ Brand new' },
    { value: 'used-good',  label: '👍 Used — good condition' },
    { value: 'used-fair',  label: '🔧 Used — fair condition' },
  ]

  return (
    <DashboardLayout title="My Listings" subtitle={`${listings.length} of ${MAX} listings used`}>

      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {[...Array(MAX)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-2 rounded-full transition-all ${i < listings.length ? 'bg-[#05b083]' : 'bg-[#c8ede5]'}`}
            />
          ))}
        </div>
        <button
          onClick={openAdd}
          disabled={!canAdd}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all
            ${canAdd
              ? 'bg-[#05b083] hover:bg-[#038a67] text-white shadow-[0_3px_12px_rgba(5,176,131,0.28)] hover:-translate-y-0.5'
              : 'bg-[#c8ede5] text-[#4b6b62] cursor-not-allowed'
            }`}
        >
          + Add listing
          {!canAdd && <span className="text-[11px] font-normal">(limit reached)</span>}
        </button>
      </div>

      {success && (
        <div className="mb-4 text-sm text-[#038a67] bg-[#e6f8f4] border border-[#c8ede5] px-4 py-3 rounded-xl">
          ✓ {success}
        </div>
      )}

      {/* Listing cards */}
      {listings.length === 0 && !showForm && (
        <div className="bg-white border border-dashed border-[#c8ede5] rounded-2xl p-12 text-center">
          <p className="text-3xl mb-3">📦</p>
          <p className="font-semibold text-[#0f1f1a] mb-1">No listings yet</p>
          <p className="text-sm text-[#4b6b62] mb-4">Add up to 3 items to sell on your campus.</p>
          <button
            onClick={openAdd}
            className="text-sm font-semibold text-white bg-[#05b083] hover:bg-[#038a67] px-5 py-2.5 rounded-full transition-all"
          >
            + Add your first listing
          </button>
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {listings.map(listing => (
          <div
            key={listing.id}
            className="bg-white border border-[#c8ede5] rounded-2xl p-5 flex flex-col gap-3"
          >
            {/* Category badge */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#05b083] bg-[#e6f8f4] px-2.5 py-1 rounded-full">
                {listing.category}
              </span>
              <span className="text-[11px] text-[#4b6b62] capitalize">{listing.condition.replace('-', ' ')}</span>
            </div>

            <div>
              <h3 className="font-semibold text-[#0f1f1a] text-sm leading-snug">{listing.title}</h3>
              {listing.description && (
                <p className="text-xs text-[#4b6b62] mt-1 line-clamp-2">{listing.description}</p>
              )}
            </div>

            <p className="text-lg font-bold text-[#038a67]" style={{ fontFamily: '"Instrument Serif", serif' }}>
              ₦{listing.price}
            </p>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => openEdit(listing)}
                className="flex-1 text-xs font-semibold text-[#038a67] border border-[#c8ede5] bg-[#f4faf8] hover:bg-[#e6f8f4] py-2 rounded-xl transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(listing.id)}
                className="flex-1 text-xs font-semibold text-[#9d174d] border border-pink-100 bg-pink-50 hover:bg-pink-100 py-2 rounded-xl transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Empty slot placeholders */}
        {canAdd && listings.length > 0 && [...Array(MAX - listings.length)].map((_, i) => (
          <button
            key={i}
            onClick={openAdd}
            className="bg-white border border-dashed border-[#c8ede5] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 hover:border-[#05b083] hover:bg-[#f4faf8] transition-all min-h-[180px]"
          >
            <span className="text-2xl text-[#c8ede5]">+</span>
            <span className="text-xs text-[#4b6b62] font-medium">Add listing</span>
          </button>
        ))}
      </div>

      {/* Add / Edit form */}
      {showForm && (
        <div className="bg-white border border-[#c8ede5] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-[#0f1f1a]">
              {editing ? 'Edit listing' : 'New listing'}
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-[#4b6b62] hover:text-[#0f1f1a] text-xl leading-none transition-colors"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className={labelCls}>Item title</label>
              <input
                type="text"
                placeholder="e.g. Organic Chemistry textbook"
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                className={inputCls}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Price (₦)</label>
                <input
                  type="number"
                  placeholder="e.g. 4500"
                  value={form.price}
                  onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Category</label>
                <select
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2305b083' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 14px center',
                  }}
                >
                  <option value="" disabled>Select category</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className={labelCls}>Condition</label>
              <div className="flex gap-2 flex-wrap">
                {conditionOpts.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, condition: opt.value }))}
                    className={`text-xs font-medium px-3.5 py-2 rounded-full border transition-all
                      ${form.condition === opt.value
                        ? 'bg-[#e6f8f4] border-[#05b083] text-[#038a67]'
                        : 'bg-[#f4faf8] border-[#c8ede5] text-[#4b6b62] hover:border-[#05b083]'
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls}>Description <span className="font-normal text-[#4b6b62]">(optional)</span></label>
              <textarea
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Describe the item, any flaws, reason for selling..."
                rows={3}
                className={`${inputCls} resize-none`}
              />
            </div>

            {error && (
              <p className="text-[13px] text-center py-2.5 px-4 rounded-xl bg-pink-50 text-pink-700">{error}</p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#05b083] hover:bg-[#038a67] text-white text-sm font-semibold transition-all shadow-[0_3px_12px_rgba(5,176,131,0.25)] hover:-translate-y-0.5"
              >
                {editing ? 'Save changes' : 'Post listing'} →
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2.5 rounded-full border border-[#c8ede5] text-sm font-medium text-[#4b6b62] hover:bg-[#f4faf8] transition-all"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      )}

    </DashboardLayout>
  )
}