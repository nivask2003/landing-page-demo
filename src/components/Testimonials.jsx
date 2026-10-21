import React from 'react';
import { Quote, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">
            <MessageSquare size={14} />
            <span>Customer Experiences</span>
          </span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Read real feedback from households who enjoy our traditional health mixes and aromatic masala powders.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div>
                <Quote size={36} className="quote-icon" />
                <div className="testimonial-stars" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <blockquote className="testimonial-quote">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="testimonial-author">
                <div className="author-info">
                  <h5>{t.authorName}</h5>
                  <span>{t.authorLocation} • {t.productUsed}</span>
                </div>
                {t.verifiedBuyer && (
                  <span className="verified-pill">
                    <CheckCircle size={12} />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
