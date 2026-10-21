import React from 'react';
import { Leaf, MessageCircle } from 'lucide-react';
import { INGREDIENTS_HIGHLIGHT } from '../data/products';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';

export default function Ingredients() {
  return (
    <section id="ingredients" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">
            <Leaf size={14} />
            <span>Honest Ingredients</span>
          </span>
          <h2 className="section-title">Simple Ingredients. Authentic Flavours.</h2>
          <p className="section-subtitle">
            Great traditional taste starts with uncompromised quality. We carefully hand-select each
            ingredient, clean thoroughly, and gently roast to lock in natural aroma and flavour.
          </p>
        </div>

        <div className="ingredients-grid">
          {INGREDIENTS_HIGHLIGHT.map((ing, index) => (
            <div
              key={ing.name}
              className="ingredient-card"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <img
                src={ing.image}
                alt={ing.name}
                className="ingredient-img"
                loading="lazy"
                width="360"
                height="170"
              />
              <div className="ingredient-content">
                <div className="ingredient-role">{ing.role}</div>
                <h3 className="ingredient-name">{ing.name}</h3>
                <p className="ingredient-desc">{ing.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Callout */}
        <div className="ingredients-callout" data-aos="fade-up">
          <div className="callout-text">
            <h4>Have specific questions about allergen or preparation details?</h4>
            <p>
              We are completely transparent about what goes into every batch. Chat with us to clarify ingredients for your dietary preferences.
            </p>
          </div>
          <a
            href={getGeneralEnquiryUrl("Ingredients and Allergen Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Ask About Ingredients</span>
          </a>
        </div>
      </div>
    </section>
  );
}
