import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQ_ITEMS } from '../data/defaultStore';

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-emeraldDeep/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
            إجابات واضحة قبل الطلب
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep">
            الأسئلة الشائعة
          </h2>
          <p className="text-sm sm:text-base text-inkMuted">
            كل ما تحتاج معرفته عن نقاء العسل، التوصيل، الدفع عند الاستلام، وضمان الاسترجاع.
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
    </section>
  );
}
