import { CheckCircle2, Lock } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AdminModal } from './components/AdminModal';
import { CartDrawer } from './components/CartDrawer';
import { DeliverySection } from './components/DeliverySection';
import { DiarySection } from './components/DiarySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HoneyAssistant } from './components/HoneyAssistant';
import { ProductsSection } from './components/ProductsSection';
import { VideosSection } from './components/VideosSection';
import {
  WEIGHT_LABELS,
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
          selectedWeights={selectedWeights}
          onSelectWeight={handleSelectWeight}
          onAddToCart={handleAddToCart}
        />
        <DiarySection entries={store.diary} />
        <VideosSection />
        <DeliverySection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <footer className="bg-[#10251B] text-creamBase/85 py-8 border-t border-honeyGold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div>
            <strong className="text-white">مناحل آمنة عبد الكريم</strong> — عسل بلدي من
            المدينة المنورة · واتساب:{' '}
            <span dir="ltr" className="tabular-nums">
              {formatDisplayPhone(store.whatsapp)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsAdminOpen(true)}
            className="inline-flex items-center gap-1.5 text-honeyLight/90 hover:text-honeyLight underline underline-offset-4 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>إدارة المنحل</span>
          </button>
        </div>
      </footer>

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
