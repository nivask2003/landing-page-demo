/**
 * Centralized WhatsApp Configuration and Utility Functions
 * Replace DEFAULT_WHATSAPP_NUMBER with the business's actual WhatsApp number.
 * Format: Country code + number without '+' or special characters. (e.g., '919876543210' for India)
 */
export const BRAND_CONFIG = {
  brandName: "Aaranya Traditional Foods",
  tagline: "Traditional Goodness. Natural Taste. Everyday Nutrition.",
  whatsappNumber: "919876543210", // REPLACE WITH CLIENT'S ACTUAL WHATSAPP NUMBER
  displayPhoneNumber: "+91 98765 43210",
  email: "orders@aaranyafoods.example", // PLACEHOLDER
  location: "Coimbatore, Tamil Nadu, India", // PLACEHOLDER
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
};

/**
 * Builds the official WhatsApp click-to-chat URL
 * @param {string} message - Unencoded plain text message
 * @param {string} [phone] - Optional phone override
 * @returns {string} Fully encoded wa.me URL
 */
export const getWhatsAppUrl = (message, phone = BRAND_CONFIG.whatsappNumber) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

/**
 * Pre-filled message generator for individual product enquiries
 * @param {string} productName 
 * @param {string} [selectedSize]
 * @returns {string} WhatsApp URL
 */
export const getProductEnquiryUrl = (productName, selectedSize = "") => {
  const sizeText = selectedSize ? ` (Selected size: ${selectedSize})` : "";
  const message = `Hello! I'm interested in ${productName}${sizeText}. Please share the available sizes, price, and ordering details.`;
  return getWhatsAppUrl(message);
};

/**
 * Pre-filled message generator for general chat / consultations
 * @returns {string} WhatsApp URL
 */
export const getGeneralEnquiryUrl = (customTopic = "") => {
  const message = customTopic
    ? `Hello! I would like to enquire about: ${customTopic}. Please assist me.`
    : `Hello! I'm visiting your website and would like to know more about your traditional health mix and masala products.`;
  return getWhatsAppUrl(message);
};

/**
 * Pre-filled message generator for the lead enquiry form
 * @param {Object} formData
 * @returns {string} WhatsApp URL
 */
export const getFormSubmissionUrl = ({ name, phone, product, packSize, message }) => {
  const text = [
    `*New Product Enquiry from Website*`,
    `--------------------------------`,
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Product Interested:* ${product}`,
    packSize ? `*Preferred Pack Size:* ${packSize}` : null,
    message ? `*Note / Query:* ${message}` : null,
    `--------------------------------`,
    `Please share pricing, availability, and payment details.`
  ].filter(Boolean).join('\n');

  return getWhatsAppUrl(text);
};
