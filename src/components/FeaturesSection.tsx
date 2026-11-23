import { Award, ShieldCheck, Sprout, Truck } from 'lucide-react';

const FEATURES = [
  {
    id: 'direct-care',
    icon: Sprout,
    title: 'رعاية مباشرة من النحّالة',
    desc: 'متابعة ميدانية شخصية للخلايا في المدينة المنورة من التزهير حتى التعبئة.',
  },
  {
    id: 'ministry-license',
    icon: Award,
    title: 'ترخيص وزارة البيئة والمياه والزراعة',
    desc: 'منحل بلدي معتمد يعمل وفق الضوابط النظامية واشتراطات الجودة.',
  },
  {
    id: 'fast-delivery',
    icon: Truck,
    title: 'توصيل فوري داخل المدينة — دفع عند الاستلام',
    desc: 'تسليم سريع داخل المدينة المنورة مع إتاحة الدفع نقداً أو بالتحويل.',
  },
  {
    id: 'money-back',
    icon: ShieldCheck,
    title: 'ضمان استرداد المبلغ إذا لم تكن راضياً',
    desc: 'ثقة كاملة في نقاء العسل وطبيعته 100% دون أي إضافات.',
  },
];

export function FeaturesSection() {
  return (
    <section
      aria-label="مميزاتنا"
      className="py-12 sm:py-16 bg-creamCard border-b border-emeraldDeep/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="rounded-xl bg-creamBase border border-emeraldDeep/15 p-5 shadow-sm flex flex-col gap-2.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F6F0E0] text-honeyGold flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-display text-base sm:text-lg font-bold text-inkDark leading-snug">
                  {feat.title}
                </h2>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
