import { ArrowLeft, MessageCircle } from 'lucide-react';
import { HERO_SHOWCASE_IMAGE, buildWhatsappUrl } from '../data/defaultStore';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  whatsapp: string;
}

export function HeroSection({ whatsapp }: HeroSectionProps) {
  const inquiryUrl = buildWhatsappUrl(
    whatsapp,
    'السلام عليكم، أرغب بالاستفسار عن العسل المتوفر.'
  );

  return (
    <section id="story" className="pt-8 pb-16 sm:pt-14 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-right py-2">
            <div className="space-y-5">
              <p className="text-xs sm:text-sm font-bold text-honeyGold tracking-wide">
                رعاية يدوية أمينة · فرز طبيعي · المدينة المنورة
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-emeraldDeep leading-[1.2] max-w-2xl">
                أمانة اليد، وصفاء الطبيعة في كل قطرة عسل
              </h1>

              <p className="text-base sm:text-lg text-inkMuted leading-relaxed max-w-2xl">
                تُشرف النحّالة{' '}
                <strong className="text-emeraldDeep font-bold">آمنة عبد الكريم</strong>{' '}
                بنفسها على خلايا النحل في المدينة المنورة، وتتابع مواسم التزهير، وتعتني
                بالخلايا والفرز بكل إتقان وتفانٍ، لتقدم لكم عسل{' '}
                <span className="text-emeraldDeep font-bold">السدرة</span> و
                <span className="text-emeraldDeep font-bold">الطلح</span> و
                <span className="text-emeraldDeep font-bold">السمرة</span> بجودة تليق
                بضيوف المدينة وأهلها.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2.5 min-h-[46px] px-7 py-3 rounded-2xl bg-gradient-to-l from-honeyGold to-honeyLight text-emeraldDeep font-extrabold text-sm sm:text-base shadow-goldGlow hover:-translate-y-0.5 transition whitespace-nowrap"
                >
                  <span>تصفح واطلب العسل الآن</span>
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[46px] px-6 py-3 rounded-2xl bg-white border border-emeraldDeep/15 text-emeraldDeep font-bold text-sm sm:text-base hover:border-honeyGold transition whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-honeyGold shrink-0" />
                  <span>تواصل واتساب</span>
                </a>
              </div>
            </div>

            {/* Clean Hairline-Separated Proof Strip */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-emeraldDeep/10 max-w-2xl">
              <div>
                <div className="tabular-nums text-xl sm:text-2xl font-extrabold text-emeraldDeep">
                  3 أنواع
                </div>
                <div className="text-xs text-inkMuted mt-1">سدرة · طلح · سمرة</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emeraldDeep">
                  توصيل فوري
                </div>
                <div className="text-xs text-inkMuted mt-1">داخل المدينة المنورة</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emeraldDeep">
                  عناية مباشرة
                </div>
                <div className="text-xs text-inkMuted mt-1">بإشراف النحّالة نفسها</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-luxury bg-emeraldDeep text-creamBase min-h-[360px] lg:min-h-[460px]">
              <ResilientImage
                src={HERO_SHOWCASE_IMAGE}
                alt="عسل بلدي فاخر وقرص شمع طبيعي من مناحل آمنة عبد الكريم"
                fallbackTitle="مناحل آمنة عبد الكريم"
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
