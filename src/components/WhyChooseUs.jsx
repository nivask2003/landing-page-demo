import React from 'react';
import { Wheat, Sparkles, PackageCheck, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/products';

const iconMap = {
  Wheat: Wheat,
  Sparkles: Sparkles,
  PackageCheck: PackageCheck,
  MessageCircleHeart: HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">
            <ShieldCheck size={14} />
            <span>Our Commitment</span>
          </span>
          <h2 className="section-title">A Taste of Tradition in Every Pack</h2>
          <p className="section-subtitle">
            We focus on honest ingredients, traditional preparation techniques, and responsive
            customer service to deliver nutritious meals straight to your family table.
          </p>
        </div>

        <div className="benefits-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="benefit-card"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="benefit-icon-wrapper">
                  <IconComponent size={32} />
                </div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
