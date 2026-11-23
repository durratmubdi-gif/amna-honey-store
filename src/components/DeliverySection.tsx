import { Check, Copy, Landmark, Truck, Zap } from 'lucide-react';
import { useState } from 'react';
import { BENEFICIARY_NAME, DEFAULT_IBAN } from '../data/defaultStore';

interface DeliverySectionProps {
  onShowToast: (msg: string) => void;
}

export function DeliverySection({ onShowToast }: DeliverySectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyIban = async () => {
    try {
      await navigator.clipboard.writeText(DEFAULT_IBAN.replace(/\s+/g, ''));
      setCopied(true);
      onShowToast('تم نسخ رقم الآيبان بنجاح');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onShowToast('تعذر النسخ التلقائي، يمكنك تحديد الآيبان ونسخه يدوياً');
    }
  };

  return (
    <section id="delivery-info" className="py-16 sm:py-20 bg-emeraldDeep text-creamBase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-bold text-honeyLight">آلية الطلب والتسليم</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            التوصيل والدفع بكل وضوح ويسر
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Inside Madinah */}
          <div className="rounded-3xl bg-emeraldSoft/85 border border-honeyGold/25 p-6 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-honeyGold/20 flex items-center justify-center text-honeyLight">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-honeyLight">داخل المدينة المنورة</h3>
            <p className="text-sm text-creamBase/90 leading-relaxed">
              التوصيل <strong>فوري</strong> مع احتساب رسوم التوصيل حسب الموقع المرسل
              (ويمكنك تحديد موقعك عبر GPS مباشرة في السلة).
            </p>
            <p className="text-xs text-honeyLight font-bold pt-1">
              ✓ يتوفر الدفع عند الاستلام داخل المدينة المنورة فقط.
            </p>
          </div>

          {/* Outside Madinah */}
          <div className="rounded-3xl bg-emeraldSoft/85 border border-honeyGold/25 p-6 space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-honeyGold/20 flex items-center justify-center text-honeyLight">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-honeyLight">خارج المدينة المنورة</h3>
            <p className="text-sm text-creamBase/90 leading-relaxed">
              التوصيل والشحن متاح إلى مختلف المناطق وتُحدد آليته وتكلفته بحسب المنطقة.
            </p>
            <p className="text-xs text-amber-200 font-bold pt-1">
              ✕ لا يتوفر الدفع عند الاستلام خارج المدينة؛ الدفع بالتحويل المسبق فقط.
            </p>
          </div>

          {/* Bank Transfer */}
          <div className="rounded-3xl bg-white text-inkDark p-6 space-y-3.5 shadow-luxury">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-emeraldDeep">
                مصرف الراجحي
              </span>
              <Landmark className="w-5 h-5 text-honeyGold" />
            </div>
            <h3 className="text-2xl font-bold text-emeraldDeep">بيانات التحويل البنكي</h3>
            <div className="text-sm space-y-2">
              <div>
                <span className="text-inkMuted">الاسم للتحويل:</span>{' '}
                <strong className="text-emeraldDeep">{BENEFICIARY_NAME}</strong>
              </div>
              <div className="bg-creamBase p-2.5 rounded-xl border border-emeraldDeep/15 flex items-center justify-between gap-2">
                <code
                  dir="ltr"
                  className="text-xs font-bold text-emeraldDeep select-all tabular-nums"
                >
                  {DEFAULT_IBAN}
                </code>
                <button
                  type="button"
                  onClick={handleCopyIban}
                  className="min-h-[34px] px-3 py-1 rounded-lg bg-emeraldDeep text-honeyLight text-xs font-bold hover:bg-emeraldSoft transition cursor-pointer shrink-0 inline-flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم النسخ' : 'نسخ الآيبان'}</span>
                </button>
              </div>
            </div>
            <p className="text-xs text-inkMuted leading-relaxed">
              لتأكيد الطلب يرجى ترك رسالة أو تحويل مبلغ العسل المطلوب وإرسال الإيصال
              والطلبات التي تودها عبر الواتساب.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
