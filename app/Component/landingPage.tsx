import React from 'react';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Inspiring Quotes Section */}
      <section className="quotes-section bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 py-16 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8">Words of Wisdom</h2>
          <p className="text-lg mb-8">
            Discover inspiration for your journey through these timeless quotes.
          </p>
          <div className="quote-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quote-card p-6 bg-white text-gray-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
              <p className="italic text-lg">
              &quot; The journey of a thousand miles begins with a single step&quot;.
              </p>
              <span className="block mt-4 font-bold text-sm">- Lao Tzu</span>
            </div>
            <div className="quote-card p-6 bg-white text-gray-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
              <p className="italic text-lg">
              &quot;Success is not final, failure is not fatal: It is the courage to continue that counts&quot;.
              </p>
              <span className="block mt-4 font-bold text-sm">- Winston Churchill</span>
            </div>
            <div className="quote-card p-6 bg-white text-gray-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300">
              <p className="italic text-lg">
              &quot;Don&#34;t watch the clock; do what it does. Keep going&quot;.
              </p>
              <span className="block mt-4 font-bold text-sm">- Sam Levenson</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
