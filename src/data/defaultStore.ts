import heroShowcaseImg from '../assets/images/hero_honey_showcase_1795418459891.jpg';
import sidrHoneyImg from '../assets/images/product_sidr_honey_1795418460488.jpg';
import talhHoneyImg from '../assets/images/product_talh_honey_1795418460384.jpg';
import samraHoneyImg from '../assets/images/product_samra_honey_1795418460790.jpg';
import diaryHivesImg from '../assets/images/diary_apiary_hives_1795418460711.jpg';
import diaryHarvestImg from '../assets/images/diary_honey_harvest_1795418461563.jpg';
import type { StoreState, WeightKey } from '../types';

export const STORAGE_KEY = 'amna_honey_store_v1';
export const DEFAULT_IBAN = 'SA09 8000 0272 6080 1030 2900';
export const BENEFICIARY_NAME = 'آمنة عبد الكريم';

export const HERO_SHOWCASE_IMAGE = heroShowcaseImg;
export const DIARY_DEFAULT_IMAGE = diaryHivesImg;

export const WEIGHT_LABELS: Record<WeightKey, string> = {
  quarter: 'ربع كيلو',
  half: 'نصف كيلو',
  kilo: 'كيلو',
};

export const WEIGHT_ORDER: WeightKey[] = ['quarter', 'half', 'kilo'];

export const defaultStoreState: StoreState = {
  whatsapp: '966597176168',
  adminPass: '1234',
  products: [
    {
      id: 'sidr',
      name: 'عسل سدرة بلدي',
      subtitle: 'قوام غني ونكهة أصيلة',
      description:
        'عسل سدرة طبيعي مختار بعناية، يتميز بقوامه الفاخر وطعمه الأصيل الذي يفضله عشاق العسل البلدي في المدينة المنورة وخارجها.',
      available: true,
      image: sidrHoneyImg,
      prices: {
        quarter: 150,
        half: 250,
        kilo: 400,
      },
    },
    {
      id: 'talh',
      name: 'عسل طلح بلدي',
      subtitle: 'نكهة برية مميزة وقيمة عالية',
      description:
        'عسل طلح طبيعي بنكهته البرية المميزة وقوامه المتوازن، يُعد من الخيارات المحبوبة للاستخدام اليومي المتواصل.',
      available: true,
      image: talhHoneyImg,
      prices: {
        quarter: 150,
        half: 250,
        kilo: 400,
      },
    },
    {
      id: 'samra',
      name: 'عسل سمرة بلدي',
      subtitle: 'لون داكن وطابع جبلي أصيل',
      description:
        'عسل سمرة بلدي ذو لون داكن غني وحضور مميز، يجمع بين العراقة والعناية المباشرة بالخلايا.',
      available: true,
      image: samraHoneyImg,
      prices: {
        quarter: 150,
        half: 250,
        kilo: 400,
      },
    },
  ],
  diary: [
    {
      id: 'd1',
      tag: 'رعاية النحل',
      title: 'تفقد الخلايا وتهيئة بيئة النحل',
      desc: 'متابعة دورية لخلايا النحل والاطمئنان على نشاطها وصحتها لضمان موسم إنتاج نظيف ومتوازن.',
      image: diaryHivesImg,
    },
    {
      id: 'd2',
      tag: 'فرز وتعبئة',
      title: 'فرز العسل وتعبئته بأمانة',
      desc: 'الاهتمام بنظافة الأدوات والعبوات والحفاظ على خصائص العسل الطبيعية دون تدخل يخل بجودته.',
      image: diaryHarvestImg,
    },
    {
      id: 'd3',
      tag: 'خدمة العملاء',
      title: 'تجهيز الطلبات وتوصيلها بسرعة',
      desc: 'توصيل فوري داخل المدينة المنورة مع إمكانية الدفع عند الاستلام، وشحن منظم لخارج المدينة.',
      image: heroShowcaseImg,
    },
  ],
};

export function formatDisplayPhone(waNumber?: string): string {
  const cleaned = (waNumber || '').replace(/\D/g, '');
  if (cleaned.startsWith('966') && cleaned.length === 12) {
    return '0' + cleaned.slice(3);
  }
  return cleaned || '0597176168';
}

export function buildWhatsappUrl(waNumber: string, text: string): string {
  const cleanWa = (waNumber || '966597176168').replace(/\D/g, '');
  return `https://wa.me/${cleanWa}?text=${encodeURIComponent(text)}`;
}

function shouldReplaceImagePath(image?: string): boolean {
  if (!image) return true;
  return (
    image.includes('unsplash.com') ||
    image.startsWith('/src/assets/images/')
  );
}

export function loadStoreState(): StoreState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultStoreState);
    const parsed = JSON.parse(raw) as Partial<StoreState>;

    const products =
      Array.isArray(parsed.products) && parsed.products.length > 0
        ? parsed.products.map((p) => {
            const fallback = defaultStoreState.products.find((d) => d.id === p.id);
            return {
              ...(fallback ?? defaultStoreState.products[0]),
              ...p,
              image: shouldReplaceImagePath(p.image)
                ? fallback?.image ?? defaultStoreState.products[0].image
                : p.image,
            };
          })
        : structuredClone(defaultStoreState.products);

    const diary =
      Array.isArray(parsed.diary) && parsed.diary.length > 0
        ? parsed.diary.map((d, idx) => {
            const fallback = defaultStoreState.diary[idx % defaultStoreState.diary.length];
            return {
              ...d,
              image: shouldReplaceImagePath(d.image) ? fallback.image : d.image,
            };
          })
        : structuredClone(defaultStoreState.diary);

    return {
      whatsapp: parsed.whatsapp || defaultStoreState.whatsapp,
      adminPass: parsed.adminPass || defaultStoreState.adminPass,
      products,
      diary,
    };
  } catch {
    return structuredClone(defaultStoreState);
  }
}

export function saveStoreState(next: StoreState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage quota or privacy-mode restrictions
  }
}
