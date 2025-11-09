import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const seed = [
  {
    id: 's1',
    title: 'MacBook Pro 13" 2019',
    brand: 'Apple',
    price: 10500000,
    cpu: 'Intel i5 8th Gen',
    ram: '8GB',
    storage: '256GB SSD',
    condition: 'Baik',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 's2',
    title: 'ASUS ROG Zephyrus G14 2020',
    brand: 'ASUS',
    price: 12500000,
    cpu: 'Ryzen 7 4800HS',
    ram: '16GB',
    storage: '512GB SSD',
    condition: 'Sangat Baik',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 's3',
    title: 'Lenovo ThinkPad X1 Carbon Gen 7',
    brand: 'Lenovo',
    price: 8900000,
    cpu: 'Intel i7 8th Gen',
    ram: '16GB',
    storage: '512GB SSD',
    condition: 'Baik',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function App() {
  const [products, setProducts] = useState(seed);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

  const cartCount = useMemo(() => cart.reduce((s, it) => s + (it.qty ?? 1), 0), [cart]);

  const handleAddProduct = (prod) => {
    setProducts((prev) => [prod, ...prev]);
  };

  const handleAddToCart = (prod) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === prod.id);
      if (exist) {
        return prev.map((p) => (p.id === prod.id ? { ...p, qty: (p.qty ?? 1) + 1 } : p));
      }
      return [{ ...prod, qty: 1 }, ...prev];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCheckout = (total) => {
    alert(`Checkout berhasil! Total: Rp ${total.toLocaleString('id-ID')}`);
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} onToggleCart={() => setCartOpen((v) => !v)} search={search} setSearch={setSearch} />

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        <Hero />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ProductForm onAdd={handleAddProduct} />
          </div>
          <div className="lg:col-span-2">
            <ProductList products={products} onAddToCart={handleAddToCart} search={search} />
          </div>
        </div>
      </main>

      <Cart
        items={cart}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}
