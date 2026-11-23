import { ArrowLeft, MessageCircle } from 'lucide-react';
import { HERO_SHOWCASE_IMAGE, buildWhatsappUrl } from '../data/defaultStore';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  whatsapp: string;
}

export function HeroSection({ whatsapp }: HeroSectionProps) {
  const inquiryUrl = buildWhatsappUrl(
    whatsapp,
    'السلام عليكم، أود الطلب من مناحل آمنة عبد الكريم بالمدينة المنورة.'
  );

  return (
    <section id="story" className="pt-8 pb-16 sm:pt-14 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-right py-2">
            <div className="space-y-5">
              <p className="text-xs sm:text-sm font-bold text-honeyGold tracking-wide">
                مناحل بلدية مرخصة · عسل طبيعي 100% أو استرداد المبلغ · المدينة المنورة
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-emeraldDeep leading-[1.2] max-w-2xl">
                أمانة اليد، وصفاء الطبيعة في كل قطرة عسل
              </h1>

              <p className="text-base sm:text-lg text-inkMuted leading-relaxed max-w-2xl">
                تُشرف النحّالة{' '}
                <strong className="text-emeraldDeep font-bold">آمنة عبد الكريم</strong>{' '}
                بنفسها على خلايا النحل في المدينة المنورة بترخيص معتمد من وزارة البيئة
                والمياه والزراعة، لتقدم لكم{' '}
                <span className="text-emeraldDeep font-bold">
                  عسل سدرة المدينة المنورة
                </span>{' '}
                و<span className="text-emeraldDeep font-bold">عسل طلح أصلي</span> و
                <span className="text-emeraldDeep font-bold">عسل سمرة طبيعي</span> بجودة
                تليق بضيوف المدينة وأهلها.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-2xl bg-[#128C7E] hover:bg-[#0e7468] text-white font-extrabold text-sm sm:text-base shadow-md transition whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>اطلب عبر واتساب الآن</span>
                </a>

                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-2xl bg-gradient-to-l from-honeyGold to-honeyLight text-emeraldDeep font-extrabold text-sm sm:text-base shadow-goldGlow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  <span>تصفح العسل والأسعار</span>
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>

            {/* Clean Hairline-Separated Proof Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-emeraldDeep/10 max-w-2xl">
              <div>
                <div className="tabular-nums text-lg sm:text-2xl font-extrabold text-emeraldDeep">
                  طبيعي 100%
                </div>
                <div className="text-xs text-inkMuted mt-1">أو استرداد المبلغ</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-emeraldDeep">
                  توصيل فوري
                </div>
                <div className="text-xs text-inkMuted mt-1">
                  ودفع عند الاستلام بالمدينة
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-emeraldDeep">
                  ترخيص رسمي
                </div>
                <div className="text-xs text-inkMuted mt-1">
                  وزارة البيئة والمياه والزراعة
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-luxury bg-emeraldDeep text-creamBase min-h-[340px] lg:min-h-[460px]">
              <ResilientImage
                src={HERO_SHOWCASE_IMAGE}
                alt="عسل سدرة المدينة المنورة وعسل طلح أصلي من مناحل بلدية آمنة عبد الكريم"
                fallbackTitle="مناحل آمنة عبد الكريم"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emeraldDeep/95 via-emeraldDeep/35 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-2">
                <p className="text-xs font-bold text-honeyLight">إنتاج بلدي موثوق</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  نقاء يبدأ من الخلية وينتهي عند مائدتك
                </h2>
                <p className="text-xs sm:text-sm text-creamBase/90 leading-relaxed">
                  متابعة مستمرة لصحة النحل وتهيئة البيئة المناسبة لكل موسم لضمان جودة القوام
                  والنكهة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
