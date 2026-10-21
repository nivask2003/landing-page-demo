import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, getGeneralEnquiryUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Products", href: "#products" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "About Us", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo & Name */}
          <a href="#home" className="brand-logo-link" aria-label={`${BRAND_CONFIG.brandName} - Return to homepage`}>
            <div className="brand-logo-icon">
              <Sparkles size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-title">{BRAND_CONFIG.brandName}</span>
              <span className="brand-subtitle">Authentic & Homemade</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop WhatsApp Action */}
          <div className="nav-actions">
            <a
              href={getGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              aria-label="Enquire on WhatsApp (opens in new tab)"
            >
              <MessageCircle size={17} />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Nav Drawer */}
      <aside
        id="mobile-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-header">
          <div className="brand-text">
            <span className="brand-title">{BRAND_CONFIG.brandName}</span>
            <span className="brand-subtitle">Authentic & Homemade</span>
          </div>
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-cta">
          <a
            href={getGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            style={{ width: '100%' }}
            onClick={closeMobileMenu}
          >
            <MessageCircle size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
