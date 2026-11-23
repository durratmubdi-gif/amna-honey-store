import { Award, CheckCircle2, Quote, ShieldCheck, Truck } from 'lucide-react';
import { CUSTOMER_REVIEWS, TRUST_CERT_IMAGE } from '../data/defaultStore';
import { ResilientImage } from './ResilientImage';

export function AboutTrustSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-emeraldDeep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Trust & Official License — Image 3 */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-luxury bg-emeraldDeep min-h-[300px] sm:min-h-[360px]">
              <ResilientImage
                src={TRUST_CERT_IMAGE}
                alt="ترخيص مناحل آمنة عبد الكريم المعتمد من وزارة البيئة والمياه والزراعة مع عبوة عسل سدرة طبيعي"
                fallbackTitle="الثقة والترخيص الرسمي"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emeraldDeep/90 via-emeraldDeep/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <p className="text-xs font-bold text-honeyLight">
                  المدينة المنورة · ترخيص نحال ومنحل متنقل
                </p>
                <p className="font-display text-2xl font-bold mt-1">
                  مناحل آمنة عبد الكريم
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 py-2">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
                الثقة والترخيص الرسمي
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep leading-snug">
                التزام كامل بالترخيص الرسمي وجودة العسل البلدي
              </h2>
              <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
                تعمل مناحل آمنة عبد الكريم في المدينة المنورة تحت إشراف مباشر وترخيص
                معتمد من وزارة البيئة والمياه والزراعة، لضمان وصول عسل طبيعي صافي
                مضمون المصدر إلى مائدتك.
              </p>
            </div>

            {/* 4 Clear Trust Points from Image 3 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-emeraldDeep font-extrabold text-sm">
                  <Award className="w-5 h-5 text-honeyGold shrink-0" />
                  <span>ترخيص معتمد رسمياً</span>
                </div>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  ترخيص معتمد من وزارة البيئة والمياه والزراعة لرعاية المناحل وإنتاج
                  العسل.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-emeraldDeep font-extrabold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-honeyGold shrink-0" />
                  <span>عسل طبيعي 100% بدون إضافات</span>
                </div>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  إنتاج صافي من أزهار السدر والطلح والسمرة دون تغذية صناعية أو تسخين.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-emeraldDeep font-extrabold text-sm">
                  <Truck className="w-5 h-5 text-honeyGold shrink-0" />
                  <span>توصيل فوري داخل المدينة</span>
                </div>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  توصيل فوري داخل المدينة المنورة مع إتاحة الدفع عند الاستلام.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 space-y-1.5">
                <div className="flex items-center gap-2 text-emeraldDeep font-extrabold text-sm">
                  <ShieldCheck className="w-5 h-5 text-honeyGold shrink-0" />
                  <span>ضمان استرداد المبلغ كاملاً</span>
                </div>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  نضمن استرداد المبلغ كاملاً عند عدم الرضا أو وجود أي ملاحظة على الجودة.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
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
