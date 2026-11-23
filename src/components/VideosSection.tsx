interface VideoItem {
  id: string;
  kicker: string;
  title: string;
  description: string;
  duration: string;
  src: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'intro-license',
    kicker: 'التعريف والترخيص',
    title: 'مناحل بنت المدينة والأنواع',
    description:
      'نبذة عن النحّالة آمنة عبد الكريم وترخيص المنحل المتنقل ورخصة النحال المعتمدة وتشكيلة العسل الطبيعي.',
    duration: '0:59',
    src: './assets/aistudio/_____1_9a1bdfec.mp4',
  },
  {
    id: 'field-interview',
    kicker: 'لقاء ميداني في المنحل',
    title: 'رحلة النحل من البداية إلى 600 خلية',
    description:
      'لقاء تلفزيوني ميداني يوضح رعاية الخلايا، التنقل بين مواسم السدر والطلح والسمرة، وفحص العسل.',
    duration: '9:13',
    src: './assets/aistudio/_____2_620ec4a0.mp4',
  },
  {
    id: 'types-guide',
    kicker: 'دليل الأنواع',
    title: 'الفرق بين الطلح والسمرة والسدر',
    description:
      'تعرّف على خصائص عسل الطلح البري وعسل السمرة الشوكي وعسل السدر البلدي بأسلوب واضح وميسر.',
    duration: '0:59',
    src: './assets/aistudio/______361b5a8d.mp4',
  },
  {
    id: 'usage-guide',
    kicker: 'طريقة الاستخدام',
    title: 'طريقة تناول العسل الطبيعي وفوائده',
    description:
      'خطوات عملية لتناول العسل على الريق أو مع الماء الدافئ وماء زمزم والاستمتاع بقيمته الغذائية.',
    duration: '1:13',
    src: './assets/aistudio/___________91784e13.mp4',
  },
];

export function VideosSection() {
  return (
    <section
      id="videos-library"
      className="py-16 sm:py-24 bg-white/70 border-t border-emeraldDeep/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2 max-w-2xl">
          <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
            شاهد وتعرف عن قرب
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep">
            لقاءات ومقاطع من مناحل آمنة عبد الكريم
          </h2>
          <p className="text-sm sm:text-base text-inkMuted leading-relaxed">
            تعرّف على رحلة تربية النحل في المدينة المنورة، التراخيص المعتمدة، الفروقات
            بين الأنواع، وطريقة الاستخدام.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((video) => (
            <article
              key={video.id}
              className="rounded-3xl bg-white border border-emeraldDeep/10 p-5 flex flex-col justify-between gap-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-luxury"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="text-honeyGold">{video.kicker}</span>
                  <span aria-hidden="true" className="text-inkMuted">
                    ·
                  </span>
                  <span className="text-inkMuted tabular-nums">{video.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-emeraldDeep leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-inkMuted leading-relaxed">
                  {video.description}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-[#24140A] border border-emeraldDeep/15">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-[250px] object-contain bg-black block"
                >
                  <source src={video.src} type="video/mp4" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
