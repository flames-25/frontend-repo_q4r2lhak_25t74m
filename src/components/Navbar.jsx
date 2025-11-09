import { ShoppingCart, Laptop, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount, onToggleCart, search, setSearch }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <Laptop className="h-6 w-6 text-indigo-600" />
            <span className="text-lg">LapStore Second</span>
          </a>
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-center">
          <div className="w-full max-w-xl">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari laptop bekas..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleCart}
            className="relative inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-600 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 px-4 py-3 md:hidden">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari laptop bekas..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      )}
    </header>
  );
}
