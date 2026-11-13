export const site = {
  name: 'Crystal Fit Contracting LLC',
  url: 'https://crystalfituae.com',
  phoneMobileDisplay: '+971 (056) 338 62 19',
  phoneMobile: '+971563386219',
  phoneOffice: '+97143202224',
  email: 'info@crystalfituae.com',
  address: 'Al Quoz Industrial 3, Ghoshi Warehouse City WH-132, Dubai',
  // structured data (schema.org) — same address/phone as the Google Business profile
  streetAddress: 'Ghoshi Warehouse City WH-132, Al Quoz Industrial 3',
  geo: { lat: 25.1218654, lng: 55.2185395 },
  foundingYear: '2014',
  mapUrl: 'https://maps.app.goo.gl/6d8yRjZRXKNBa2M89',
  // route from the visitor's location to the Crystal Fit pin (WH-132, 19D Street, Ghoshi Warehouse City, Al Quoz Industrial 3)
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=25.1218654%2C55.2185395&travelmode=driving',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.1200016477023!2d55.21853949999999!3d25.121865399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9047546b750094f%3A0x3658436cc35dfeeb!2sCrystal%20Fit%20Contracting%20LLC!5e1!3m2!1sen!2sae!4v1756805848307!5m2!1sen!2sae',
  // fixed: original used wa.me/+9710563386219 (extra 0 breaks the link)
  whatsapp: 'https://wa.me/971563386219',
  socials: [
    { name: 'instagram', href: 'https://www.instagram.com/crystalfit_uae/' },
    // original pointed to the LinkedIn admin page; public company page:
    { name: 'linkedin-in', href: 'https://www.linkedin.com/company/66214155/' },
    { name: 'pinterest', href: 'https://www.pinterest.com/crystalfituae/' },
    { name: 'whatsapp', href: 'https://wa.me/971563386219' },
  ],
  // profiles shown only to search engines (schema.org sameAs), no footer icon - Facebook page is not actively run
  sameAsExtra: ['https://www.facebook.com/crystalfituae/'],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about-us/' },
    { label: 'Services', href: '/services/', children: [
      { label: 'F&B Design & Build', href: '/services/#fnb' },
      { label: 'Commercial Fit-outs', href: '/services/#commercial' },
      { label: 'Residential Interiors', href: '/services/#residential' },
      { label: 'Design & Tech. Consultancy', href: '/services/#consultancy' },
      { label: 'Project Management', href: '/services/#project-management' },
    ] },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Contact us', href: '/contact/' },
  ],
  // Web3Forms access keys (free, https://web3forms.com). One key = one inbox.
  // Main inbox, receives every enquiry: info@crystalfituae.com
  formKey: import.meta.env.PUBLIC_WEB3FORMS_KEY || 'bc4e80cb-ae26-45a9-b622-999b514d67ef',
  // Copy inbox, receives "Project Inquiry" only: kg@crystalfituae.com
  formKeyCopy: import.meta.env.PUBLIC_WEB3FORMS_KEY_COPY || '5e004c92-e461-4fe3-9f0e-e30756b08f2c',
  // Tracking (empty = not loaded, no cookie banner). Set in hosting env vars or here.
  // Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX
  gaId: import.meta.env.PUBLIC_GA_ID || '',
  // Google Ads conversion: tag ID (AW-XXXXXXXXX) and the "lead" conversion label
  adsId: import.meta.env.PUBLIC_GADS_ID || '',
  adsLeadLabel: import.meta.env.PUBLIC_GADS_LEAD_LABEL || '',
  // Meta (Facebook/Instagram) Pixel ID, digits only
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || '',
};

export const categories = {
  commercial: 'Commercial',
  fb: 'Food & Beverage (F&B)',
  residential: 'Residential',
} as const;

// "Other cases" carousel shown on every project page (same list as the original site)
export const otherCases = [
  'mercure-gold-hotel-interior-design', 'livrichy-real-estates-office', 'amv-aesthetic-clinic', 'roasters-coffee-nad-al-sheba-mall',
  'the-game-premium-lounge', 'beacon-coffee-portable-kiosk', 'villa-windsor_dxb', 'restaurant-contractor-dubai-yoy-neo-bistro',
  'nad-al-sheba-villa-moderna-dubai',
];

// "Trusted by the best" carousels = CLIENTS only (Commercial + F&B), file names in src/assets/logos.
// Developers, landlords and authorities (Emaar, Dubai Holding, TECOM, Nakheel, Trakhees, Gov. of Dubai, Dubai Police,
// IDAMA, Three Diamonds, Vindico) are not clients - they stay only in the home "We deliver to the standards of" strip.
export const logosHome = [
  // most recognised first, then by project year (newest first)
  'roasters-png.png', 'christie-s-logo-7b51158dc3-seeklogo-com-.png',
  'panmi.png', 'amv.png', // 2026
  'wala.png', 'tatintsian.png', 'gasteria.png', 'selfspace.png', // 2025
  'yoy-2.png', 'logo-black.png', // 2024 (YOY Neo Bistro, In the Pink)
  'livrichy.png', 'muha.png', 'the-game-logo-1.png', 'desires-logo.png', // 2023
  'fissman-logo-1.png', // 2022
  'brew-png.png', // 2021
  'paper-logo-1.png', // 2019
  'narrow-300.png', // 2018
  'mercure-150.png', // 2016
  'osha150.png', 'img-2642.png', // early projects (Osha 013, Friends Avenue 018)
];
export const logosInner = logosHome;

// Project page: "Scope" labels (order = display order)
export const scopeLabels: Record<string, string> = {
  design: 'Design',
  approvals: 'Approvals',
  fitout: 'Fit-out',
  mep: 'MEP',
  joinery: 'Joinery',
  supervision: 'Technical supervision',
};
// Project page: approval authorities / landlords (suggested names; any other text also works)
export const approvalOptions = ['Emaar', 'TECOM', 'Dubai Holding', 'Nakheel', 'Meraas', 'DMCC', 'DIFC', 'DDA (d3)', 'Individual', 'DM', 'DCD', 'DEWA', 'Trakhees', 'DHA', 'Sharjah Municipality', 'SEWA'];
