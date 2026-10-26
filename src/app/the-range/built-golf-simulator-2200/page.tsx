import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "I Built a Golf Simulator for $2,200. Here's What I'd Do Differently. | The Range",
  description:
    "Tyler Kwan documents every mistake he made building a home golf simulator in his Austin garage — cheap nets, the wrong projector, an 8-foot-9 ceiling scare, and the upgrade he should have started with.",
};

export default function BuiltGolfSimulator2200Page() {
  return (
    <div className="bg-gs-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Category Label */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">
          The Range
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-6">
          I Built a Golf Simulator for $2,200. Here&apos;s What I&apos;d Do Differently.
        </h1>

        {/* Subhead */}
        <p className="font-inter text-lg text-gs-muted font-light mb-8 leading-relaxed">
          Every bad buy, every &quot;this will probably work&quot; shortcut, and the one measurement I almost forgot that would have ended the whole project.
        </p>

        {/* Author Byline */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
          <img
            src="/images/tyler-kwan.png"
            alt="Tyler Kwan"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A96E]"
          />
          <div>
            <p className="font-semibold text-[#1B3A2D] text-sm">Tyler Kwan</p>
            <p className="text-xs text-gray-500">9 handicap &middot; Austin, TX &middot; Published October 26, 2026</p>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <p>
            Early 2026, I decided I was going to build a golf simulator in my garage. I had about three grand to spend, a two-car garage I&apos;d been &quot;planning to clean out&quot; for approximately four years, and the confidence of someone who had never built a golf simulator before. That last part is the problem.
          </p>

          <p>
            I&apos;m a software engineer by trade. I spend all day thinking in systems. Dependencies, edge cases, what breaks when you skip a step. And yet, when it came to the single most expensive hobby project I&apos;ve undertaken, I bought things in completely the wrong order and basically had to rebuild from scratch. Twice.
          </p>

          <p>
            Here&apos;s how it went, what it actually cost me, and what I&apos;d tell myself if I could go back to January.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            Mistake #1: Buying the Launch Monitor First
          </h2>

          <p>
            My first purchase was the{' '}
            <Link href="/reviews/garmin-approach-r10-review" className="text-gs-green underline underline-offset-2 hover:text-gs-gold transition-colors">
              Garmin Approach R10
            </Link>
            {' '}at $599. I saw a YouTube video, thought it looked incredible for the price, and hit &quot;buy&quot; before I&apos;d thought about a single other thing. No net. No screen. No mat. No projector. No idea what my garage ceiling height was.
          </p>

          <p>
            The R10 sat in its box for six days while I figured out what else I needed. That should have been a sign.
          </p>

          <p>
            The right order — the order I&apos;ll give you at the end of this article — is to plan the entire setup before you buy anything. The launch monitor is actually one of the last decisions you should make, because it depends heavily on how much space you have, what form factor works in your room, and how serious you are about data quality. I had it backwards. Completely.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            The $89 Net That Was Never Going to Work
          </h2>

          <p>
            After the R10 arrived, I needed something to hit into. I found a practice net on Amazon for $89, the kind with a photo of someone hitting wedges into it in a backyard. Looked fine. I bought it.
          </p>

          <p>
            Within two weeks I knew it was a mistake. It was too small — barely 7 feet wide. It had no return chute, so every ball I hit rolled somewhere random in my garage. And most critically: it was fabric, with a loose black back panel. There was nothing to project onto. For a hitting screen, I needed a taut, opaque, impact-resistant surface. What I had was basically a laundry bag on poles.
          </p>

          <p>
            The $89 net is in a donation pile somewhere. It wasn&apos;t bad for what it was designed for. It just wasn&apos;t designed for what I was trying to do.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            The Hardware Store Mat (Don&apos;t)
          </h2>

          <p>
            While I was waiting for my net to arrive, I ran to Home Depot and grabbed a piece of synthetic turf — the kind meant for front porches and outdoor spaces. It was $65, looked exactly like a golf mat if you squinted, and I told myself it would be fine for a few months.
          </p>

          <p>
            It was not fine. The pile was too long and way too soft, which meant I could clip the top of the ball with a terrible swing and have no idea I&apos;d done it. On a real fairway, a fat shot gives you instant feedback — you feel the ground, the ball barely moves, your ego takes a hit. On this mat, fat shots just... happened quietly. I was developing bad habits in slow motion and had no idea.
          </p>

          <p>
            I eventually trashed it. The proper replacement — a Country Club Elite or similar mat with the right pile height and firm subsurface — runs $150 to $200. I should have just bought that.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            The 15-Minute Panic About My Ceiling
          </h2>

          <p>
            This is the one that almost ended the whole project before it started. I had the R10, I was ready to set it up in the garage, and it occurred to me — maybe I should measure the ceiling height. I grabbed a tape measure. Eight feet, nine inches.
          </p>

          <p>
            I immediately went online and typed something like &quot;do I have enough ceiling height for a golf simulator.&quot; The results were not encouraging. Most sources said you needed at least 9 feet, ideally 10. Several forums had posts from people who&apos;d abandoned their garage plans entirely.
          </p>

          <p>
            I spent about 15 minutes genuinely stressed about this before someone in a simulator forum walked me through the actual math. I&apos;m 5&apos;10&quot;. My driver swing tops out around 8.3 feet at the peak of my backswing, maybe 8.4 on a really aggressive swing. With 8&apos;9&quot;, I had about 5 inches of clearance. Tight, but workable — especially since I&apos;m not swinging irons as high as a driver.
          </p>

          <p>
            I made it. But the point is: I should have measured the ceiling before I bought the first thing. Height, depth, width. All three. Your launch monitor choice, your projector choice, your screen placement — all of it flows from those three numbers. I did this step last. Do it first.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            The Projector Situation Was Embarrassing
          </h2>

          <p>
            I bought a standard throw projector because it was $280 and I&apos;d seen it mentioned in a few budget simulator builds. The problem with a standard throw projector is that you need a lot of distance to get a large image. For an 8-foot-wide picture, I needed the projector 13 to 15 feet away from the screen.
          </p>

          <p>
            My garage is 12 feet deep. Do that math.
          </p>

          <p>
            I spent one afternoon trying to rig the projector through the garage door opening — like, literally hanging it outside the garage, angled in — before I accepted that this wasn&apos;t going to work. I returned the projector (thankfully within the window) and bought a short-throw unit for $420. Night and day. The short-throw sits maybe 4 feet back and throws a crisp 8-foot image. It&apos;s what I should have bought originally, and the price difference hurt less than the original headache.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            Three Months In, I Upgraded to the SkyTrak+
          </h2>

          <p>
            After about three months of using the R10 with my patched-together setup, I upgraded to the{' '}
            <Link href="/reviews/skytrak-plus-review" className="text-gs-green underline underline-offset-2 hover:text-gs-gold transition-colors">
              SkyTrak+
            </Link>
            {' '}($2,995). And look — the R10 is a genuinely impressive piece of hardware for $599. I don&apos;t want to bury it. But when I started hitting with the SkyTrak+, the data quality difference was immediately obvious. Spin rates were more detailed, shot shape felt more accurate, and the feedback loop became something I actually trusted.
          </p>

          <p>
            What I didn&apos;t appreciate until I had it set up: the SkyTrak+ uses a side-mount configuration. It sits to the side of the ball rather than behind it. This completely changes your depth requirements. The rear-mount setup with the R10 required extra space behind the hitting position that I was stealing from my projector throw distance. The SkyTrak+ sidesteps that whole problem — literally. If I&apos;d started there, my projector situation might have been less of a disaster.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            What the $2,200 Actually Went To
          </h2>

          <p>
            Here&apos;s the real breakdown of what I spent, before the SkyTrak+ upgrade:
          </p>

          <div className="bg-gray-50 rounded-sm border border-gray-100 p-6 my-4 font-inter text-sm">
            <ul className="space-y-2 text-gs-muted">
              <li className="flex justify-between">
                <span>Garmin Approach R10 (launch monitor)</span>
                <span className="font-medium text-[#1B3A2D]">$599</span>
              </li>
              <li className="flex justify-between">
                <span>Amazon practice net (donated)</span>
                <span className="font-medium text-[#1B3A2D]">$89</span>
              </li>
              <li className="flex justify-between">
                <span>Hardware store synthetic turf mat</span>
                <span className="font-medium text-[#1B3A2D]">$65</span>
              </li>
              <li className="flex justify-between">
                <span>Standard throw projector (returned)</span>
                <span className="font-medium text-[#1B3A2D]">$280</span>
              </li>
              <li className="flex justify-between">
                <span>Short-throw projector (kept)</span>
                <span className="font-medium text-[#1B3A2D]">$420</span>
              </li>
              <li className="flex justify-between">
                <span>Carl&apos;s Place impact screen</span>
                <span className="font-medium text-[#1B3A2D]">$380</span>
              </li>
              <li className="flex justify-between">
                <span>Proper hitting mat</span>
                <span className="font-medium text-[#1B3A2D]">$200</span>
              </li>
              <li className="flex justify-between">
                <span>Mounting hardware, foam padding, misc.</span>
                <span className="font-medium text-[#1B3A2D]">$150</span>
              </li>
              <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                <span className="font-semibold text-[#1B3A2D]">Total</span>
                <span className="font-semibold text-[#1B3A2D]">~$2,183</span>
              </li>
            </ul>
          </div>

          <p>
            Of that $2,183, the stuff I actually kept and use: the short-throw projector, the Carl&apos;s Place screen, the proper mat, the mounting hardware. The $89 net and the $65 mat are gone. The standard throw projector got returned — I got $280 back on that one — but I still burned the time and stress buying it in the first place because I hadn&apos;t planned the setup end-to-end.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            What I&apos;d Do Differently (The Actual Advice)
          </h2>

          <p>
            If you&apos;re where I was in January — excited, money in hand, ready to pull triggers — here&apos;s what I&apos;d tell you:
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">Step one: put your wallet away and measure your space.</strong> Ceiling height, room depth, room width. Write them down. These three numbers determine everything else. If your ceiling is under 8.5 feet and you&apos;re taller than 5&apos;9&quot;, go into this with eyes open. If your garage is shallow — under 14 feet — you need a short-throw projector, full stop, no debate.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">Skip the cheap net entirely.</strong> I know it&apos;s tempting. An $89 net sounds like a good placeholder while you figure things out. It&apos;s not. Buy the real impact screen from day one. Carl&apos;s Place makes a solid one for around $380, and it&apos;ll serve you for years.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">Spend properly on the mat.</strong> This is what you&apos;re hitting off of hundreds of times per session. A bad mat removes feedback and encourages bad habits — I&apos;m probably still unlearning some things from those two months on porch turf. Country Club Elite runs $150 to $200. Worth every cent.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">Get the short-throw projector from the start.</strong> Check your depth, check the throw ratio on the projector you&apos;re considering, do the math before you buy. I didn&apos;t. It cost me time and the stress of a half-assembled garage rig hanging out the door.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">If your budget has any flexibility, start with the SkyTrak+ instead of the R10.</strong> I know $2,995 is a lot more than $599. But the data quality is in a genuinely different tier, and the side-mount form factor means you&apos;re not eating into your rear depth for projector placement. If you know you&apos;re going to want better data eventually, starting there saves you a full upgrade cycle. An upgrade cycle means spending money twice.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            Do I Regret It?
          </h2>

          <p>
            Not really. The setup I have now is genuinely great. I&apos;m hitting balls in my garage at 10 PM in Austin while it&apos;s still 95 degrees outside, playing Pebble Beach on a projector screen, and actually improving. My handicap dropped from an 11 to a 9 over the spring and summer, and I&apos;m crediting at least some of that to the repetitions I couldn&apos;t have gotten otherwise.
          </p>

          <p>
            But I wish someone had grabbed me by the shoulders in January and said: &quot;Plan the whole thing before you buy a single item. Start with the room. End with the launch monitor.&quot; I would have saved myself a few hundred dollars, a lot of confusion, and one genuinely terrifying 15 minutes with a tape measure.
          </p>

          <p>
            If this article is that someone for you — great. Go measure your ceiling. Then come back and figure out the rest.
          </p>

        </div>

        {/* Related Links */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-5">
            Keep Reading
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/reviews/best-golf-simulator-for-garage"
              className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors underline underline-offset-2"
            >
              Best Golf Simulators for Garages (2026)
            </Link>
            <Link
              href="/reviews/best-golf-simulator-under-3000"
              className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors underline underline-offset-2"
            >
              Best Golf Simulators Under $3,000
            </Link>
            <Link
              href="/the-range"
              className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors underline underline-offset-2"
            >
              More from The Range →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
