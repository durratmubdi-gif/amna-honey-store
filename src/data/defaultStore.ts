import heroShowcaseImg from '../assets/images/hero_honey_showcase_1795418459891.jpg';
import sidrHoneyImg from '../assets/images/product_sidr_honey_1795418460488.jpg';
import talhHoneyImg from '../assets/images/product_talh_honey_1795418460384.jpg';
import samraHoneyImg from '../assets/images/product_samra_honey_1795418460790.jpg';
import diaryHivesImg from '../assets/images/diary_apiary_hives_1795418460711.jpg';
import diaryHarvestImg from '../assets/images/diary_honey_harvest_1795418461563.jpg';
import amnaPortraitImg from '../assets/images/beekeeper_amna_portrait_1795427164470.jpg';
import type { FaqItem, ReviewItem, StoreState, WeightKey } from '../types';

export const STORAGE_KEY = 'amna_honey_store_v1';
export const DEFAULT_IBAN = 'SA09 8000 0272 6080 1030 2900';
export const BENEFICIARY_NAME = 'آمنة عبد الكريم';

export const HERO_SHOWCASE_IMAGE = heroShowcaseImg;
export const DIARY_DEFAULT_IMAGE = diaryHivesImg;
export const AMNA_PORTRAIT_IMAGE = amnaPortraitImg;

export const WEIGHT_LABELS: Record<WeightKey, string> = {
  quarter: 'ربع كيلو',
  half: 'نصف كيلو',
  kilo: 'كيلو',
};

export const WEIGHT_ORDER: WeightKey[] = ['quarter', 'half', 'kilo'];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'أبو عبد الرحمن الجهني',
    city: 'المدينة المنورة',
    product: 'عسل سدرة المدينة المنورة · كيلو',
    quote:
      'طلبت عسل السدرة ووصلني خلال ساعات داخل المدينة، القوام ثقيل والرائحة بلدية أصيلة وطعمه واضح أنه صافي من الخلية.',
  },
  {
    id: 'rev-2',
    author: 'أم سارة الحربي',
    city: 'جدة',
    product: 'عسل طلح أصلي · نصف كيلو',
    quote:
      'ثاني مرة أطلب عسل الطلح للوالدة؛ التغليف محكم جداً والشحن وصل سريعاً، والأجمل المصداقية والوضوح في التعامل عبر الواتساب.',
  },
  {
    id: 'rev-3',
    author: 'فيصل العتيبي',
    city: 'الرياض',
    product: 'عسل سمرة طبيعي · كيلو',
    quote:
      'ما شاء الله تبارك الله، عسل السمرة غني جداً ومناسب لروتين الصباح، والالتزام بالمعايير والترخيص يعطي راحة بال كبيرة.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-natural',
    question: 'هل العسل طبيعي 100%؟',
    answer:
      'نعم، جميع أعسال مناحل آمنة عبد الكريم طبيعية 100% من إنتاج مناحل بلدية مرخصة، تُفرز على البارد دون أي إضافات أو تغذية صناعية، مع ضمان استرداد المبلغ كاملاً إذا ثبت غير ذلك.',
  },
  {
    id: 'faq-delivery',
    question: 'ما مدة التوصيل؟ وهل الدفع عند الاستلام متاح؟',
    answer:
      'داخل المدينة المنورة التوصيل فوري في نفس اليوم وتتوفر خدمة الدفع عند الاستلام أو التحويل البنكي. خارج المدينة المنورة يتم التوصيل خلال 2 إلى 4 أيام عمل والدفع بالتحويل البنكي المسبق فقط.',
  },
  {
    id: 'faq-quality',
    question: 'كيف أضمن جودة المنتج؟',
    answer:
      'المناحل حاصلة على رخصة النحال وترخيص المنحل المتنقل المعتمد من وزارة البيئة والمياه والزراعة، ويتم تتبع موسم كل زهرة وفحص القوام والنقاء قبل التعبئة مباشرة.',
  },
  {
    id: 'faq-return',
    question: 'ما سياسة الاسترجاع؟',
    answer:
      'رضاك وأمانة اللقمة أولوية: في حال وجود أي ملاحظة على جودة العسل أو عدم مطابقته للمواصفات الطبيعية، يُسترجع المنتج ويُرد المبلغ كاملاً فوراً دون تعقيد.',
  },
];

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
      imageAlt: 'عسل سدرة المدينة المنورة بلدي صافي من مناحل آمنة عبد الكريم',
      prices: {
        quarter: 150,
        half: 250,
        kilo: 400,
      },
      details: {
        taste: 'حلاوة متوازنة مع نفحة أزهار السدر الدافئة وعبق عطري مميز',
        color: 'كهرماني ذهبي داكن يزداد عمقاً مع النضج الطبيعي',
        benefits: 'يمد الجسم بطاقة صباحية لطيفة ويدعم المناعة اليومية والنشاط العام',
        season: 'موسم تزهير أشجار السدر البري في الأودية والشعاب',
        usageAndStorage:
          'ملعقة على الريق أو مع ماء دافئ صباحاً؛ يُحفظ في عبوة زجاجية محكمة بدرجة حرارة الغرفة بعيداً عن الشمس.',
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
      imageAlt: 'عسل طلح أصلي من مناحل بلدية طبيعية في المدينة المنورة',
      prices: {
        quarter: 150,
        half: 250,
        kilo: 400,
      },
      details: {
        taste: 'نكهة برية واضحة بلمسة خشبية لطيفة وحلاوة معتدلة غير لاذعة',
        color: 'عنبر محمر دافئ بصفاء طبيعي لافت',
        benefits: 'مناسب للاستخدام اليومي، يريح المعدة والقولون ويساعد على توازن الحيوية',
        season: 'موسم إزهار أشجار الطلح البري في أواخر الربيع وبداية الصيف',
        usageAndStorage:
          'ملعقة صباحاً قبل الإفطار بربع ساعة؛ يُخزن في مكان جاف ومظلم ولا يُعرض للحرارة المباشرة.',
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
      imageAlt: 'عسل سمرة طبيعي داكن من مناحل بلدية معتمدة في المدينة المنورة',
      prices: {
        quarter: 150,
        half: 250,
        kilo: 400,
      },
      details: {
        taste: 'مذاق مركز عميق بنكهة السمرة الشوكية الأصيلة وقوام متماسك',
        color: 'بني داكن يميل إلى الياقوتي الداكن تحت الإضاءة',
        benefits: 'غني بالمعادن ومضادات الأكسدة الطبيعية، مفضل للنشاط البدني ومواسم البرد',
        season: 'موسم رعي النحل على أزهار شجر السمر الجبلي والصحراوي',
        usageAndStorage:
          'ملعقة على الريق أو مع الماء الدافئ أو ماء زمزم؛ يُحفظ محكم الإغلاق بعيداً عن الرطوبة والضوء.',
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
      imageAlt: 'خلايا مناحل بلدية خشبية في المدينة المنورة بإشراف آمنة عبد الكريم',
    },
    {
      id: 'd2',
      tag: 'فرز وتعبئة',
      title: 'فرز العسل وتعبئته بأمانة',
      desc: 'الاهتمام بنظافة الأدوات والعبوات والحفاظ على خصائص العسل الطبيعية دون تدخل يخل بجودته.',
      image: diaryHarvestImg,
      imageAlt: 'فرز وتعبئة عسل سدرة المدينة المنورة وعسل طلح أصلي بأمانة',
    },
    {
      id: 'd3',
      tag: 'خدمة العملاء',
      title: 'تجهيز الطلبات وتوصيلها بسرعة',
      desc: 'توصيل فوري داخل المدينة المنورة مع إمكانية الدفع عند الاستلام، وشحن منظم لخارج المدينة.',
      image: heroShowcaseImg,
      imageAlt: 'تجهيز عبوات عسل سمرة طبيعي وعسل سدرة للتوصيل الفوري',
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
              details: p.details ?? fallback?.details,
              imageAlt: p.imageAlt ?? fallback?.imageAlt,
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
              imageAlt: d.imageAlt ?? fallback.imageAlt,
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
