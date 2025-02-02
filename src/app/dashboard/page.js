import Link from 'next/link';
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  // Fetch reviews from your API (server component)
//   const reviews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`).then(res => res.json());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-sm p-4">
        <nav className="space-y-2">
          <Link href="/dashboard" className="block p-2 hover:bg-gray-100 rounded-lg">🏠 Dashboard</Link>
          <Link href="/reviews" className="block p-2 hover:bg-gray-100 rounded-lg">📨 Reviews</Link>
          <Link href="/analytics" className="block p-2 hover:bg-gray-100 rounded-lg">📊 Analytics</Link>
          <Link href="/settings" className="block p-2 hover:bg-gray-100 rounded-lg">⚙️ Settings</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-8">Welcome, {session.user.name}!</h1>
        
        {/* Review Inbox Preview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Reviews</h2>
            <Link href="/reviews" className="text-blue-600 hover:underline">View All →</Link>
          </div>
          
          <div className="space-y-4">
            {/* {reviews.slice(0, 3).map(review => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-sm ${review.rating >= 4 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {review.rating} ★
                  </span>
                  <span className="text-sm text-gray-500">{review.platform}</span>
                </div>
                <p className="text-gray-800">{review.text}</p>
              </div>
            ))} */}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2">Average Rating</h3>
            <p className="text-3xl font-bold">4.2 ★</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2">Total Reviews</h3>
            <p className="text-3xl font-bold">142</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2">Response Rate</h3>
            <p className="text-3xl font-bold">89%</p>
          </div>
        </div>
      </div>
    </div>
  );
}