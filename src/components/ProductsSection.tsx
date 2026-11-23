import { ChevronDown, MessageCircle, Plus } from 'lucide-react';
import { useState } from 'react';
import {
  PRODUCTS_TRIO_IMAGE,
  WEIGHT_LABELS,
  WEIGHT_ORDER,
  buildWhatsappUrl,
} from '../data/defaultStore';
import type { Product, WeightKey } from '../types';
import { ResilientImage } from './ResilientImage';

interface ProductsSectionProps {
  products: Product[];
  whatsapp: string;
  selectedWeights: Record<string, WeightKey>;
  onSelectWeight: (productId: string, weight: WeightKey) => void;
  onAddToCart: (productId: string) => void;
}

const COLOR_SWATCH: Record<string, { hex: string; label: string }> = {
  sidr: { hex: '#D4A024', label: 'كهرماني ذهبي صافي' },
  talh: { hex: '#9A4B1E', label: 'عنبر محمر دافئ' },
  samra: { hex: '#4A2511', label: 'بني داكن ياقوتي' },
};

export function ProductsSection({
  products,
  whatsapp,
  selectedWeights,
  onSelectWeight,
  onAddToCart,
}: ProductsSectionProps) {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-white/80 border-y border-emeraldDeep/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
            تشكيلة المنتجات والأسعار
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-emeraldDeep">
            أنواع العسل البلدي وأوزانها
          </h2>
          <p className="text-sm sm:text-base text-inkMuted tabular-nums">
            أسعار موحّدة وواضحة لجميع الأنواع:{' '}
            <strong className="text-emeraldDeep">ربع كيلو 150 ر.س</strong> |{' '}
            <strong className="text-emeraldDeep">نصف كيلو 250 ر.س</strong> |{' '}
            <strong className="text-emeraldDeep">كيلو 400 ر.س</strong>
          </p>
        </div>

        {/* Visual Showcase Banner — Image 2: Three Honey Varieties & Color Guide */}
        <div className="rounded-[2rem] bg-creamBase border border-emeraldDeep/15 overflow-hidden grid lg:grid-cols-12 items-stretch shadow-luxury">
          <div className="lg:col-span-6 min-h-[260px] sm:min-h-[340px] bg-white">
            <ResilientImage
              src={PRODUCTS_TRIO_IMAGE}
              alt="تشكيلة عسل سدرة بلدي وعسل طلح بلدي وعسل سمرة بلدي في عبوات زجاجية"
              fallbackTitle="تشكيلة العسل الثلاثة"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center space-y-5">
            <div className="space-y-1.5">
              <p className="text-xs font-extrabold text-honeyGold">
                دليل الألوان والاختيار السريع
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-emeraldDeep">
                الفرق بين السدرة والطلح والسمرة
              </h3>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 pb-3 border-b border-emeraldDeep/10">
                <span
                  aria-hidden="true"
                  className="w-5 h-5 rounded-full shrink-0 mt-0.5 border border-black/10"
                  style={{ backgroundColor: '#D4A024' }}
                />
                <div>
                  <div className="font-extrabold text-emeraldDeep">
                    عسل سدرة بلدي — <span className="text-honeyGold">كهرماني ذهبي</span>
                  </div>
                  <p className="text-xs text-inkMuted mt-0.5">
                    قوام غني ونكهة عطرية ناعمة محببة؛ ربع كيلو 150 ر.س | نصف كيلو 250 ر.س |
                    كيلو 400 ر.س
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-emeraldDeep/10">
                <span
                  aria-hidden="true"
                  className="w-5 h-5 rounded-full shrink-0 mt-0.5 border border-black/10"
                  style={{ backgroundColor: '#9A4B1E' }}
                />
                <div>
                  <div className="font-extrabold text-emeraldDeep">
                    عسل طلح بلدي — <span className="text-honeyGold">عنبر محمر دافئ</span>
                  </div>
                  <p className="text-xs text-inkMuted mt-0.5">
                    نكهة برية متوازنة مريحة للمعدة وللاستخدام اليومي (نفس الأسعار).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="w-5 h-5 rounded-full shrink-0 mt-0.5 border border-black/10"
                  style={{ backgroundColor: '#4A2511' }}
                />
                <div>
                  <div className="font-extrabold text-emeraldDeep">
                    عسل سمرة بلدي — <span className="text-honeyGold">بني داكن ياقوتي</span>
                  </div>
                  <p className="text-xs text-inkMuted mt-0.5">
                    طابع جبلي عميق غني بالمعادن ومضادات الأكسدة (نفس الأسعار).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Product Cards */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-8">
          {products.map((prod) => {
            const currentWeight: WeightKey = selectedWeights[prod.id] || 'kilo';
            const currentPrice = prod.prices[currentWeight] ?? 400;
            const weightLabel = WEIGHT_LABELS[currentWeight];
            const directWhatsappUrl = buildWhatsappUrl(
              whatsapp,
              `السلام عليكم، أود طلب ${prod.name} - ${weightLabel} بسعر ${currentPrice} ريال`
            );
            const isExpanded = Boolean(expandedIds[prod.id]);
            const swatch = COLOR_SWATCH[prod.id] || {
              hex: '#C59B27',
              label: 'لون طبيعي أصيل',
            };

            return (
              <article
                key={prod.id}
                className="rounded-3xl bg-white border border-emeraldDeep/15 overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-luxury"
              >
                <div>
                  {/* Clean Honey Color & Origin Header */}
                  <div
                    className="h-3 w-full"
                    style={{ backgroundColor: swatch.hex }}
                  />

                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-bold">
                        <span className="inline-flex items-center gap-1.5 text-inkMuted">
                          <span
                            aria-hidden="true"
                            className="w-3 h-3 rounded-full border border-black/15 shrink-0"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span>{swatch.label}</span>
                        </span>
                        <span
                          className={
                            prod.available ? 'text-emeraldDeep' : 'text-red-700'
                          }
                        >
                          {prod.available ? 'متوفر الآن' : 'نفدت الكمية حالياً'}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-emeraldDeep mt-2">
                        {prod.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-inkMuted mt-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    {/* Detailed Product Specs Toggle */}
                    {prod.details && (
                      <div className="border-t border-emeraldDeep/10 pt-3">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => toggleDetails(prod.id)}
                          className="w-full flex items-center justify-between text-xs font-extrabold text-emeraldDeep hover:text-honeyGold transition cursor-pointer py-1"
                        >
                          <span>المذاق واللون والفوائد والاستخدام</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <dl className="mt-2.5 space-y-2 text-xs text-inkMuted bg-creamBase rounded-2xl p-3.5 border border-emeraldDeep/10">
                            <div>
                              <dt className="font-bold text-emeraldDeep inline">
                                المذاق:{' '}
                              </dt>
                              <dd className="inline">{prod.details.taste}</dd>
                            </div>
                            <div>
                              <dt className="font-bold text-emeraldDeep inline">
                                اللون:{' '}
                              </dt>
                              <dd className="inline">{prod.details.color}</dd>
                            </div>
                            <div>
                              <dt className="font-bold text-emeraldDeep inline">
                                الفوائد:{' '}
                              </dt>
                              <dd className="inline">{prod.details.benefits}</dd>
                            </div>
                            <div>
                              <dt className="font-bold text-emeraldDeep inline">
                                الموسم:{' '}
                              </dt>
                              <dd className="inline">{prod.details.season}</dd>
                            </div>
                            <div>
                              <dt className="font-bold text-emeraldDeep inline">
                                الاستخدام والتخزين:{' '}
                              </dt>
                              <dd className="inline">
                                {prod.details.usageAndStorage}
                              </dd>
                            </div>
                          </dl>
                        )}
                      </div>
                    )}

                    {/* Weight Selector */}
                    <div>
                      <span className="block text-xs font-bold text-inkDark mb-2">
                        اختر الوزن:
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {WEIGHT_ORDER.map((wKey) => {
                          const active = currentWeight === wKey;
                          return (
                            <button
                              key={wKey}
                              type="button"
                              onClick={() => onSelectWeight(prod.id, wKey)}
                              className={`min-h-[48px] py-2 px-2 rounded-xl border text-xs font-bold transition cursor-pointer tabular-nums ${
                                active
                                  ? 'bg-emeraldDeep text-honeyLight border-emeraldDeep'
                                  : 'bg-creamBase text-inkDark border-emeraldDeep/15 hover:border-honeyGold'
                              }`}
                            >
                              <div className="whitespace-nowrap">{WEIGHT_LABELS[wKey]}</div>
                              <div className="text-[11px] opacity-90 mt-0.5">
                                {prod.prices[wKey]} ر.س
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price + Direct WhatsApp CTA + Cart Button */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 space-y-3 border-t border-emeraldDeep/10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[11px] text-inkMuted">السعر المختار</span>
                      <span className="tabular-nums text-2xl font-extrabold text-emeraldDeep">
                        {currentPrice}{' '}
                        <span className="text-xs font-bold">ريال</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      disabled={!prod.available}
                      onClick={() => onAddToCart(prod.id)}
                      className={`min-h-[44px] px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 transition whitespace-nowrap ${
                        prod.available
                          ? 'bg-creamBase border border-emeraldDeep/20 text-emeraldDeep hover:border-honeyGold cursor-pointer'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <Plus className="w-4 h-4 shrink-0" />
                      <span>{prod.available ? 'أضف للسلة' : 'غير متوفر'}</span>
                    </button>
                  </div>

                  {prod.available ? (
                    <a
                      href={directWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[46px] px-5 py-2.5 rounded-2xl bg-[#128C7E] hover:bg-[#0e7468] text-white font-extrabold text-sm inline-flex items-center justify-center gap-2 shadow-sm transition whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>اطلب عبر واتساب</span>
                    </a>
                  ) : (
                    <span className="w-full min-h-[46px] px-5 py-2.5 rounded-2xl bg-gray-100 text-gray-400 font-bold text-sm inline-flex items-center justify-center">
                      غير متوفر للطلب حالياً
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
