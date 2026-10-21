import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import ProductGrid from './components/ProductGrid';
import WhyChooseUs from './components/WhyChooseUs';
import Ingredients from './components/Ingredients';
import AboutBrand from './components/AboutBrand';
import Testimonials from './components/Testimonials';
import EnquiryForm from './components/EnquiryForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      mirror: false,
    });

    // Refresh AOS when activeCategory changes so new elements calculate triggers properly
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content">
        {/* Section 2: Hero Section */}
        <Hero />

        {/* Section 3: Product Categories */}
        <ProductCategories onSelectCategory={handleSelectCategory} />

        {/* Section 4: Featured Products Grid */}
        <ProductGrid
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 6: Ingredients and Preparation */}
        <Ingredients />

        {/* Section 7: About the Brand */}
        <AboutBrand />

        {/* Section 8: Customer Testimonials */}
        <Testimonials />

        {/* Section 9: Lead Generation Enquiry Form */}
        <EnquiryForm />

        {/* Section 10: Frequently Asked Questions */}
        <FAQ />

        {/* Section 11: Final WhatsApp CTA Banner */}
        <FinalCTA />
      </main>

      {/* Section 12: Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
