import type { DiaryEntry } from '../types';
import { ResilientImage } from './ResilientImage';

interface DiarySectionProps {
  entries: DiaryEntry[];
}

export function DiarySection({ entries }: DiarySectionProps) {
  return (
    <section id="diary" className="py-16 sm:py-24 bg-creamBase border-b border-emeraldDeep/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2 max-w-2xl">
          <p className="text-xs sm:text-sm font-bold text-honeyGold">
            صور المنحل والبيئة الطبيعية
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-inkDark">
            بيئة المنحل ويوميات العناية بالنحل
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            لمحات حقيقية من خلايا النحل في مواقعها الطبيعية بمنطقة المدينة المنورة
            ومراحل الفرز والتجهيز.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((item) => (
            <article
              key={item.id}
              className="rounded-xl bg-white border border-emeraldDeep/15 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-creamCard">
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fallbackTitle={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 space-y-2 flex-1">
                <p className="text-xs font-bold text-honeyGold">{item.tag}</p>
                <h3 className="font-display text-xl font-bold text-inkDark">
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
