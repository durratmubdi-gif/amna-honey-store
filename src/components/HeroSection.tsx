import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import {
  CLEANED_APIARY_LOGO,
  HERO_SHOWCASE_IMAGE,
  buildWhatsappUrl,
} from '../data/defaultStore';
import { EnchantedMotionLayer } from './EnchantedMotionLayer';
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
    <section
      id="story"
      className="relative w-full overflow-hidden border-b border-[#F3D598]/25"
    >
      {/* Full-Width Enchanted Golden Honey Banner */}
      <div className="relative min-h-[540px] sm:min-h-[600px] flex items-center">
        <ResilientImage
          src={HERO_SHOWCASE_IMAGE}
          alt="مناحل آمنة عبد الكريم في البيئة الطبيعية بالمدينة المنورة لإنتاج عسل سدرة وطلح وسمرة طبيعي"
          fallbackTitle="مناحل آمنة عبد الكريم"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Animated Palace Honey Waterfall & Swaying Background Blossoms */}
        <EnchantedMotionLayer variant="hero" />
        {/* Balanced rose-plum twilight contrast scrim preserving waterfall & floral visibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#331B22]/86 via-[#44252C]/52 to-[#3D2229]/28" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Hero Headline & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <p className="text-sm sm:text-base font-bold text-[#F7D78C] drop-shadow-xs">
                مناحل آمنة عبد الكريم — المدينة المنورة — عسل طبيعي 100%
              </p>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#FFF9F2] leading-[1.24] drop-shadow-sm">
                أمانة اليد، وصفاء الطبيعة في كل قطرة عسل
              </h1>

              <p className="text-base sm:text-lg text-[#F9EFE3] leading-relaxed max-w-xl">
                عسل سدرة بلدي، وعسل طلح أصلي، وعسل سمرة طبيعي من مناحلنا الميدانية في
                المدينة المنورة بإشراف مباشر وترخيص معتمد من وزارة البيئة والمياه والزراعة.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={orderWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 rounded-xl btn-honey-glow text-white font-display font-extrabold text-sm sm:text-base transition whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>اطلب عبر واتساب الآن</span>
                </a>

                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl glass-enchanted hover:bg-[#FFFDF9] text-inkDark font-display font-bold text-sm sm:text-base transition whitespace-nowrap"
                >
                  <span>استعرض أنواع العسل والأسعار</span>
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                </a>
              </div>

              {/* Concise Bottom Trust Markers */}
              <div className="pt-4 border-t border-[#F7D78C]/25 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-bold text-[#FFF6E8]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#F7D78C] shrink-0" />
                  <span>طبيعي 100%</span>
                </span>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#F7D78C] shrink-0" />
                  <span>مرخص رسمياً</span>
                </span>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#F7D78C] shrink-0" />
                  <span>استرداد مبلغ مضمون</span>
                </span>
              </div>
            </div>

            {/* Cleaned Brand Emblem Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="glass-enchanted rounded-2xl p-4 sm:p-5 max-w-[320px] sm:max-w-[350px] w-full text-center space-y-3">
                <div className="aspect-square rounded-xl overflow-hidden bg-[#FFF9F0] border border-[#EBC28E]/70 shadow-sm">
                  <ResilientImage
                    src={CLEANED_APIARY_LOGO}
                    alt="الشعار الرسمي النظيف لمناحل بنت المدينة للعسل الطبيعي - نحالة سعودية"
                    fallbackTitle="مناحل بنت المدينة للعسل الطبيعي"
                    loading="eager"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-display text-sm font-bold text-emeraldDeep">
                  مناحل بنت المدينة للعسل الطبيعي · المدينة المنورة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
