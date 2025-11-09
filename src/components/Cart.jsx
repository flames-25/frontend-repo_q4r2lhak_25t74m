import { useMemo } from "react";
import { Trash2, ShoppingBag } from "lucide-react";

export default function Cart({ items, onRemove, onCheckout, open, onClose }) {
  const total = useMemo(
    () => items.reduce((sum, it) => sum + it.price * (it.qty ?? 1), 0),
    [items]
  );

  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h3 className="text-lg font-semibold">Keranjang</h3>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">Tutup</button>
        </div>
        <div className="flex h-[calc(100%-140px)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center text-gray-500">Belum ada barang</div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 rounded-lg border border-gray-200 p-3">
                  {it.image ? (
                    <img src={it.image} alt={it.title} className="h-16 w-16 rounded object-cover" />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded bg-gray-100 text-gray-400">No</div>
                  )}
                  <div className="flex flex-1 flex-col">
                    <span className="font-medium text-gray-900">{it.title}</span>
                    <span className="text-sm text-gray-500">Qty: {it.qty ?? 1}</span>
                    <span className="text-sm font-semibold text-indigo-600">Rp {(it.price * (it.qty ?? 1)).toLocaleString('id-ID')}</span>
                  </div>
                  <button onClick={() => onRemove(it.id)} className="self-start rounded-md p-2 text-gray-500 hover:bg-gray-100">
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-gray-200 p-4">
          <div className="mb-3 flex items-center justify-between text-sm text-gray-700">
            <span>Total</span>
            <span className="text-base font-semibold text-gray-900">Rp {total.toLocaleString('id-ID')}</span>
          </div>
          <button
            onClick={() => onCheckout(total)}
            disabled={items.length === 0}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ShoppingBag size={18} /> Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
