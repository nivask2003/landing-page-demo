import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getGeneralEnquiryUrl } from '../utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={getGeneralEnquiryUrl("Floating WhatsApp Quick Chat")}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with our team directly on WhatsApp (opens in new tab)"
    >
      <MessageCircle className="floating-whatsapp-icon" />
      <span className="floating-whatsapp-text">Chat on WhatsApp</span>
    </a>
  );
}
