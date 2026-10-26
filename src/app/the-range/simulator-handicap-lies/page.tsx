import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Your Golf Simulator Handicap Lies to You | The Range | Top Golf Simulators',
  description:
    'Marcus Webb has a Foresight GC3 in his basement and a 2 handicap on the course. He\'s here to tell you the truth about what your simulator scores actually mean — and why there\'s a 3-5 stroke gap most golfers refuse to admit.',
};

export default function SimulatorHandicapLiesPage() {
  return (
    <div className="bg-gs-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Category Label */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">
          The Range
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-6">
          Why Your Golf Simulator Handicap Lies to You
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
          <img
            src="/images/marcus-webb.png"
            alt="Marcus Webb"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A96E]"
          />
          <div>
            <p className="font-semibold text-[#1B3A2D] text-sm">Marcus Webb</p>
            <p className="text-xs text-gray-500">
              2 handicap &middot; Chicago, IL &middot; Published October 25, 2026
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            My buddy Dave shot a 72 on TGC2 Thursday night. He texted the whole club group chat
            about it before his beer was cold. By Saturday morning, it was a story. By the third
            tee, it was legend. By the ninth hole, after Dave made his third double bogey in a row,
            nobody was talking about it anymore. He shot an 84. That&apos;s twelve strokes. Twelve.
            On a calm fall day with no rain, no wind to speak of, and a course he&apos;s played
            thirty times.
          </p>

          <p>
            Dave is not a bad golfer. Dave is a four handicap who has convinced himself that his
            simulator game is his real game. It isn&apos;t. And this is not a Dave problem — this is
            a simulator industry problem, and nobody in that industry has any financial incentive to
            tell you the truth about it. So I will.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            The Dirty Secret Nobody Wants to Say Out Loud
          </h2>

          <p>
            Simulator golf flatters you. Systemically, structurally, by design — not because
            manufacturers are evil, but because the conditions that make real golf hard are also the
            conditions that are nearly impossible to replicate indoors. The sim gives you the
            graphics, the distance numbers, the shot shape. What it can&apos;t give you is the
            forty percent of the game that happens between your ears and around your feet.
          </p>

          <p>
            Here&apos;s exactly where the gap comes from:
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">There is no wind.</strong> Real golf has wind. Not sometimes — almost always.
            A 10 to 20 mph breeze adds two to three strokes to an average recreational
            round. It changes club selection, ball flight, and shot shape on every single hole.
            Simulator courses are static. The trees might sway in the animation, but your ball
            doesn&apos;t care. You are playing in a climate-controlled basement and calling it golf.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">Every lie is perfect.</strong> In my basement, every shot comes off a pristine
            mat at the same height, the same angle, the same resistance every time. On a real
            course, you&apos;ll hit from divots, from sidehill lies, from rough that grabs your
            hosel at impact, from fairway depressions that change your spine angle before you even
            take the club back. Ball-striking on a simulator and ball-striking in real conditions
            are related skills. They are not the same skill.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">There are no distractions.</strong> No sun in your eyes on a mid-morning
            approach. No slow group on the tee ahead of you, killing your rhythm for twenty
            minutes. No cart path on the right, no out-of-bounds left, no first-tee jitters with
            twenty members watching you waggle. The simulator is a consequence-free environment.
            Real golf is not. The mental load of real golf is real, and you cannot simulate it.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">The mulligan problem is real.</strong> When you&apos;re alone in your simulator
            bay at 10 PM hitting range balls, hitting that same approach shot three times to
            &quot;find your swing&quot; is completely normal. It&apos;s how you practice. But that
            shot counts once on a real course. The repetition and the forgiveness of home practice
            don&apos;t transfer to stroke play, and your handicap doesn&apos;t know the difference
            between your good shot and the two you threw away before it.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">Shot selection trains wrong.</strong> Simulator golfers play aggressively
            because there are no consequences. Fired at the tucked pin? You&apos;re still on
            perfect turf no matter where it lands. The real course has rough, water, collection
            areas, and penalty strokes. Over hundreds of simulator rounds, you develop course
            management habits built for a world where the punishment for bad decisions is a number
            on a screen. Those habits show up on a Saturday morning, and they cost you strokes
            before you&apos;ve even made a swing.
          </p>

          <p>
            <strong className="font-semibold text-[#1B3A2D]">The green speed gap is underrated.</strong> When simulator putting is
            available, it&apos;s perfectly calibrated every single time. Real greens aren&apos;t.
            They have grain, they have moisture, they have slopes that don&apos;t show up on any
            digital rendering, and they&apos;re running at whatever the superintendent decided that
            morning. If you&apos;re practicing your putting on a simulator, you are practicing a
            skill that is adjacent to, but not the same as, putting on real grass.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            The Gap Is Real. Accept It.
          </h2>

          <p>
            I&apos;ve talked to enough golfers to estimate this honestly: for most recreational
            players, the gap between their simulator handicap and their real handicap is three to
            five strokes. Some guys it&apos;s two. Some guys it&apos;s seven. The more time you
            spend playing simulator rounds and the less time you spend on a real course, the wider
            that gap gets. Dave&apos;s gap was twelve strokes on one particular Saturday. That
            sounds like an outlier. It isn&apos;t. Conditions, pressure, and course management
            add up fast when the training wheels come off.
          </p>

          <p>
            The dangerous part isn&apos;t the gap itself. The dangerous part is the story you tell
            yourself about your game. Golfers who think they&apos;ve &quot;arrived&quot; stop working
            on the things that actually matter. They stop practicing uncomfortable lies. They stop
            practicing in wind. They stop working on course management because they&apos;ve decided
            the simulator already validated their decision-making. The sim score becomes a ceiling
            instead of a floor, and that&apos;s backwards.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            How I Actually Use Mine
          </h2>

          <p>
            I have a Foresight GC3 in my basement. I use it almost every week during the Chicago
            winter. And I want to be clear: I love it. But I am under no illusions about what it
            is, and I use it accordingly.
          </p>

          <p>
            I don&apos;t play 18-hole rounds on TGC2 and log them as handicap rounds. That would
            be absurd. Instead, I use the GC3 for specific ball-flight work. Right now
            I&apos;m hitting 50 seven-irons a session trying to tighten my ball flight window. I
            know where my miss is, I know what the launch data looks like when I find it, and I
            track it session over session. That&apos;s what the technology is for.
          </p>

          <p>
            I also use wind simulation. Most serious software lets you dial in wind conditions —
            direction, speed, gusts. I use this. If I&apos;m preparing for a tournament at
            Medinah in October, I set 15 mph winds and work on my trajectory management
            specifically. That&apos;s the sim doing something a real range can&apos;t easily do.
          </p>

          <p>
            I run course management drills, not full rounds. I&apos;ll set up a specific scenario
            — tight driving hole, 235 yards to carry the rough, 170 to the fat part of the
            fairway — and I&apos;ll practice the decision and the execution under that structure.
            Deliberately. With intent. Not playing through seventeen other holes to get there.
          </p>

          <p>
            The distinction sounds simple, but most people don&apos;t make it: I am not playing
            golf on my simulator. I am practicing golf on my simulator. Those are different
            activities.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            A Feedback Machine, Not a Golf Course
          </h2>

          <p>
            The golfers I&apos;ve watched actually improve from simulator ownership are the ones
            who treat the technology as a feedback machine. They use it to see ball flight data
            they can&apos;t see on a range, to work specific patterns into muscle memory, to
            prepare for real conditions they know are coming. The GC3 gives me numbers on every
            shot — spin rate, launch angle, ball speed, carry, smash factor. That information,
            used correctly, is genuinely powerful.
          </p>

          <p>
            The golfers who don&apos;t improve from simulator ownership are the ones who treat it
            as a golf course. They play rounds, they post scores, they text the group chat. They
            feel good. Their real game stays exactly where it was.
          </p>

          <p>
            The machine doesn&apos;t care how you use it. That&apos;s your job.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
            My Actual Verdict
          </h2>

          <p>
            I love my simulator. I would buy the GC3 again tomorrow. On a February morning in
            Chicago when it&apos;s 14 degrees outside and Medinah is buried under a foot of snow,
            being able to go downstairs and hit real golf shots with real data is not nothing.
            It keeps your game from deteriorating completely over the winter. It lets you work on
            specific things when course access is impossible. It is a genuinely useful piece of
            equipment.
          </p>

          <p>
            But the GC3 in my basement is a practice aid that happens to have really good
            graphics. It is not a substitute for playing under real conditions. It doesn&apos;t
            know about wind, or nerves, or the second cut on the left side of the 14th at
            Medinah, or what happens to your pre-shot routine when a cart backfires on the
            adjacent hole. Your real handicap is built on all of those things.
          </p>

          <p>
            Dave&apos;s 84 was not a bad day. Dave&apos;s 84 was the truth. His 72 was the
            simulation. Learn to tell the difference, and the technology will actually help you.
            Refuse to, and you&apos;ll keep texting the group chat about rounds that only exist
            in your basement.
          </p>
        </div>

        {/* Related Links */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">
            Related
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/reviews/best-golf-simulator-for-garage"
                className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors"
              >
                Best Golf Simulators for a Garage Setup
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/skytrak-plus-review"
                className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors"
              >
                SkyTrak+ Review: The Serious Golfer&apos;s Launch Monitor
              </Link>
            </li>
            <li>
              <Link
                href="/the-range"
                className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors"
              >
                More from The Range
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
