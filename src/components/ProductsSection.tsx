import { Plus } from 'lucide-react';
import { WEIGHT_LABELS, WEIGHT_ORDER } from '../data/defaultStore';
import type { Product, WeightKey } from '../types';
import { ResilientImage } from './ResilientImage';

interface ProductsSectionProps {
  products: Product[];
  selectedWeights: Record<string, WeightKey>;
  onSelectWeight: (productId: string, weight: WeightKey) => void;
  onAddToCart: (productId: string) => void;
}

export function ProductsSection({
  products,
  selectedWeights,
  onSelectWeight,
  onAddToCart,
}: ProductsSectionProps) {
  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-white/70 border-y border-emeraldDeep/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
            تشكيلة العسل البلدي
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-emeraldDeep">
            اختر نوع العسل والوزن المناسب
          </h2>
          <p className="text-sm sm:text-base text-inkMuted tabular-nums">
            أسعار واضحة لجميع الأنواع:{' '}
            <strong className="text-emeraldDeep">ربع كيلو (150 ر.س)</strong> ·{' '}
            <strong className="text-emeraldDeep">نصف كيلو (250 ر.س)</strong> ·{' '}
            <strong className="text-emeraldDeep">كيلو (400 ر.س)</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 lg:gap-8">
          {products.map((prod) => {
            const currentWeight: WeightKey = selectedWeights[prod.id] || 'kilo';
            const currentPrice = prod.prices[currentWeight] ?? 400;

            return (
              <article
                key={prod.id}
                className="group rounded-3xl bg-white border border-emeraldDeep/10 overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-luxury"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-creamBase">
                    <ResilientImage
                      src={prod.image}
                      alt={prod.name}
                      fallbackTitle={prod.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="text-honeyGold">{prod.subtitle}</span>
                        <span aria-hidden="true" className="text-inkMuted">
                          ·
                        </span>
                        <span
                          className={
                            prod.available ? 'text-emeraldDeep' : 'text-red-700'
                          }
                        >
                          {prod.available ? 'متوفر الآن' : 'نفدت الكمية حالياً'}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-emeraldDeep mt-1">
                        {prod.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-inkMuted mt-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

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

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 flex items-center justify-between gap-3 border-t border-emeraldDeep/10">
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
                    className={`min-h-[44px] px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition whitespace-nowrap ${
                      prod.available
                        ? 'bg-gradient-to-l from-honeyGold to-honeyLight text-emeraldDeep shadow-goldGlow hover:brightness-105 cursor-pointer'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Plus className="w-4 h-4 shrink-0" />
                    <span>{prod.available ? 'أضف للسلة' : 'غير متوفر'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
