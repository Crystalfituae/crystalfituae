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
  // fixed: original used wa.me/+9710563386219 (extra 0 breaks the link)
  whatsapp: 'https://wa.me/971563386219',
  socials: [
    { name: 'instagram', href: 'https://www.instagram.com/crystalfit_uae/' },
    // original pointed to the LinkedIn admin page; public company page:
    { name: 'linkedin-in', href: 'https://www.linkedin.com/company/66214155/' },
    { name: 'pinterest', href: 'https://www.pinterest.com/kgdesignuae' },
    { name: 'whatsapp', href: 'https://wa.me/971563386219' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about-us/' },
    { label: 'Services', href: '/services/', children: [
      { label: 'Food & Beverage (F&B)', href: '/cafe-restaurant-fit-out-dubai/' },
      { label: 'Commercial', href: '/commercial-fit-out-dubai/' },
      { label: 'Residential', href: '/villa-interior-design-dubai/' },
      { label: 'Design & Consultancy', href: '/interior-design-consultancy-dubai/' },
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

// "Trusted by the best" carousels (file names in src/assets/logos)
export const logosHome = ['dub-gov-300.png', 'emaar-logo-1.png', 'aw-dh-pv-pos-rgb-en-002.png', 'tecom-group.png', 'nakheel-properties-logo-2.png', '1621791093880-1.png', 'vindico.png', 'dubai-police-300.png', 'trakhees.png', 'roasters-png.png', 'brew-png.png', 'yoy-2.png', 'christie-s-logo-7b51158dc3-seeklogo-com-.png', 'logo-black.png', 'the-game-logo-1.png', '118507871-400x300-1.png', 'muha-logo-bw-1.png', 'narrow-300.png', 'fissman-logo-1.png', 'paper-logo-1.png', 'desires-logo.png', 'download-1.png', 'mercure-150.png', 'osha150.png', 'img-2642.png'];
export const logosInner = ['dub-gov-300.png', 'nakheel-properties-logo-2.png', 'emaar-logo-1.png', 'aw-dh-pv-pos-rgb-en-002.png', '1621791093880-1.png', 'vindico.png', 'dubai-police-300.png', 'christie-s-logo-7b51158dc3-seeklogo-com-.png', 'roasters-png.png', 'yoy-2.png', 'brew-png.png', 'the-game-logo-1.png', 'mercure-150.png', 'narrow-300.png', 'img-2642.png', 'fissman-logo-1.png', 'paper-logo-1.png', 'desires-logo.png', 'download-1.png', 'osha150.png'];
