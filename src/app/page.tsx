export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ReviewPulse</h1>
          <div className="flex items-center gap-6">
            <a href="/features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Start Free Trial
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Manage Your Business Reviews in One Place
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using ReviewPulse to boost their online reputation. 
            Track, respond, and grow with AI-powered review management.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700"
            >
              Get Started - 14-Day Free Trial
            </a>
            <a
              href="/demo"
              className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-lg text-lg hover:bg-gray-50"
            >
              Watch Demo
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600">
            <p className="flex items-center gap-2">
              <span className="font-semibold">4.9/5</span> 
              ⭐⭐⭐⭐⭐ 
              <span>from 200+ reviews</span>
            </p>
            <p>Trusted by 2,000+ businesses</p>
            <p>95% customer satisfaction</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">🔄 Multi-Platform Sync</h3>
            <p className="text-gray-600">Aggregate reviews from Google, Yelp, Facebook, and more in a single dashboard. Never miss a review again.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">🤖 AI-Powered Replies</h3>
            <p className="text-gray-600">Save hours with smart response suggestions. Our AI learns your tone and brand voice.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">🔔 Real-Time Alerts</h3>
            <p className="text-gray-600">Instant notifications for new reviews. Respond quickly to maintain your reputation.</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-blue-600 text-white rounded-xl p-12 mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">45%</p>
              <p>Faster Response Time</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">3.2x</p>
              <p>More Reviews Managed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">28%</p>
              <p>Rating Improvement</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Loved by Businesses Like Yours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"ReviewPulse has transformed how we handle customer feedback. The AI suggestions are spot-on, and we've seen a significant improvement in our response times."</p>
              <p className="font-semibold">Sarah Chen</p>
              <p className="text-gray-500">Restaurant Owner</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">"The multi-platform integration is seamless. We're saving hours each week on review management, and our ratings have never been better."</p>
              <p className="font-semibold">Mike Thompson</p>
              <p className="text-gray-500">Retail Chain Manager</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 bg-gray-50">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Review Management?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of successful businesses using ReviewPulse</p>
          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700"
            >
              Start Your Free Trial
            </a>
            <a
              href="/contact"
              className="border border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-lg text-lg hover:bg-gray-50"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">ReviewPulse</h3>
              <p>Making review management effortless</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="/features" className="hover:text-white">Features</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/integrations" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/guides" className="hover:text-white">Guides</a></li>
                <li><a href="/support" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/careers" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}