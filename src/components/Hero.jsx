import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-pill" data-aos="fade-up" data-aos-delay="50">
              <Sparkles size={16} />
              <span>Authentic Homemade South Indian Kitchen Traditions</span>
            </div>

            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Traditional Goodness. <span className="highlight">Natural Taste.</span> Everyday Nutrition.
            </h1>

            <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
              Discover our range of nutritious health mix powders and flavourful masala blends,
              thoughtfully prepared to bring traditional taste and goodness to your everyday meals.
            </p>

            <div className="hero-cta-group" data-aos="fade-up" data-aos-delay="300">
              <a href="#products" className="btn btn-primary btn-lg">
                <span>Explore Our Products</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={getGeneralEnquiryUrl("Hero Section - General Inquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} />
                <span>Chat with Us on WhatsApp</span>
              </a>
            </div>

            {/* Verified Trust Attributes Area */}
            <div className="hero-trust-bar" data-aos="fade-up" data-aos-delay="400">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <span className="trust-label">Carefully Selected<br />Whole Grains</span>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box">
                  <Award size={18} />
                </div>
                <span className="trust-label">Authentic Traditional<br />Formulations</span>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box">
                  <HeartHandshake size={18} />
                </div>
                <span className="trust-label">Fresh Small-Batch<br />Preparation</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Presentation */}
          <div className="hero-visual" data-aos="fade-left" data-aos-duration="1000">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=85"
                alt="Traditional health mix powder in a wooden bowl surrounded by natural roasted grains, millets, and whole aromatic spices"
                className="hero-main-img"
                width="600"
                height="480"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Floating Trust Badge 1 */}
            <div className="hero-floating-card hero-card-1">
              <div className="card-icon-round">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="card-text-title">18+ Natural Ingredients</div>
                <div className="card-text-sub">Millets, Nuts & Whole Spices</div>
              </div>
            </div>

            {/* Floating Trust Badge 2 */}
            <div className="hero-floating-card hero-card-2">
              <div className="card-icon-round" style={{ backgroundColor: 'rgba(36, 75, 50, 0.12)' }}>
                <Award size={20} />
              </div>
              <div>
                <div className="card-text-title">Homestyle Roasting</div>
                <div className="card-text-sub">Ground with traditional care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
