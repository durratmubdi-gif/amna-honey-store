import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import {
  FAQ_HONEY_IMAGE,
  FAQ_ITEMS,
  buildWhatsappUrl,
  formatDisplayPhone,
} from '../data/defaultStore';
import { ResilientImage } from './ResilientImage';

interface FaqSectionProps {
  whatsapp: string;
}

export function FaqSection({ whatsapp }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const quickChatUrl = buildWhatsappUrl(
    whatsapp,
    'السلام عليكم، لدي استفسار سريع حول عسل مناحل آمنة عبد الكريم.'
  );

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-emeraldDeep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Image 4 Visual + Quick WhatsApp Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-[2rem] overflow-hidden border border-emeraldDeep/15 bg-white shadow-luxury flex-1 min-h-[260px]">
              <ResilientImage
                src={FAQ_HONEY_IMAGE}
                alt="عسل طبيعي صافي من مناحل آمنة عبد الكريم بالمدينة المنورة"
                fallbackTitle="الأسئلة الشائعة المختصرة"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl bg-white border border-emeraldDeep/15 p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-honeyGold">
                  تواصل سريع عبر واتساب
                </p>
                <p
                  dir="ltr"
                  className="text-lg font-extrabold text-emeraldDeep tabular-nums mt-0.5"
                >
                  {formatDisplayPhone(whatsapp)}
                </p>
              </div>
              <a
                href={quickChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-2 rounded-xl bg-[#128C7E] hover:bg-[#0e7468] text-white text-xs sm:text-sm font-extrabold inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>اسأل عبر واتساب</span>
              </a>
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
                إجابات واضحة ومختصرة
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep">
                الأسئلة الشائعة
              </h2>
              <p className="text-sm sm:text-base text-inkMuted">
                هل العسل طبيعي؟ كيف يتم الدفع؟ وما مدة التوصيل؟ إليك الإجابة مباشرة.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white border border-emeraldDeep/15 overflow-hidden"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => handleToggle(item.id)}
                      className="w-full min-h-[56px] px-5 py-4 flex items-center justify-between gap-4 text-right font-bold text-sm sm:text-base text-emeraldDeep hover:bg-creamBase/70 transition cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-honeyGold shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-inkMuted leading-relaxed border-t border-emeraldDeep/10">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
