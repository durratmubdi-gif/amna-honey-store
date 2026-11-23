import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateHome: () => void;
}

export function Header({
  cartCount,
  onOpenCart,
  onNavigateHome,
}: HeaderProps) {
  const handleSectionLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string
  ) => {
    onNavigateHome();
    if (sectionId) {
      e.preventDefault();
      window.location.hash = '';
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 40);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-creamBase/95 backdrop-blur-md border-b border-emeraldDeep/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => handleSectionLink(e)}
          className="font-display text-xl sm:text-2xl font-extrabold text-emeraldDeep whitespace-nowrap shrink-0 hover:text-honeyGold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-honeyGold rounded-lg"
        >
          مناحل آمنة عبد الكريم
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-sm font-bold text-inkDark"
        >
          <a
            href="#story"
            onClick={(e) => handleSectionLink(e, 'story')}
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            الرئيسية
          </a>
          <a
            href="#products"
            onClick={(e) => handleSectionLink(e, 'products')}
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            منتجاتنا
          </a>
          <a
            href="#about"
            onClick={(e) => handleSectionLink(e, 'about')}
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            من نحن
          </a>
          <a
            href="#faq"
            onClick={(e) => handleSectionLink(e, 'faq')}
            className="whitespace-nowrap shrink-0 hover:text-honeyGold hover:underline underline-offset-8 transition-colors"
          >
            الأسئلة الشائعة
          </a>
        </nav>

        {/* Zone 3: Primary Cart Action */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2.5 min-h-[42px] px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-l from-honeyGold to-honeyLight text-white font-bold text-xs sm:text-sm shadow-goldGlow hover:brightness-105 active:scale-[0.98] transition cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emeraldDeep"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>السلة</span>
            <span className="tabular-nums bg-[#2C2C2C] text-white text-xs font-bold px-2 py-0.5 rounded-md">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
