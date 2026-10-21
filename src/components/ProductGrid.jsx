import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function ProductGrid({ activeCategory, setActiveCategory }) {
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">
            <Flame size={14} />
            <span>Pure & Homemade</span>
          </span>
          <h2 className="section-title">Our Popular Products</h2>
          <p className="section-subtitle">
            Every blend is prepared using authentic South Indian roasting traditions.
            Select your preferred pack size and connect directly with us for instant order assistance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="product-filter-bar" role="tablist" aria-label="Product categories" data-aos="fade-up">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
