import { FileText, Shield } from 'lucide-react';
import { useState } from 'react';

type LegalTab = 'privacy' | 'terms';

export function LegalSection() {
  const [activeTab, setActiveTab] = useState<LegalTab>('privacy');

  return (
    <section
      id="legal"
      className="py-14 sm:py-20 bg-white border-t border-emeraldDeep/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold text-honeyGold">
              الشفافية وحفظ الحقوق
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-emeraldDeep">
              سياسة الخصوصية وشروط الاستخدام
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="السياسات القانونية"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-creamBase border border-emeraldDeep/15 self-start sm:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacy'}
              onClick={() => setActiveTab('privacy')}
              className={`min-h-[38px] px-4 py-1.5 rounded-lg text-xs font-extrabold inline-flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'bg-emeraldDeep text-honeyLight'
                  : 'text-inkMuted hover:text-emeraldDeep'
              }`}
            >
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>سياسة الخصوصية</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'terms'}
              onClick={() => setActiveTab('terms')}
              className={`min-h-[38px] px-4 py-1.5 rounded-lg text-xs font-extrabold inline-flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'bg-emeraldDeep text-honeyLight'
                  : 'text-inkMuted hover:text-emeraldDeep'
              }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>شروط الاستخدام</span>
            </button>
          </div>
        </div>

        {activeTab === 'privacy' ? (
          <div
            id="privacy"
            className="rounded-3xl bg-creamBase border border-emeraldDeep/15 p-6 sm:p-8 space-y-3 text-sm text-inkMuted leading-relaxed"
          >
            <h3 className="text-lg font-bold text-emeraldDeep">
              سياسة الخصوصية — مناحل آمنة عبد الكريم
            </h3>
            <p>
              نحترم خصوصية زوارنا وعملائنا بشكل كامل. الموقع لا يجمع بيانات شخصية
              عبر قواعد بيانات خارجية ولا يطلب بيانات بطاقات بنكية داخل الصفحات.
            </p>
            <ul className="space-y-2 list-disc list-inside text-inkDark">
              <li>
                <strong>بيانات نموذج الطلب والسلة:</strong> تُجهز محلياً على جهازك
                لتحويلها مباشرة إلى محادثة واتساب المنحل بناءً على رغبتك في إتمام
                الطلب.
              </li>
              <li>
                <strong>الموقع الجغرافي (GPS):</strong> اختياري بالكامل ولا يُستخدم
                إلا عند ضغطك على زر تحديد الموقع داخل السلة لتسهيل التوصيل الفوري
                في المدينة المنورة.
              </li>
              <li>
                <strong>عدم مشاركة البيانات:</strong> لا يتم بيع أو مشاركة رقم
                جوالك أو عنوانك مع أي جهة تسويقية خارجية، وتُستخدم فقط لتوصيل الطلب.
              </li>
            </ul>
          </div>
        ) : (
          <div
            id="terms"
            className="rounded-3xl bg-creamBase border border-emeraldDeep/15 p-6 sm:p-8 space-y-3 text-sm text-inkMuted leading-relaxed"
          >
            <h3 className="text-lg font-bold text-emeraldDeep">
              شروط الاستخدام والطلب والاسترجاع
            </h3>
            <ul className="space-y-2 list-disc list-inside text-inkDark">
              <li>
                <strong>الأسعار والأوزان:</strong> الأسعار المعلنة بالريال السعودي
                تشمل وزن العبوة المحدد (ربع كيلو، نصف كيلو، كيلو) وتُحتسب رسوم
                التوصيل أو الشحن حسب الموقع.
              </li>
              <li>
                <strong>آلية الدفع:</strong> يتوفر الدفع عند الاستلام داخل المدينة
                المنورة فقط، بينما تكون الطلبات خارج المدينة المنورة بالتحويل البنكي
                المسبق على حساب مصرف الراجحي المعتمد وإرسال الإيصال عبر واتساب.
              </li>
              <li>
                <strong>ضمان الجودة والاسترجاع:</strong> نلتزم بتقديم عسل طبيعي 100%
                مرخص، ويحق للعميل طلب الاسترجاع واسترداد المبلغ كاملاً في حال عدم
                الرضا أو وجود أي ملاحظة على جودة المنتج.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
