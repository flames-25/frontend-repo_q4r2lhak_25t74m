import { useState } from "react";
import { PlusCircle } from "lucide-react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: "",
    cpu: "",
    ram: "",
    storage: "",
    condition: "Sangat Baik",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return;
    const priceNum = Number(form.price);
    if (Number.isNaN(priceNum) || priceNum <= 0) return;
    onAdd({
      id: crypto.randomUUID(),
      ...form,
      price: priceNum,
      createdAt: new Date().toISOString(),
    });
    setForm({ title: "", brand: "", price: "", cpu: "", ram: "", storage: "", condition: "Sangat Baik", image: "" });
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Tambah Barang</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-gray-600">Nama Barang</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Contoh: MacBook Pro 2019" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">Merek</label>
          <input name="brand" value={form.brand} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Apple, ASUS, Lenovo..." />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">Harga (Rp)</label>
          <input name="price" type="number" min="0" value={form.price} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="8500000" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">CPU</label>
          <input name="cpu" value={form.cpu} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Intel i5 8th Gen" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">RAM</label>
          <input name="ram" value={form.ram} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="8GB" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">Storage</label>
          <input name="storage" value={form.storage} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="256GB SSD" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-gray-600">Kondisi</label>
          <select name="condition" value={form.condition} onChange={handleChange} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
            <option>Sangat Baik</option>
            <option>Baik</option>
            <option>Normal</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm text-gray-600">URL Gambar</label>
          <input name="image" value={form.image} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="https://..." />
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            <PlusCircle size={18} /> Tambah Barang
          </button>
        </div>
      </form>
    </section>
  );
}
