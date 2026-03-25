// pages/dashboard/messages.tsx
import DashboardLayout from '../../components/dashboard/DashboardLayout'

export default function MessagesPage() {
  return (
    <DashboardLayout title="Messages" subtitle="Chat with buyers and sellers">
      <div className="bg-white border border-dashed border-[#c8ede5] rounded-2xl p-16 text-center">
        <p className="text-3xl mb-3">💬</p>
        <p className="font-semibold text-[#0f1f1a] mb-1">No messages yet</p>
        <p className="text-sm text-[#4b6b62]">When someone messages you about a listing, it'll show up here.</p>
      </div>
    </DashboardLayout>
  )
}