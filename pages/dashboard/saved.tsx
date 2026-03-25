// pages/dashboard/saved.tsx
import DashboardLayout from '../../components/dashboard/DashboardLayout'

export default function SavedPage() {
  return (
    <DashboardLayout title="Saved Items" subtitle="Listings you've bookmarked">
      <div className="bg-white border border-dashed border-[#c8ede5] rounded-2xl p-16 text-center">
        <p className="text-3xl mb-3">♡</p>
        <p className="font-semibold text-[#0f1f1a] mb-1">Nothing saved yet</p>
        <p className="text-sm text-[#4b6b62]">Browse the marketplace and save items you're interested in.</p>
      </div>
    </DashboardLayout>
  )
}