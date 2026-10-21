import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { getProductEnquiryUrl } from '../utils/whatsapp';

export default function ProductCard({ product, index }) {
  const [selectedWeight, setSelectedWeight] = useState(
    product.defaultWeight || (product.weights && product.weights[0]) || ""
  );

  const enquiryUrl = getProductEnquiryUrl(product.name, selectedWeight);

  return (
    <article
      className="product-card"
      data-aos="fade-up"
      data-aos-delay={((index % 3) + 1) * 100}
    >
      {/* Product Image and Badges */}
      <div className="product-media">
        <img
          src={product.image}
          alt={`${product.name} packaging`}
          className="product-img"
          loading="lazy"
          width="400"
          height="220"
        />
        {product.badge && (
          <span className="product-badge-flag">{product.badge}</span>
        )}
        <span className="product-category-tag">{product.categoryLabel}</span>
      </div>

      {/* Product Details */}
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.shortDescription}</p>

        {/* Highlights / Verified Features */}
        {product.highlights && product.highlights.length > 0 && (
          <div className="product-highlights">
            {product.highlights.map((highlight, idx) => (
              <span key={idx} className="highlight-tag">
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Weight Selector & Pricing Row */}
        <div className="product-meta-row">
          <div className="price-box">
            <span className="price-main">{product.price}</span>
            <span className="price-note">{product.priceNote}</span>
          </div>

          {/* Interactive Weight Selection */}
          {product.weights && product.weights.length > 0 && (
            <div className="weights-selector" role="radiogroup" aria-label={`Select pack size for ${product.name}`}>
              {product.weights.map((weight) => (
                <button
                  key={weight}
                  type="button"
                  role="radio"
                  aria-checked={selectedWeight === weight}
                  className={`weight-pill ${selectedWeight === weight ? 'selected' : ''}`}
                  onClick={() => setSelectedWeight(weight)}
                >
                  {weight}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Direct WhatsApp CTA */}
        <a
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp product-card-cta"
          aria-label={`Enquire about ${product.name} (${selectedWeight}) on WhatsApp`}
        >
          <MessageCircle size={18} />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
