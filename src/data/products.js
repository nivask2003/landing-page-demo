/**
 * Centralized Product Data
 * Categories and products with realistic, honest placeholders.
 * All details can be tailored to the client's verified product catalog.
 */

export const CATEGORIES = [
  {
    id: "all",
    name: "All Products",
    count: 8,
  },
  {
    id: "health-mix",
    name: "Health Mix Powders",
    description: "Wholesome multigrain & millet blends crafted for daily nourishment and energy.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    badge: "Daily Nutrition"
  },
  {
    id: "masala-powders",
    name: "Homemade Masala Powders",
    description: "Aromatic home-style ground spices that bring authentic South Indian flavours to your dishes.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    badge: "Traditional Aroma"
  },
  {
    id: "spice-blends",
    name: "Traditional Spice Blends",
    description: "Carefully roasted and balanced spice blends for authentic curries and rasam.",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
    badge: "Kitchen Essentials"
  },
  {
    id: "other-products",
    name: "Other Traditional Foods",
    description: "Heritage accompaniments like idli podi and herbal beverage blends.",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Flavours"
  }
];

export const PRODUCTS = [
  {
    id: "traditional-health-mix",
    name: "Traditional Health Mix Powder (Sathu Maavu)",
    category: "health-mix",
    categoryLabel: "Health Mix Powders",
    shortDescription: "A balanced multigrain blend of roasted grains, pulses, and dry fruits prepared following traditional home methods.",
    price: "₹220 – ₹420",
    priceNote: "Price varies by pack size. Enquire for bulk.",
    weights: ["250g", "500g", "1kg"],
    defaultWeight: "500g",
    ingredients: "Ragi, Bajra, Jowar, Brown Rice, Roasted Gram, Green Gram, Almonds, Cashews, Cardamom",
    highlights: ["18+ Whole Grains & Nuts", "Slow Roasted", "No Artificial Colours"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    isPopular: true
  },
  {
    id: "millet-health-mix",
    name: "Millet Health Mix Powder",
    category: "health-mix",
    categoryLabel: "Health Mix Powders",
    shortDescription: "A wholesome blend featuring five heritage millets and roasted pulses, ideal for a nutritious morning porridge.",
    price: "₹240 – ₹460",
    priceNote: "Enquire on WhatsApp for current batch price",
    weights: ["250g", "500g", "1kg"],
    defaultWeight: "500g",
    ingredients: "Foxtail Millet, Little Millet, Kodo Millet, Barnyard Millet, Finger Millet, Roasted Pulses",
    highlights: ["5 Native Millets", "Fibre Rich", "Traditional Porridge Mix"],
    image: "https://images.unsplash.com/photo-1574316071802-0d684efa7cd5?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage Millet",
    isPopular: true
  },
  {
    id: "homemade-sambar-masala",
    name: "Homemade Sambar Masala Powder",
    category: "masala-powders",
    categoryLabel: "Homemade Masala Powders",
    shortDescription: "Hand-roasted coriander, red chillies, fenugreek, and lentils ground to perfection for rich, aromatic sambar.",
    price: "₹120 – ₹230",
    priceNote: "Fresh small-batch ground",
    weights: ["100g", "250g", "500g"],
    defaultWeight: "250g",
    ingredients: "Coriander Seeds, Byadgi & Guntur Chillies, Chana Dal, Toor Dal, Cumin, Fenugreek, Black Pepper",
    highlights: ["Authentic Aroma", "Small-Batch Roasted", "Zero Preservatives Added"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    badge: "Signature Blend",
    isPopular: true
  },
  {
    id: "rasam-powder",
    name: "Traditional Rasam Powder",
    category: "spice-blends",
    categoryLabel: "Traditional Spice Blends",
    shortDescription: "A lively pepper-cumin blend that yields a fragrant, soul-warming South Indian rasam in minutes.",
    price: "₹110 – ₹210",
    priceNote: "Available in airtight pouches",
    weights: ["100g", "250g", "500g"],
    defaultWeight: "250g",
    ingredients: "Black Peppercorns, Cumin Seeds, Coriander Seeds, Red Chillies, Toor Dal, Turmeric, Asafetida",
    highlights: ["Fresh Pepper & Cumin", "Aromatic & Warming", "Easy Weekday Prep"],
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=80",
    badge: "Customer Favourite",
    isPopular: true
  },
  {
    id: "chicken-masala-powder",
    name: "Country Style Chicken Masala Powder",
    category: "masala-powders",
    categoryLabel: "Homemade Masala Powders",
    shortDescription: "A robust non-vegetarian masala blend prepared with whole roasted spices for rich gravies and dry roasts.",
    price: "₹130 – ₹250",
    priceNote: "Fresh small batch preparation",
    weights: ["100g", "250g", "500g"],
    defaultWeight: "250g",
    ingredients: "Red Chillies, Coriander, Fennel, Cinnamon, Cloves, Star Anise, Stone Flower, Cumin, Pepper",
    highlights: ["Homestyle Roast", "Rich Spicy Aroma", "Versatile Curry Base"],
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=800&q=80",
    badge: "Homestyle",
    isPopular: false
  },
  {
    id: "traditional-idli-podi",
    name: "Traditional Idli Milagai Podi (Gunpowder)",
    category: "other-products",
    categoryLabel: "Other Traditional Foods",
    shortDescription: "Coarsely ground lentils and dry chillies seasoned with sesame and asafetida. Perfect with sesame oil or ghee.",
    price: "₹110 – ₹220",
    priceNote: "Available in roasted sesame variation",
    weights: ["100g", "250g", "500g"],
    defaultWeight: "250g",
    ingredients: "Urad Dal, Chana Dal, Kashmiri Chillies, White Sesame Seeds, Asafetida, Salt",
    highlights: ["Crunchy Texture", "Ghee/Oil Companion", "Traditional Recipe"],
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80",
    badge: "Kitchen Classic",
    isPopular: true
  },
  {
    id: "garam-masala-blend",
    name: "Royal Whole Spices Garam Masala",
    category: "spice-blends",
    categoryLabel: "Traditional Spice Blends",
    shortDescription: "A finely measured blend of whole cardamom, cloves, cinnamon, mace, and star anise for delicate finishing.",
    price: "₹160 – ₹310",
    priceNote: "Intense aroma; small quantity suffices",
    weights: ["50g", "100g", "250g"],
    defaultWeight: "100g",
    ingredients: "Green Cardamom, Black Cardamom, Cloves, Cinnamon Bark, Mace, Bay Leaf, Nutmeg, Cumin",
    highlights: ["Pure Whole Spices", "Finely Ground", "Finishing Spice"],
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
    badge: "Finishing Blend",
    isPopular: false
  },
  {
    id: "sukku-malli-powder",
    name: "Traditional Sukku Malli Coffee Powder",
    category: "other-products",
    categoryLabel: "Other Traditional Foods",
    shortDescription: "Traditional herbal dry ginger and coriander seed powder for a comforting, warming hot herbal beverage.",
    price: "₹140 – ₹270",
    priceNote: "Pair with palm jaggery or honey",
    weights: ["100g", "250g", "500g"],
    defaultWeight: "250g",
    ingredients: "Dry Ginger (Sukku), Coriander Seeds (Malli), Black Pepper, Cardamom, Tulsi",
    highlights: ["Traditional Comfort Drink", "Natural Warmth", "Caffeine-Free"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    badge: "Herbal Drink",
    isPopular: false
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "ingredients",
    title: "Carefully Selected Ingredients",
    description: "Every grain, seed, and whole spice is hand-inspected and sourced for purity, freshness, and natural flavour.",
    icon: "Wheat"
  },
  {
    id: "flavour",
    title: "Traditional Flavour Profiles",
    description: "Recipes rooted in traditional Tamil home-cooking methods, slow-roasted to bring out rich, authentic aromas.",
    icon: "Sparkles"
  },
  {
    id: "packaging",
    title: "Convenient, Fresh Packaging",
    description: "Packed in multi-layer moisture-lock pouches to preserve aroma, texture, and taste until the last scoop.",
    icon: "PackageCheck"
  },
  {
    id: "support",
    title: "Friendly Personal Support",
    description: "Speak directly with us on WhatsApp for custom quantity advice, storage tips, recipe ideas, or batch queries.",
    icon: "MessageCircleHeart"
  }
];

export const INGREDIENTS_HIGHLIGHT = [
  {
    name: "Heritage Millets & Ragi",
    role: "Core Grains",
    description: "Slow-roasted finger millet, foxtail millet, and kodo millet providing dietary fibre and wholesome energy.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Whole Dry Spices",
    role: "Aromatic Heart",
    description: "Whole coriander seeds, cumin, black peppercorns, and sun-dried chillies gently roasted in small batches.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Gourmet Nuts & Dry Fruits",
    role: "Nutritional Balance",
    description: "California almonds, cashews, and fragrant green cardamom added to our health mixes for texture and taste.",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Traditional Pulses & Dals",
    role: "Protein Foundation",
    description: "Split roasted gram, green gram, and toor dal sorted and dry-roasted to deliver earthy, comforting South Indian flavours.",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The health mix has become our family's go-to breakfast porridge. The aroma of roasted nuts and cardamom is genuinely like how my grandmother used to prepare it at home.",
    authorName: "Revathi S.",
    authorLocation: "Chennai",
    verifiedBuyer: true,
    productUsed: "Traditional Health Mix Powder",
    rating: 5
  },
  {
    id: 2,
    quote: "Finding authentic sambar powder without excess artificial heat is rare. This blend gave our Sunday lunch sambar the exact traditional aroma we missed.",
    authorName: "Karthik N.",
    authorLocation: "Bengaluru",
    verifiedBuyer: true,
    productUsed: "Homemade Sambar Masala",
    rating: 5
  },
  {
    id: 3,
    quote: "Super convenient ordering through WhatsApp. They guided me on pack sizes, confirmed freshness dates, and dispatched promptly. The Idli Podi with sesame oil is unmatched!",
    authorName: "Deepa M.",
    authorLocation: "Coimbatore",
    verifiedBuyer: true,
    productUsed: "Traditional Idli Milagai Podi",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "What products do you offer?",
    answer: "We specialize in traditional multigrain health mix powders (Sathu Maavu), native millet health blends, homemade South Indian masala powders (Sambar, Rasam, Non-Veg curry blends), traditional accompaniments like Idli Milagai Podi, and herbal beverage powders."
  },
  {
    question: "What pack sizes are available?",
    answer: "Most of our health mix powders are available in 250g, 500g, and 1kg sealed pouches. Our spice blends and masala powders are typically packed in 100g, 250g, and 500g sizes. Custom or larger bulk orders can be arranged upon enquiry."
  },
  {
    question: "How can I check the latest price and place an order?",
    answer: "Because we prepare small batches to maintain optimal freshness, current batch prices and courier rates are provided directly via WhatsApp. Simply click any 'Enquire on WhatsApp' button on the product card or use our enquiry form."
  },
  {
    question: "Do you accept bulk orders or customized gift packages?",
    answer: "Yes, we accept bulk orders for family functions, festivals, and corporate gifting. Please message us on WhatsApp with your required quantities and deadline at least 7–10 days in advance so we can prepare fresh batches for you."
  },
  {
    question: "How can I place an order via WhatsApp?",
    answer: "Click the 'Chat with Us on WhatsApp' or 'Enquire on WhatsApp' button on any product. A pre-filled message will open in WhatsApp. Send the message, and our team will reply with available quantities, delivery charges, and UPI/bank payment details to confirm your dispatch."
  },
  {
    question: "Which locations do you deliver to?",
    answer: "We ship across Tamil Nadu and to major cities across India via reliable domestic courier partners. Delivery times and shipping fees depend on your postal PIN code, which we confirm during our WhatsApp conversation."
  },
  {
    question: "How can I learn about ingredients, preparation, and allergens?",
    answer: "Each product on this page lists its core ingredients. As our health mix blends contain tree nuts (almonds, cashews) and wholesome grains, please inform us on WhatsApp if you have specific food sensitivities so we can advise you accurately."
  }
];
