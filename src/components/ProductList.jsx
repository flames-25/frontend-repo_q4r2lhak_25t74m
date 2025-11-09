import { useMemo } from "react";
import { Star } from "lucide-react";

export default function ProductList({ products, onAddToCart, search }) {
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.title, p.brand, p.cpu, p.ram, p.storage, p.condition]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [products, search]);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Daftar Laptop</h2>
        <p className="text-sm text-gray-500">{filtered.length} barang</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            {p.image ? (
              <img src={p.image} alt={p.title} className="h-40 w-full object-cover" />
            ) : (
              <div className="flex h-40 w-full items-center justify-center bg-gray-100 text-gray-400">No Image</div>
            )}
            <div className="space-y-2 p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs">4.8</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{p.brand} • {p.cpu} • {p.ram} • {p.storage}</p>
              <p className="text-sm text-gray-500">Kondisi: {p.condition}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-base font-semibold text-indigo-600">Rp {p.price.toLocaleString("id-ID")}</span>
                <button onClick={() => onAddToCart(p)} className="rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100">Tambah ke Keranjang</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
