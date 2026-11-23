import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { HERO_SHOWCASE_IMAGE, buildWhatsappUrl } from '../data/defaultStore';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  whatsapp: string;
}

export function HeroSection({ whatsapp }: HeroSectionProps) {
  const orderWhatsappUrl = buildWhatsappUrl(
    whatsapp,
    'السلام عليكم، أود الطلب من مناحل آمنة عبد الكريم بالمدينة المنورة.'
  );

  return (
    <section id="story" className="relative w-full overflow-hidden border-b border-emeraldDeep/15">
      {/* Full-Width Atmospheric Banner */}
      <div className="relative min-h-[500px] sm:min-h-[560px] flex items-center">
        <ResilientImage
          src={HERO_SHOWCASE_IMAGE}
          alt="مناحل آمنة عبد الكريم في البيئة الطبيعية بالمدينة المنورة لإنتاج عسل سدرة وطلح وسمرة طبيعي"
          fallbackTitle="مناحل آمنة عبد الكريم"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Measured contrast scrim preserving WCAG AA contrast on warm dark brown */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#24160B]/92 via-[#2C1A0D]/75 to-[#2C1A0D]/45" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-2xl space-y-6 text-right">
            <p className="text-sm sm:text-base font-bold text-[#F3D579]">
              مناحل آمنة عبد الكريم — المدينة المنورة — عسل طبيعي 100%
            </p>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.24]">
              أمانة اليد، وصفاء الطبيعة في كل قطرة عسل
            </h1>

            <p className="text-base sm:text-lg text-[#F9F6ED]/90 leading-relaxed max-w-xl">
              عسل سدرة بلدي، وعسل طلح أصلي، وعسل سمرة طبيعي من مناحلنا الميدانية في
              المدينة المنورة بإشراف مباشر وترخيص معتمد من وزارة البيئة والمياه والزراعة.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={orderWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-lg bg-gradient-to-l from-honeyGold to-honeyLight hover:brightness-105 text-white font-display font-extrabold text-sm sm:text-base shadow-goldGlow transition whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>اطلب عبر واتساب الآن</span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-white/95 hover:bg-white text-inkDark font-display font-bold text-sm sm:text-base transition whitespace-nowrap"
              >
                <span>استعرض أنواع العسل والأسعار</span>
                <ArrowLeft className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Concise Bottom Badges */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-bold text-[#F9F6ED]">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F3D579] shrink-0" />
                <span>طبيعي 100%</span>
              </span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F3D579] shrink-0" />
                <span>مرخص رسمياً</span>
              </span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#F3D579] shrink-0" />
                <span>استرداد مبلغ مضمون</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
