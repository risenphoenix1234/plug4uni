// components/FreshListings.tsx
import ListingCard, { Listing } from './Listingcard'

const LISTINGS: Listing[] = [
  {
    id: '1',
    emoji: '📚',
    emojiBg: '#e6f8f4',
    tag: 'Textbooks',
    title: 'Organic Chemistry, 3rd Ed.',
    price: '₦4,500',
    university: 'UNILAG',
  },
  {
    id: '2',
    emoji: '💻',
    emojiBg: '#eef6ff',
    tag: 'Gadgets',
    title: 'Oraimo Wireless Earbuds',
    price: '₦8,000',
    university: 'OAU',
  },
  {
    id: '3',
    emoji: '👕',
    emojiBg: '#fce7f3',
    tag: 'Fashion',
    title: 'Thrifted Oversized Hoodie',
    price: '₦3,200',
    university: 'LASU',
  },
  {
    id: '4',
    emoji: '🪑',
    emojiBg: '#fef3e6',
    tag: 'Furniture',
    title: 'Reading Desk — barely used',
    price: '₦12,000',
    university: 'ABU Zaria',
  },
]

export default function FreshListings() {
  return (
    <section className="px-6 py-20" style={{ background: '#f4faf8' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color: '#05b083' }}>
              Just in
            </p>
            <h2
              className="text-3xl md:text-4xl tracking-tight"
              style={{ fontFamily: '"Instrument Serif", serif', color: '#0f1f1a' }}
            >
              Fresh listings near you
            </h2>
          </div>
          <button
            className="shrink-0 text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:bg-[#e6f8f4]"
            style={{ border: '1.5px solid #c8ede5', color: '#038a67', background: 'white' }}
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {LISTINGS.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}