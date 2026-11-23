import type { DiaryEntry } from '../types';
import { ResilientImage } from './ResilientImage';

interface DiarySectionProps {
  entries: DiaryEntry[];
}

export function DiarySection({ entries }: DiarySectionProps) {
  return (
    <section id="diary" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2 max-w-2xl">
          <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
            شفافية وثقة في كل خطوة
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep">
            يوميات المنحل والعناية بالنحل
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            تعرّف على كيف تعتني النحّالة آمنة عبد الكريم بخلايا النحل وتتابع مراحل الموسم
            خطوة بخطوة.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {entries.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-white border border-emeraldDeep/10 overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-luxury flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-creamBase">
                <ResilientImage
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 space-y-2 flex-1">
                <p className="text-xs font-bold text-honeyGold">{item.tag}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-emeraldDeep">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
