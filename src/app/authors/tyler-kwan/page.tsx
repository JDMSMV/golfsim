import Link from 'next/link'

export const metadata = {
  title: 'Tyler Kwan - Golf Simulator Reviewer | Top Golf Simulators',
  description: 'Tyler Kwan is a 9 handicap software engineer who tests golf simulators for value, ease of setup, and family-friendliness.',
}

export default function TylerKwanPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-20 h-20 rounded-full bg-[#1B3A2D] flex items-center justify-center text-white font-semibold text-2xl flex-shrink-0">
          TK
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#1B3A2D] mb-1">Tyler Kwan</h1>
          <p className="text-gray-600 mb-3">9 Handicap · Austin, TX</p>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-[#1B3A2D]/10 text-[#1B3A2D] text-xs font-medium px-3 py-1 rounded-full">Software Engineer</span>
            <span className="bg-[#1B3A2D]/10 text-[#1B3A2D] text-xs font-medium px-3 py-1 rounded-full">SkyTrak+ Owner</span>
            <span className="bg-[#1B3A2D]/10 text-[#1B3A2D] text-xs font-medium px-3 py-1 rounded-full">Garage Sim Builder</span>
          </div>
        </div>
      </div>

      <blockquote className="border-l-4 border-[#C8A96E] pl-6 py-2 mb-8 bg-gray-50 rounded-r-lg">
        <p className="text-gray-700 italic text-lg leading-relaxed">
          &quot;I bought my first launch monitor during COVID to stay sane. Four years later I have a proper simulator room and a wife who&apos;s surprisingly supportive of it.&quot;
        </p>
      </blockquote>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Background</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tyler Kwan, 31, is a software engineer based in Austin, TX. He got into golf simulators during COVID as a way to keep playing when courses were closed — and never looked back.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Starting with a basic mat and net setup, Tyler has iterated his garage simulator over four years into a proper room with a SkyTrak+ setup. He plays Barton Creek Resort, TPC San Antonio, and local Austin courses regularly.
        </p>
        <p className="text-gray-700 leading-relaxed">
          His engineering background means he digs into the software side of simulators like no one else — UI, APIs, connectivity, and update cadences all factor into his ratings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">What Tyler Tests For</h2>
        <ul className="space-y-2">
          {['Value for money at each price point', 'Ease of initial setup and calibration', 'Family-friendliness and game modes', 'Software UI quality and update frequency', 'Portability for dual indoor/outdoor use'].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#C8A96E] mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Tyler&apos;s Reviews</h2>
        <div className="space-y-3">
          {[
            { title: 'FlightScope Mevo+ Review', href: '/reviews/flightscope-mevo-plus-review', tag: 'In-depth Review' },
            { title: 'Garmin Approach R10 Review', href: '/reviews/garmin-approach-r10-review', tag: 'In-depth Review' },
            { title: 'Best Budget Golf Simulators', href: '/reviews/best-golf-simulator-under-5000', tag: 'Guide' },
            { title: 'Garage Golf Simulator Guide', href: '/reviews/best-golf-simulator-for-garage', tag: 'Guide' },
            { title: 'Golf Simulator Setup Guide', href: '/reviews/home-golf-simulator-setup-guide', tag: 'Guide' },
          ].map((review) => (
            <Link key={review.href} href={review.href} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#1B3A2D] hover:bg-[#1B3A2D]/5 transition-colors group">
              <span className="font-medium text-gray-800 group-hover:text-[#1B3A2D]">{review.title}</span>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{review.tag}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
