import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://topgolfsimulators.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/best-golf-simulators`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/reviews/skytrak-plus-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/foresight-sports-gc3-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/full-swing-kit-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/flightscope-mevo-plus-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/truegolf-apogee-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reviews/garmin-approach-r10-review`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/best-golf-simulator-under-5000`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/best-golf-simulator-for-garage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/golf-simulator-vs-launch-monitor`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reviews/home-golf-simulator-setup-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reviews/best-golf-simulator-impact-screens`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/best-golf-hitting-mats`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/best-projectors-for-golf-simulators`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/reviews/skytrak-plus-vs-foresight-gc3`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/authors/marcus-webb`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/authors/tyler-kwan`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
