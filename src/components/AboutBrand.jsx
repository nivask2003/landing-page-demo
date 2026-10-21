import React from 'react';
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../utils/whatsapp';

export default function AboutBrand() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          {/* Visual with Badge */}
          <div className="about-visual" data-aos="fade-right">
            <div className="about-img-frame">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                alt="Traditional kitchen preparation of spices and roasted grains"
                className="about-img"
                loading="lazy"
                width="500"
                height="480"
              />
            </div>

            <div className="about-badge-card">
              <div className="badge-stat">100%</div>
              <div className="badge-text">Homestyle Care</div>
            </div>
          </div>

          {/* Content Story */}
          <div className="about-content" data-aos="fade-left">
            <span className="section-badge">
              <Heart size={14} />
              <span>Our Heritage</span>
            </span>

            <h2 className="section-title">Our Story, Our Passion</h2>

            <p className="about-lead">
              Rooted in the culinary heritage of {BRAND_CONFIG.location}, we began with a simple mission:
              to revive the wholesome flavours and nutrition of home-cooked South Indian recipes.
            </p>

            <p className="about-text">
              In fast-paced modern routines, finding genuine traditional health mix powders and
              unadulterated homestyle spice blends can be difficult. We prepare every batch with the
              same patience, cleanliness, and dedication as one would for their own family.
            </p>

            <p className="about-text">
              From hand-picking native grains and sun-drying whole spices to controlled slow-roasting,
              our process ensures authentic aroma, natural goodness, and memorable taste in every meal.
            </p>

            <div className="about-features">
              <div className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>Small Batch Handcrafting</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>Zero Compromise on Quality</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>Traditional Roasting Methods</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 size={18} />
                <span>Personal Customer Attention</span>
              </div>
            </div>

            <a href="#products" className="btn btn-primary">
              <span>Know More About Our Products</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
