import { Award, Quote, ShieldCheck } from 'lucide-react';
import { AMNA_PORTRAIT_IMAGE, CUSTOMER_REVIEWS } from '../data/defaultStore';
import { ResilientImage } from './ResilientImage';

export function AboutTrustSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-emeraldDeep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* About Amna & Official Trust */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-luxury bg-emeraldDeep min-h-[320px] sm:min-h-[380px]">
              <ResilientImage
                src={AMNA_PORTRAIT_IMAGE}
                alt="النحالة آمنة عبد الكريم في مناحل بلدية مرخصة في المدينة المنورة"
                fallbackTitle="النحّالة آمنة عبد الكريم"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emeraldDeep/85 via-emeraldDeep/15 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <p className="text-xs font-bold text-honeyLight">
                  المدينة المنورة · مناحل بلدية مرخصة
                </p>
                <p className="font-display text-2xl font-bold mt-1">
                  النحّالة آمنة عبد الكريم
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 py-2">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
                من نحن · الثقة والترخيص الرسمي
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep leading-snug">
                عناية مباشرة بالخلايا وأمانة توارثتها في تربية النحل بالمدينة المنورة
              </h2>
              <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
                تقود النحّالة <strong className="text-emeraldDeep">آمنة عبد الكريم</strong>{' '}
                عملها في تربية النحل البلدي والتنقل بين مواسم تزهير السدر والطلح والسمرة
                بإشراف ميداني مباشر على كل خلية، من تهيئة المناحل حتى فرز العسل الطبيعي
                وتعبئته دون أي تدخل صناعي.
              </p>
            </div>

            {/* 2 Clear Trust Guarantees */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 space-y-2">
                <div className="flex items-center gap-2 text-emeraldDeep font-extrabold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-honeyGold shrink-0" />
                  <span>عسل طبيعي 100% — أو استرداد المبلغ</span>
                </div>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  نضمن صفاء العسل وخلوه من أي إضافات أو تغذية سكرية، مع حق الاسترجاع
                  واسترداد المبلغ كاملاً عند وجود أي ملاحظة.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 space-y-2">
                <div className="flex items-center gap-2 text-emeraldDeep font-extrabold text-sm sm:text-base">
                  <Award className="w-5 h-5 text-honeyGold shrink-0" />
                  <span>ترخيص معتمد من وزارة البيئة والمياه والزراعة</span>
                </div>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  منحل بلدي مرخص برخصة نحال ومنحل متنقل نظامي يلتزم بأعلى اشتراطات
                  الجودة والسلامة الغذائية.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews (Adjacent to Trust Claims) */}
        <div className="pt-8 border-t border-emeraldDeep/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
                تجارب عملائنا
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-emeraldDeep">
                آراء من جربوا عسل مناحل آمنة عبد الكريم
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-inkMuted">
              شهادات حقيقية من عملاء داخل المدينة المنورة وخارجها
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review) => (
              <blockquote
                key={review.id}
                className="rounded-3xl bg-white border border-emeraldDeep/10 p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <Quote className="w-5 h-5 text-honeyGold" aria-hidden="true" />
                  <p className="text-sm text-inkDark leading-relaxed">{review.quote}</p>
                </div>
                <footer className="pt-3 border-t border-emeraldDeep/10 text-xs space-y-0.5">
                  <div className="font-extrabold text-emeraldDeep">{review.author}</div>
                  <div className="text-inkMuted">
                    {review.city} <span aria-hidden="true">·</span> {review.product}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
