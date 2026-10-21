import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { BRAND_CONFIG, getGeneralEnquiryUrl } from '../utils/whatsapp';
import { CATEGORIES } from '../data/products';

// Clean SVG Brand Icons for Instagram & Facebook
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer({ onSelectCategory }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="footer-brand-title">{BRAND_CONFIG.brandName}</div>
            <div className="footer-brand-tagline">{BRAND_CONFIG.tagline}</div>
            <p className="footer-brand-desc">
              Thoughtfully prepared traditional health mix powders and homestyle masala blends,
              bringing authentic South Indian nourishment to your dining table.
            </p>
            <div className="footer-social-links" aria-label="Social media links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Follow us on Instagram (placeholder)"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Follow us on Facebook (placeholder)"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={getGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#products" className="footer-link">Our Products</a></li>
              <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
              <li><a href="#ingredients" className="footer-link">Ingredients & Quality</a></li>
              <li><a href="#about" className="footer-link">Our Story</a></li>
              <li><a href="#faq" className="footer-link">FAQs</a></li>
              <li><a href="#enquiry" className="footer-link">Product Enquiry</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links-list">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    className="footer-link"
                    onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Contact & Enquiries</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <MessageCircle size={18} className="contact-icon" />
                <div>
                  <strong>WhatsApp Order Line:</strong>
                  <div>
                    <a
                      href={getGeneralEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      {BRAND_CONFIG.displayPhoneNumber}
                    </a>
                  </div>
                </div>
              </li>

              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div>
                  <strong>Phone:</strong>
                  <div>{BRAND_CONFIG.displayPhoneNumber}</div>
                </div>
              </li>

              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div>
                  <strong>Email:</strong>
                  <div>{BRAND_CONFIG.email}</div>
                </div>
              </li>

              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div>
                  <strong>Location:</strong>
                  <div>{BRAND_CONFIG.location}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
                    {BRAND_CONFIG.workingHours}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>
            &copy; {currentYear} {BRAND_CONFIG.brandName}. All rights reserved. Handcrafted with traditional pride.
          </p>
          <div className="footer-legal-links">
            <a href="#enquiry" className="footer-legal-link">Privacy Policy</a>
            <span>•</span>
            <a href="#faq" className="footer-legal-link">Terms of Service</a>
            <span>•</span>
            <a href="#faq" className="footer-legal-link">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
