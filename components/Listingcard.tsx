// components/ListingCard.tsx

export interface Listing {
  id: string
  emoji: string
  emojiBg: string   // hex color string e.g. '#e6f8f4'
  tag: string
  title: string
  price: string
  university: string
}

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer group"
      style={{
        background: 'white',
        border: '1.5px solid #c8ede5',
        boxShadow: '0 2px 10px rgba(5,176,131,0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 10px 32px rgba(5,176,131,0.14)'
        e.currentTarget.style.borderColor = '#05b083'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(5,176,131,0.06)'
        e.currentTarget.style.borderColor = '#c8ede5'
      }}
    >
      {/* Image placeholder */}
      <div
        className="w-full h-40 flex items-center justify-center text-4xl"
        style={{ background: listing.emojiBg }}
      >
        {listing.emoji}
      </div>

      <div className="p-4">
        <span
          className="block text-[0.68rem] font-semibold uppercase tracking-[0.07em] mb-1"
          style={{ color: '#05b083' }}
        >
          {listing.tag}
        </span>
        <h3
          className="text-[0.93rem] font-semibold leading-snug mb-3"
          style={{ color: '#0f1f1a' }}
        >
          {listing.title}
        </h3>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            className="text-[1.05rem] font-bold"
            style={{ fontFamily: '"Instrument Serif", serif', color: '#038a67' }}
          >
            {listing.price}
          </span>
          <span className="text-[0.72rem]" style={{ color: '#4b6b62' }}>
            📍 {listing.university}
          </span>
        </div>
      </div>
    </div>
  )
}