import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Header({ cartCount, onOpenCart }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-creamBase/90 backdrop-blur-md border-b border-emeraldDeep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="font-display text-xl sm:text-2xl font-bold text-emeraldDeep whitespace-nowrap shrink-0 hover:text-emeraldSoft transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honeyGold rounded-sm"
        >
          مناحل آمنة عبد الكريم
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-sm font-semibold text-inkDark"
        >
          <a
            href="#story"
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            قصتنا والعناية
          </a>
          <a
            href="#products"
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            متجر العسل
          </a>
          <a
            href="#diary"
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            يوميات المنحل
          </a>
          <a
            href="#delivery-info"
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            التوصيل والدفع
          </a>
        </nav>

        {/* Zone 3: Primary Cart Action */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2.5 min-h-[42px] px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-l from-honeyGold to-honeyLight text-emeraldDeep font-extrabold text-xs sm:text-sm shadow-goldGlow hover:brightness-105 active:scale-[0.98] transition cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emeraldDeep"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>السلة</span>
            <span className="tabular-nums bg-emeraldDeep text-honeyLight text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
