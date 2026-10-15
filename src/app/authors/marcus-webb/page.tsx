import Link from 'next/link'

export const metadata = {
  title: 'Marcus Webb - Golf Simulator Reviewer | Top Golf Simulators',
  description: 'Marcus Webb is a 2 handicap golfer and former collegiate golfer who tests high-end golf simulators for accuracy and data depth.',
}

export default function MarcusWebbPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-start gap-6 mb-8">
        <img src="/images/marcus-webb.png" alt="Marcus Webb" className="w-24 h-24 rounded-full object-cover flex-shrink-0 ring-2 ring-[#C8A96E]" />
        <div>
          <h1 className="text-3xl font-bold text-[#1B3A2D] mb-1">Marcus Webb</h1>
          <p className="text-gray-600 mb-3">2 Handicap · Chicago, IL</p>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-[#1B3A2D]/10 text-[#1B3A2D] text-xs font-medium px-3 py-1 rounded-full">Former Collegiate Golfer</span>
            <span className="bg-[#1B3A2D]/10 text-[#1B3A2D] text-xs font-medium px-3 py-1 rounded-full">Foresight GC3 Owner</span>
            <span className="bg-[#1B3A2D]/10 text-[#1B3A2D] text-xs font-medium px-3 py-1 rounded-full">Medinah Member</span>
          </div>
        </div>
      </div>

      <blockquote className="border-l-4 border-[#C8A96E] pl-6 py-2 mb-8 bg-gray-50 rounded-r-lg">
        <p className="text-gray-700 italic text-lg leading-relaxed">
          &quot;I&apos;ve spent more time than I&apos;d like to admit calibrating launch monitors. At this point, if the numbers don&apos;t match a Trackman within 2%, I want to know why.&quot;
        </p>
      </blockquote>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Background</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Marcus Webb, 54, played collegiate golf at Duke University before spending his late 20s grinding the mini-tours. These days he runs a commercial real estate firm in Chicago — but golf never left.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A member at Medinah Country Club, Marcus plays Pebble Beach annually and has played Augusta National as a guest. His home simulator setup occupies a dedicated 10×18 room with a Foresight GC3 at its core.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When he tests equipment, he&apos;s comparing against the standard set by professional launch monitor setups. His reviews focus on ball speed accuracy, spin axis fidelity, outdoor performance validation, and software depth.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">What Marcus Tests For</h2>
        <ul className="space-y-2">
          {['Ball speed accuracy vs. Trackman baseline', 'Spin axis data and side spin measurement', 'Outdoor vs. indoor performance consistency', 'Software depth and course library quality', 'Build quality and long-term reliability'].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#C8A96E] mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Marcus&apos;s Reviews</h2>
        <div className="space-y-3">
          {[
            { title: 'Foresight GC3 Review', href: '/reviews/foresight-sports-gc3-review', tag: 'In-depth Review' },
            { title: 'SkyTrak+ Review', href: '/reviews/skytrak-plus-review', tag: 'In-depth Review' },
            { title: 'Full Swing KIT Review', href: '/reviews/full-swing-kit-review', tag: 'In-depth Review' },
            { title: 'Best Golf Simulators of 2024', href: '/best-golf-simulators', tag: 'Roundup' },
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
