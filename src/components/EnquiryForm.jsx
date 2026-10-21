import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Lock } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { getFormSubmissionUrl, BRAND_CONFIG } from '../utils/whatsapp';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    packSize: '',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) {
        error = 'Please provide your full name.';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters long.';
      }
    } else if (name === 'phone') {
      const cleanPhone = value.replace(/[\s-]/g, '');
      if (!cleanPhone) {
        error = 'Please enter your WhatsApp mobile number.';
      } else if (!/^[0-9+]{10,14}$/.test(cleanPhone)) {
        error = 'Please enter a valid 10-digit mobile number.';
      }
    } else if (name === 'product') {
      if (!value) {
        error = 'Please select a product of interest.';
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all required fields as touched
    const newTouched = { name: true, phone: true, product: true };
    setTouched(prev => ({ ...prev, ...newTouched }));

    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phone', formData.phone);
    const productError = validateField('product', formData.product);

    const newErrors = {
      name: nameError,
      phone: phoneError,
      product: productError
    };

    setErrors(newErrors);

    if (nameError || phoneError || productError) {
      // Focus first error field for accessibility
      const firstErrorField = nameError ? 'name' : phoneError ? 'phone' : 'product';
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    // Generate WhatsApp direct lead message URL
    const url = getFormSubmissionUrl(formData);
    setSubmittedWhatsAppUrl(url);
    setIsSubmitted(true);

    // Open WhatsApp in new tab so visitor can send their pre-filled enquiry directly
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      product: '',
      packSize: '',
      message: ''
    });
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="enquiry" className="section lead-section">
      <div className="container">
        <div className="lead-wrapper" data-aos="fade-up">
          {/* Header Banner */}
          <div className="lead-header-banner">
            <h2 className="lead-banner-title">Looking for the Right Product?</h2>
            <p className="lead-banner-subtitle">
              Tell us what you're looking for. Our team will help you with product details,
              available sizes, pricing, and ordering information directly on WhatsApp.
            </p>
          </div>

          <div className="lead-form-body">
            {isSubmitted ? (
              <div className="form-success-banner" role="status" aria-live="polite">
                <CheckCircle2 size={44} color="#244B32" style={{ margin: '0 auto 12px' }} />
                <h4>Thank You, {formData.name}!</h4>
                <p>
                  Your product enquiry for <strong>{formData.product}</strong> has been prepared.
                  A WhatsApp chat window should have opened automatically. If it didn't, click the button below to connect with us now:
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={submittedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={18} />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        className="form-input"
                        placeholder="e.g. Ananya Raman"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={touched.name && Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p id="name-error" className="error-hint" role="alert">
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* WhatsApp Mobile Number */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      WhatsApp Mobile Number <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        className="form-input"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={touched.phone && Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                    </div>
                    {touched.phone && errors.phone && (
                      <p id="phone-error" className="error-hint" role="alert">
                        <AlertCircle size={14} />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Product Interest Dropdown */}
                  <div className="form-group">
                    <label htmlFor="product" className="form-label">
                      Product of Interest <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <select
                        id="product"
                        name="product"
                        required
                        className="form-select"
                        value={formData.product}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={touched.product && Boolean(errors.product)}
                        aria-describedby={errors.product ? 'product-error' : undefined}
                      >
                        <option value="">-- Select a product --</option>
                        {PRODUCTS.map(p => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Custom Combo / Bulk Order">Custom Combo / Bulk Order</option>
                        <option value="General Product Consultation">General Consultation / Other</option>
                      </select>
                    </div>
                    {touched.product && errors.product && (
                      <p id="product-error" className="error-hint" role="alert">
                        <AlertCircle size={14} />
                        <span>{errors.product}</span>
                      </p>
                    )}
                  </div>

                  {/* Quantity / Pack Size Preference (Optional) */}
                  <div className="form-group">
                    <label htmlFor="packSize" className="form-label">
                      Preferred Pack Size (Optional)
                    </label>
                    <div className="input-wrapper">
                      <select
                        id="packSize"
                        name="packSize"
                        className="form-select"
                        value={formData.packSize}
                        onChange={handleChange}
                      >
                        <option value="">-- Select preferred weight --</option>
                        <option value="100g (Trial pack)">100g (Trial pack)</option>
                        <option value="250g Standard pack">250g Standard pack</option>
                        <option value="500g Value pack">500g Value pack</option>
                        <option value="1kg Family pack">1kg Family pack</option>
                        <option value="Multiple Packs / Bulk (5kg+)">Multiple Packs / Bulk (5kg+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Query (Optional) */}
                  <div className="form-group form-group-full">
                    <label htmlFor="message" className="form-label">
                      Your Message or Special Request (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Ask about delivery to your PIN code, preparation date, ingredients, or customized quantities..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Privacy Assurance */}
                <div className="form-privacy-note">
                  <Lock size={15} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>
                    Your phone number is used solely to respond to this product enquiry on WhatsApp.
                    We respect your privacy and never send unsolicited spam.
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                >
                  <Send size={18} />
                  <span>Send My Enquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
