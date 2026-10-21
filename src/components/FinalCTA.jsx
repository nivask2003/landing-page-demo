import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-box" data-aos="zoom-in">
          <span className="final-cta-badge">
            <Sparkles size={15} />
            <span>Pure South Indian Goodness</span>
          </span>

          <h2 className="final-cta-title">Bring Home the Taste of Tradition</h2>

          <p className="final-cta-desc">
            Explore our wholesome health mix powders and homestyle masala blends.
            Speak with us directly on WhatsApp to choose the ideal pack sizes for your home.
          </p>

          <div className="final-cta-actions">
            <a
              href={getGeneralEnquiryUrl("Final CTA - Website Consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Chat with Us on WhatsApp</span>
            </a>

            <a
              href="#products"
              className="btn btn-turmeric btn-lg"
            >
              <span>Browse Our Products</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
