import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FAQ() {
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers about our traditional recipes, packing options, courier shipping,
            and simple WhatsApp ordering process.
          </p>
        </div>

        {/* 
          Accessible Accordion using native HTML <details name="faq-accordion"> 
          as recommended by Modern Web Best Practices (search-hidden-content)
        */}
        <div className="faq-accordion-group" data-aos="fade-up">
          {FAQS.map((faq, index) => (
            <details
              key={index}
              name="faq-accordion"
              className="faq-item"
              open={index === 0} // Open first question by default
            >
              <summary className="faq-summary">
                <span>{faq.question}</span>
                <ChevronDown className="faq-chevron" />
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
