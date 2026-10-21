# Traditional Health Mix & Homemade Masala Landing Page

A premium, modern, responsive, and conversion-focused landing page for small food businesses selling traditional health mix powders (Sathu Maavu), homemade masala powders, and spice blends. Built with **React 18**, **Vite**, **AOS (Animate On Scroll)**, and **Lucide Icons**.

---

## 🌟 Key Features

1. **Sticky Navigation Bar**
   - Brand logo with emblem.
   - Desktop navigation links with animated underline indicators.
   - Direct WhatsApp quick-enquiry CTA button.
   - Mobile hamburger menu drawer with smooth backdrop blur.

2. **Hero Section**
   - Headline: *"Traditional Goodness. Natural Taste. Everyday Nutrition."*
   - Clear value proposition and supporting copy.
   - High-contrast primary CTA (*"Explore Our Products"*) and secondary CTA (*"Chat with Us on WhatsApp"*).
   - High-quality visual composition with floating feature badges.
   - Verified business attributes & trust indicators.

3. **Product Categories**
   - 4 core categories: *Health Mix Powders*, *Homemade Masala Powders*, *Traditional Spice Blends*, and *Other Traditional Foods*.
   - One-click filtering into the product grid.

4. **Interactive Product Grid & Cards**
   - Filter pills for instant category switching.
   - Interactive pack-size selectors (e.g., 100g, 250g, 500g, 1kg).
   - Dynamic WhatsApp Click-to-Chat link per product that pre-fills the message with the product name and selected pack size.
   - Image zoom on hover and elevation transitions.

5. **Why Choose Us?**
   - 4 benefit cards: *Carefully Selected Ingredients*, *Traditional Flavour Profiles*, *Convenient Packaging*, and *Friendly Customer Support*.
   - Staggered AOS scroll entrance animations.

6. **Ingredients & Preparation Showcase**
   - Editorial-style visual breakdown of millets, whole spices, dry fruits, and pulses.
   - Dedicated direct enquiry button for allergen and recipe clarifications.

7. **Brand Story & Heritage**
   - Warm brand narrative rooted in authentic South Indian culinary culture.
   - Transparent preparation ethos and quality commitments.

8. **Customer Testimonials**
   - Testimonial cards featuring authentic reviews, star ratings, and verified buyer badges.

9. **Lead Generation Enquiry Form**
   - Input validation (Name, WhatsApp phone number, Product interest).
   - Adheres to modern web standards (`:user-valid`, `:user-invalid`, `aria-invalid`, `aria-describedby`).
   - Genuinely delivers leads by automatically formatting a structured message and launching WhatsApp click-to-chat.

10. **Accessible FAQ Accordion**
    - Native HTML `<details name="faq-accordion">` implementation providing native "Find in page" searchability, SEO indexing, and keyboard accessibility.

11. **Final Call-to-Action Banner**
    - Warm appetizing food aesthetic encouraging visitors to connect on WhatsApp.

12. **Complete Footer & Floating WhatsApp Button**
    - Floating pulsating WhatsApp button fixed at the bottom-right for instant access on all screen sizes.
    - Full footer with contact details, social links, category links, and legal placeholders.

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Custom Modern CSS with CSS Custom Properties (Design Tokens)
- **Animations:** AOS (Animate on Scroll)
- **Icons:** Lucide React + Inline SVGs
- **Typography:** Playfair Display (Serif Headings) & Poppins (Sans-serif Body)

---

## 📁 Project Structure

```text
├── index.html                  # SEO metadata, Open Graph tags, Google Fonts, SVG Favicon
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel deployment configuration
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with mobile drawer & WhatsApp CTA
│   │   ├── Hero.jsx            # Hero section with trust badges
│   │   ├── ProductCategories.jsx # Category cards with filter trigger
│   │   ├── ProductGrid.jsx     # Category filters & product cards list
│   │   ├── ProductCard.jsx     # Individual product card with pack-size picker & WhatsApp CTA
│   │   ├── WhyChooseUs.jsx     # 4 core benefits with icons
│   │   ├── Ingredients.jsx     # Ingredients breakdown & allergen consultation callout
│   │   ├── AboutBrand.jsx      # Brand story & preparation ethos
│   │   ├── Testimonials.jsx    # Customer review cards
│   │   ├── EnquiryForm.jsx     # Validated lead form with direct WhatsApp submission
│   │   ├── FAQ.jsx             # Accessible HTML details/summary accordion
│   │   ├── FinalCTA.jsx        # Closing food-themed WhatsApp banner
│   │   ├── Footer.jsx          # Complete footer with contact details & legal links
│   │   └── WhatsAppButton.jsx  # Floating pulsing WhatsApp button
│   ├── data/
│   │   └── products.js         # Centralized product catalog, categories, FAQs & testimonials
│   ├── utils/
│   │   └── whatsapp.js         # Centralized phone number, URL generator & message templates
│   ├── App.jsx                 # App root with AOS initialization & state
│   ├── main.jsx                # React DOM mount point
│   └── index.css               # Design tokens, responsive grid, animations, and typography
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ✏️ Customization Guide: Where to Update Details

### 1. Business Name, Phone Number & WhatsApp
Open `src/utils/whatsapp.js`:
```javascript
export const BRAND_CONFIG = {
  brandName: "Your Brand Name",
  tagline: "Your Brand Tagline",
  whatsappNumber: "919876543210", // <-- Replace with your actual WhatsApp number with country code (no + or spaces)
  displayPhoneNumber: "+91 98765 43210",
  email: "orders@yourbrand.com",
  location: "Your City, State, India",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
};
```

### 2. Products, Prices, Weights & Descriptions
Open `src/data/products.js`:
- Edit the `PRODUCTS` array to add, modify, or remove items.
- Update weights: `weights: ["250g", "500g", "1kg"]`
- Update prices: `price: "₹220 – ₹420"`
- Update images: Replace the Unsplash URLs with your product photography.

### 3. Brand Story & Mission
Open `src/components/AboutBrand.jsx` to tailor your personal business journey, location, and preparation method.

### 4. FAQs
Open `src/data/products.js` and modify the `FAQS` array to match your shipping locations, payment modes, and delivery schedules.

### 5. SEO Title, Description & Favicon
Open `index.html`:
- Update `<title>`
- Update `<meta name="description" ... />`
- Update `<meta property="og:image" ... />`

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your repository.
4. Vercel will automatically detect **Vite** and configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your landing page will be live in seconds!
