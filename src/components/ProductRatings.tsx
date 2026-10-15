// ProductRatings.tsx
// Displays aggregate star ratings and individual review cards for a product.
// Ratings are hard-coded from verified sources (see fact-check comments in parent pages).

interface Review {
  author: string
  rating: number // 1-5
  text: string
  source: string
  sourceUrl?: string
  verified?: boolean
}

interface ProductRatingsProps {
  productName: string
  aggregateRating?: number // e.g. 4.6 — omit if not verified
  totalReviews?: number
  reviews: Review[]
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-lg'
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <span className={`${sizeClass} leading-none`} aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(fullStars)}
      {hasHalf ? '½' : ''}
      {'☆'.repeat(emptyStars)}
    </span>
  )
}

export default function ProductRatings({
  productName,
  aggregateRating,
  totalReviews,
  reviews,
}: ProductRatingsProps) {
  return (
    <div className="mt-10 border border-gs-border bg-white rounded-sm overflow-hidden">

      {/* Aggregate Rating Header */}
      <div className="bg-gs-off border-b border-gs-border px-6 py-5">
        <h3 className="font-serif text-xl text-gs-green mb-1">{productName} — Customer Ratings</h3>
        {aggregateRating ? (
          <div className="flex items-baseline gap-3 mt-2">
            <span className="font-serif text-5xl text-gs-green font-light">{aggregateRating.toFixed(1)}</span>
            <div>
              <div className="text-[#C8A96E]">
                <StarRating rating={aggregateRating} size="lg" />
              </div>
              {totalReviews && (
                <p className="font-inter text-xs text-gs-muted mt-0.5">
                  Based on {totalReviews.toLocaleString()} verified reviews
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="font-inter text-sm text-gs-muted mt-1 italic">
            Aggregate rating not yet verified — editorial reviews below.
          </p>
        )}
      </div>

      {/* Individual Reviews */}
      <div className="divide-y divide-gs-border">
        {reviews.map((review, i) => (
          <div key={i} className="px-6 py-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[#C8A96E]">
                  <StarRating rating={review.rating} size="sm" />
                </span>
                <span className="font-inter text-sm font-semibold text-gs-text">{review.author}</span>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 bg-[#E8F5E9] text-[#1B3A2D] font-inter text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              {review.sourceUrl ? (
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex-shrink-0 font-inter text-[11px] font-medium text-gs-muted hover:text-gs-green border border-gs-border px-2 py-0.5 rounded-sm transition-colors"
                >
                  {review.source}
                </a>
              ) : (
                <span className="flex-shrink-0 font-inter text-[11px] font-medium text-gs-muted border border-gs-border px-2 py-0.5 rounded-sm">
                  {review.source}
                </span>
              )}
            </div>
            <p className="font-inter text-sm text-gs-muted italic leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}
