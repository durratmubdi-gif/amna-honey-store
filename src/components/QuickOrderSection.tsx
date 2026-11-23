import { Copy, MessageCircle, Send } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import {
  WEIGHT_LABELS,
  WEIGHT_ORDER,
  buildWhatsappUrl,
} from '../data/defaultStore';
import type { Product, WeightKey } from '../types';

interface QuickOrderSectionProps {
  products: Product[];
  whatsapp: string;
  onShowToast: (msg: string) => void;
}

export function QuickOrderSection({
  products,
  whatsapp,
  onShowToast,
}: QuickOrderSectionProps) {
  const availableProducts = useMemo(
    () => products.filter((p) => p.available),
    [products]
  );
  const selectableProducts =
    availableProducts.length > 0 ? availableProducts : products;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [selectedProductId, setSelectedProductId] = useState<string>(
    selectableProducts[0]?.id || 'sidr'
  );
  const [selectedWeight, setSelectedWeight] = useState<WeightKey>('kilo');
  const [notes, setNotes] = useState('');

  const selectedProduct = useMemo(
    () =>
      products.find((p) => p.id === selectedProductId) ||
      selectableProducts[0] ||
      products[0],
    [products, selectableProducts, selectedProductId]
  );

  const unitPrice = selectedProduct?.prices[selectedWeight] ?? 400;

  const formattedMessage = useMemo(() => {
    const productName = selectedProduct?.name || 'عسل بلدي';
    const weightLabel = WEIGHT_LABELS[selectedWeight];
    const lines = [
      `السلام عليكم، أود طلب ${productName} - ${weightLabel} بسعر ${unitPrice} ريال`,
      '',
    ];
    if (customerName.trim()) lines.push(`• الاسم: ${customerName.trim()}`);
    if (customerPhone.trim()) lines.push(`• رقم الجوال: ${customerPhone.trim()}`);
    if (customerAddress.trim()) lines.push(`• العنوان: ${customerAddress.trim()}`);
    if (notes.trim()) lines.push(`• ملاحظات: ${notes.trim()}`);
    return lines.join('\n');
  }, [
    customerAddress,
    customerName,
    customerPhone,
    notes,
    selectedProduct,
    selectedWeight,
    unitPrice,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) {
      onShowToast('يرجى إدخال الاسم ورقم الجوال والعنوان لإرسال الطلب');
      return;
    }
    const url = buildWhatsappUrl(whatsapp, formattedMessage);
    window.location.assign(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      onShowToast('تم نسخ رسالة الطلب؛ يمكنك لصقها في واتساب');
    } catch {
      onShowToast('تعذر النسخ التلقائي');
    }
  };

  return (
    <section
      id="quick-order"
      className="py-16 sm:py-24 bg-white/80 border-t border-emeraldDeep/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs sm:text-sm font-extrabold text-honeyGold">
            طلب مباشر وسريع بدون تسجيل
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-emeraldDeep">
            نموذج الطلب السريع عبر واتساب
          </h2>
          <p className="text-sm sm:text-base text-inkMuted">
            عبّئ بياناتك في ثوانٍ وسيتم تجهيز رسالة طلبك وإرسالها مباشرة إلى واتساب المنحل.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-creamBase border border-emeraldDeep/15 p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="quick-name"
                className="block text-xs sm:text-sm font-bold text-emeraldDeep mb-1.5"
              >
                الاسم
              </label>
              <input
                id="quick-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="اكتب اسمك الكريم"
                className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-emeraldDeep/15 text-sm focus:outline-none focus:border-honeyGold"
              />
            </div>

            <div>
              <label
                htmlFor="quick-phone"
                className="block text-xs sm:text-sm font-bold text-emeraldDeep mb-1.5"
              >
                رقم الجوال
              </label>
              <input
                id="quick-phone"
                type="tel"
                dir="ltr"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="05XXXXXXXX"
                className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-emeraldDeep/15 text-sm text-left tabular-nums focus:outline-none focus:border-honeyGold"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="quick-address"
              className="block text-xs sm:text-sm font-bold text-emeraldDeep mb-1.5"
            >
              العنوان (المدينة والحي)
            </label>
            <input
              id="quick-address"
              type="text"
              required
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              placeholder="مثال: المدينة المنورة - حي العزيزية"
              className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-emeraldDeep/15 text-sm focus:outline-none focus:border-honeyGold"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="quick-product"
                className="block text-xs sm:text-sm font-bold text-emeraldDeep mb-1.5"
              >
                نوع العسل
              </label>
              <select
                id="quick-product"
                value={selectedProduct?.id || 'sidr'}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-emeraldDeep/15 text-sm font-bold text-emeraldDeep focus:outline-none focus:border-honeyGold"
              >
                {products.map((prod) => (
                  <option key={prod.id} value={prod.id} disabled={!prod.available}>
                    {prod.name}
                    {!prod.available ? ' (غير متوفر حالياً)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="quick-weight"
                className="block text-xs sm:text-sm font-bold text-emeraldDeep mb-1.5"
              >
                الوزن والسعر
              </label>
              <select
                id="quick-weight"
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value as WeightKey)}
                className="w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-white border border-emeraldDeep/15 text-sm font-bold text-emeraldDeep tabular-nums focus:outline-none focus:border-honeyGold"
              >
                {WEIGHT_ORDER.map((wKey) => (
                  <option key={wKey} value={wKey}>
                    {WEIGHT_LABELS[wKey]} — {selectedProduct?.prices[wKey] ?? 0} ريال
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="quick-notes"
              className="block text-xs sm:text-sm font-bold text-emeraldDeep mb-1.5"
            >
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              id="quick-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="وقت التوصيل المفضل أو أي تفاصيل إضافية..."
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-emeraldDeep/15 text-sm focus:outline-none focus:border-honeyGold"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-emeraldDeep/10">
            <div className="text-sm">
              <span className="text-inkMuted">السعر المختار:</span>{' '}
              <strong className="text-2xl font-extrabold text-emeraldDeep tabular-nums">
                {unitPrice} ريال
              </strong>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="submit"
                className="flex-1 sm:flex-initial min-h-[48px] px-6 py-3 rounded-2xl bg-[#128C7E] hover:bg-[#0e7468] text-white font-extrabold text-sm inline-flex items-center justify-center gap-2 shadow-md transition cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>اطلب عبر واتساب الآن</span>
                <Send className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="min-h-[48px] px-4 py-3 rounded-2xl bg-white border border-emeraldDeep/15 text-emeraldDeep font-bold text-xs sm:text-sm hover:border-honeyGold transition cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <Copy className="w-4 h-4 shrink-0" />
                <span>نسخ الطلب</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
