import { Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/defaultStore';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-creamBase border-b border-emeraldDeep/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <p className="text-xs sm:text-sm font-bold text-honeyGold">
            تجارب عملائنا الكرام
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-inkDark">
            كلمات قالوها عنا — ثقة عملائنا أغلى ما نملك
          </h2>
          <p className="text-sm sm:text-base text-inkMuted">
            آراء حقيقية لعملاء جرّبوا عسل السدرة والطلح والسمرة داخل المدينة المنورة
            وخارجها.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {CUSTOMER_REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="rounded-xl bg-creamCard border border-emeraldDeep/15 p-6 shadow-sm flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-honeyGold" aria-hidden="true" />
                <p className="text-sm sm:text-base text-inkDark leading-relaxed">
                  {review.quote}
                </p>
              </div>

              <footer className="pt-4 border-t border-emeraldDeep/10 text-xs sm:text-sm space-y-0.5">
                <div className="font-display font-bold text-inkDark">
                  {review.author}
                </div>
                <div className="text-xs text-inkMuted">
                  {review.city} <span aria-hidden="true">·</span> {review.product}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
