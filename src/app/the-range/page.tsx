import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Range — Golf Simulator Tips, News & Guides | Top Golf Simulators',
  description: 'Simulator setup tips, practice drills, new product news, and guides from real golfers who actually use this stuff.',
}

const posts = [
  {
    slug: 'best-practice-drills-golf-simulator',
    title: '7 Practice Drills That Actually Work on a Golf Simulator',
    date: 'October 12, 2026',
    author: 'Tyler Kwan',
    authorImg: '/images/tyler-kwan.png',
    excerpt: 'Most people treat their simulator like a game. The ones who actually improve treat it like a practice facility. Here are the drills that make the difference.',
    tag: 'Practice',
  },
  {
    slug: 'skytrak-plus-price-drop',
    title: 'SkyTrak+ Hits Its Lowest Price of the Year — Is Now the Time to Buy?',
    date: 'October 8, 2026',
    author: 'Marcus Webb',
    authorImg: '/images/marcus-webb.png',
    excerpt: 'The SkyTrak+ has been discounted to $1,995 at several retailers. We break down whether this is the right time to pull the trigger or wait for the next generation.',
    tag: 'Deals',
  },
  {
    slug: 'garage-golf-simulator-ceiling-height',
    title: 'The One Thing People Get Wrong When Building a Garage Simulator',
    date: 'October 3, 2026',
    author: 'Tyler Kwan',
    authorImg: '/images/tyler-kwan.png',
    excerpt: "Ceiling height. Everyone obsesses over the screen, the launch monitor, the mat. Then they can't finish their driver. Here's exactly what you need to know before you build.",
    tag: 'Setup',
  },
]

export default function TheRangePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-14">
        <p className="text-[#C8A96E] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Editorial</p>
        <h1 className="font-serif text-5xl text-[#1B3A2D] mb-4">The Range</h1>
        <p className="text-gray-500 text-lg font-light max-w-xl">
          Simulator tips, practice drills, gear news, and the occasional hot take — from golfers who actually use this stuff.
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="grid md:grid-cols-[1fr_2fr] gap-8 pb-12 border-b border-gray-100 last:border-0">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#C8A96E] font-semibold mb-3">{post.tag}</span>
              <p className="text-gray-400 text-xs">{post.date}</p>
            </div>
            <div>
              <Link href={`/the-range/${post.slug}`}>
                <h2 className="font-serif text-2xl text-[#1B3A2D] leading-snug hover:text-[#C8A96E] transition-colors mb-3 cursor-pointer">{post.title}</h2>
              </Link>
              <p className="text-gray-500 leading-relaxed mb-5 font-light">{post.excerpt}</p>
              <div className="flex items-center gap-3">
                <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm text-gray-600 font-medium">{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
