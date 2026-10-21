import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function ProductCategories({ onSelectCategory }) {
  // Only display the 4 main product categories (skipping 'all')
  const displayCategories = CATEGORIES.filter(cat => cat.id !== 'all');

  return (
    <section id="categories" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">
            <Utensils size={14} />
            <span>Product Categories</span>
          </span>
          <h2 className="section-title">Discover Our Product Range</h2>
          <p className="section-subtitle">
            Find the right blend for your kitchen and daily routine. Handcrafted in small batches
            using time-honoured South Indian culinary recipes.
          </p>
        </div>

        <div className="categories-grid">
          {displayCategories.map((cat, index) => (
            <article
              key={cat.id}
              className="category-card"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="category-img-wrap">
                <img
                  src={cat.image}
                  alt={`${cat.name} assortment`}
                  className="category-img"
                  loading="lazy"
                  width="400"
                  height="200"
                />
                <span className="category-badge-chip">{cat.badge}</span>
              </div>

              <div className="category-body">
                <h3 className="category-title">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                <button
                  type="button"
                  className="category-cta"
                  onClick={() => onSelectCategory(cat.id)}
                  aria-label={`Explore all products in ${cat.name}`}
                >
                  <span>Explore Products</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
