export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 sm:p-10">
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          Toko Laptop Bekas Berkualitas
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
          Temukan laptop second hand dengan kondisi terjamin, harga bersahabat, dan garansi toko. Tambah barang dagangan Anda dan langsung jual di etalase.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-white/80 px-3 py-1 text-gray-700 shadow-sm ring-1 ring-gray-200">Bergaransi</span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-gray-700 shadow-sm ring-1 ring-gray-200">Cek fisik & performa</span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-gray-700 shadow-sm ring-1 ring-gray-200">Harga Transparan</span>
        </div>
      </div>
    </section>
  );
}
