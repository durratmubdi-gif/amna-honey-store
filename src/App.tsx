import { CheckCircle2, Lock, MessageCircle } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AboutTrustSection } from './components/AboutTrustSection';
import { AdminModal } from './components/AdminModal';
import { CartDrawer } from './components/CartDrawer';
import { DeliverySection } from './components/DeliverySection';
import { DiarySection } from './components/DiarySection';
import { FaqSection } from './components/FaqSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HoneyAssistant } from './components/HoneyAssistant';
import { ProductsSection } from './components/ProductsSection';
import { QuickOrderSection } from './components/QuickOrderSection';
import { VideosSection } from './components/VideosSection';
import {
  WEIGHT_LABELS,
  buildWhatsappUrl,
  formatDisplayPhone,
  loadStoreState,
  saveStoreState,
} from './data/defaultStore';
import type { CartItem, StoreState, WeightKey } from './types';

export default function App() {
  const [store, setStore] = useState<StoreState>(() => loadStoreState());
  const [selectedWeights, setSelectedWeights] = useState<Record<string, WeightKey>>({
    sidr: 'kilo',
    talh: 'kilo',
    samra: 'kilo',
  });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const totalCartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const generalWhatsappUrl = useMemo(
    () =>
      buildWhatsappUrl(
        store.whatsapp,
        'السلام عليكم، أود الطلب من مناحل آمنة عبد الكريم بالمدينة المنورة.'
      ),
    [store.whatsapp]
  );

  const handleSelectWeight = (productId: string, weight: WeightKey) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleAddToCart = (productId: string) => {
    const prod = store.products.find((p) => p.id === productId);
    if (!prod || !prod.available) return;

    const weight: WeightKey = selectedWeights[productId] || 'kilo';
    const unitPrice = prod.prices[weight];

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.productId === productId && i.weight === weight
      );
      if (existingIdx >= 0) {
        return prev.map((item, idx) =>
          idx === existingIdx ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          key: `${productId}_${weight}`,
          productId,
          name: prod.name,
          weight,
          weightLabel: WEIGHT_LABELS[weight],
          unitPrice,
          qty: 1,
        },
      ];
    });

    showToast(`تمت إضافة ${prod.name} (${WEIGHT_LABELS[weight]}) إلى السلة`);
  };

  const handleChangeCartQty = (index: number, delta: number) => {
    setCart((prev) => {
      const next = [...prev];
      const target = next[index];
      if (!target) return prev;
      const newQty = target.qty + delta;
      if (newQty <= 0) {
        next.splice(index, 1);
      } else {
        next[index] = { ...target, qty: newQty };
      }
      return next;
    });
  };

  const handleSaveStore = (next: StoreState) => {
    setStore(next);
    saveStoreState(next);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          <div className="bg-emeraldDeep text-creamBase px-5 py-3 rounded-full shadow-luxury border border-honeyGold/40 flex items-center gap-2 text-xs sm:text-sm font-medium whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-honeyLight shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1">
        <HeroSection whatsapp={store.whatsapp} />
        <ProductsSection
          products={store.products}
          whatsapp={store.whatsapp}
          selectedWeights={selectedWeights}
          onSelectWeight={handleSelectWeight}
          onAddToCart={handleAddToCart}
        />
        <AboutTrustSection />
        <DiarySection entries={store.diary} />
        <VideosSection />
        <FaqSection />
        <QuickOrderSection
          products={store.products}
          whatsapp={store.whatsapp}
          onShowToast={showToast}
        />
        <DeliverySection onShowToast={showToast} />
      </main>

      {/* Footer with End-of-Page WhatsApp Action */}
      <footer className="bg-[#10251B] text-creamBase/85 pt-8 pb-20 md:pb-8 border-t border-honeyGold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="text-center sm:text-right">
            <strong className="text-white">مناحل آمنة عبد الكريم</strong> — عسل سدرة
            المدينة المنورة وطلح وسمرة طبيعي 100% · واتساب:{' '}
            <span dir="ltr" className="tabular-nums">
              {formatDisplayPhone(store.whatsapp)}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[38px] px-4 py-1.5 rounded-xl bg-[#128C7E] hover:bg-[#0e7468] text-white font-bold transition whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>اطلب عبر واتساب</span>
            </a>

            <button
              type="button"
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 text-honeyLight/90 hover:text-honeyLight underline underline-offset-4 cursor-pointer whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>إدارة المنحل</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom WhatsApp Bar (<= 15% mobile height cap combined with header) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 h-[54px] bg-emeraldDeep/95 backdrop-blur-md border-t border-honeyGold/30 px-4 flex items-center justify-between gap-3">
        <span className="text-xs font-bold text-creamBase truncate">
          عسل طبيعي 100% · توصيل فوري بالمدينة
        </span>
        <a
          href={generalWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[38px] px-4 py-1.5 rounded-xl bg-[#128C7E] hover:bg-[#0e7468] text-white font-extrabold text-xs inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>اطلب عبر واتساب</span>
        </a>
      </div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        whatsapp={store.whatsapp}
        onChangeQty={handleChangeCartQty}
        onShowToast={showToast}
      />

      <HoneyAssistant store={store} />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        store={store}
        onSaveStore={handleSaveStore}
        onShowToast={showToast}
      />
    </div>
  );
}
