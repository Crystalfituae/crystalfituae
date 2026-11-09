// Service landing pages (/<slug>/). draft: true = not in sitemap, noindex, "DRAFT" banner, not linked from the menu.
// No prices or timelines on the site (owner's decision).

export interface Service {
  slug: string;
  draft: boolean;
  title: string;        // <title>, max 60 chars
  description: string;  // meta description, max 160 chars
  heroLines: string[];
  h1: string;           // added to the hero heading for search engines
  heroProject: string;  // project whose cover is the hero photo
  heroImage?: string;   // or a file in src/assets/services (overrides heroProject)
  intro: string[];
  deliver: string[];
  approvals: string[];
  facts: [string, string][]; // big numbers row
  faq: [string, string][];
  projects: string[];   // project slugs shown as examples
}

const process: [string, string][] = [
  ['Site visit & brief', 'We visit the unit, check the landlord fit-out guide and agree budget, timeline and concept direction.'],
  ['Design & drawings', 'Concept, 3D visuals, then full technical package: architectural, MEP, fire-fighting and joinery shop drawings.'],
  ['Approvals', 'We submit and follow up landlord NOC and authority approvals until permits are issued.'],
  ['Fit-out works', 'Civil, MEP, HVAC, ceilings, flooring, joinery, finishes and lighting — one team, one programme, weekly reports.'],
  ['Inspections & handover', 'Authority and landlord inspections, snagging, completion certificates and handover with 1-year warranty.'],
];
export const serviceProcess = process;

export const services: Service[] = [
  {
    slug: 'cafe-restaurant-fit-out-dubai',
    draft: true,
    title: 'Cafe & Restaurant Fit-Out in Dubai | Crystal Fit',
    description: 'Turnkey cafe, coffee shop and restaurant fit-out in Dubai: design, Emaar & Dubai Holding approvals, DM and Civil Defence permits, construction and handover.',
    heroLines: ['Food & Beverage', '(F&B) fit-out'],
    h1: '— cafe, coffee shop and restaurant fit-out company in Dubai',
    heroProject: 'roasters-dubai-hills',
    intro: [
      'Food & beverage is our strongest field. Since 2014 we have designed and built specialty coffee shops, kiosks, bistros and restaurants in Dubai’s main malls and communities — including nine Roasters Specialty Coffee branches, WALA Coffee & Roastery, YOY Neo Bistro at Shangri-La and Panmi Coffee in Dubai Hills.',
      'A Food & Beverage (F&B) opening in Dubai is a race against the rent-free period. Landlord design reviews, Dubai Municipality food-safety layout, Civil Defence, kitchen exhaust and gas approvals all have to move in parallel with construction. We run them as one programme, so the doors open on the agreed date.',
    ],
    deliver: [
      'Concept, 3D visuals and full Food & Beverage (F&B) layout (bar, kitchen, storage, seating)',
      'Kitchen and bar equipment coordination with your suppliers',
      'Landlord NOC and authority approvals: Dubai Municipality (food & public health), Civil Defence, DEWA, Trakhees where needed',
      'MEP, HVAC, kitchen exhaust, fire-fighting and drainage works',
      'Bespoke joinery, counters, signage and decorative lighting',
      'Inspections, completion certificates and handover, 1-year warranty',
    ],
    approvals: ['Emaar Malls & Communities', 'Dubai Holding', 'Nakheel', 'TECOM / d3', 'Sobha', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA', 'Trakhees'],
    facts: [['20+', 'Food & Beverage (F&B) projects delivered'], ['9', 'Roasters coffee shops'], ['1', 'team from design to handover'], ['10+', 'years in UAE fit-out']],
    faq: [
      ['Do you handle Dubai Municipality and Civil Defence approvals?', 'Yes. We prepare the drawings and submit landlord NOC, Dubai Municipality food & public-health layout, Civil Defence and DEWA approvals, and attend all inspections until the completion certificate.'],
      ['Which landlords have you worked with?', 'Emaar (Dubai Mall, Dubai Hills, Downtown, Creek Harbour), Dubai Holding (Bay Square, Nad Al Sheba Mall), Nakheel (Palm Jumeirah), TECOM (d3), Sobha Hartland and others.'],
      ['Can you work with our own brand designer?', 'Yes. We can build from your designer’s concept and produce the technical and shop drawings needed for approvals, or deliver the full design ourselves.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a site visit and a short brief we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['wala-coffee-roastery', 'roasters-dubai-hills', 'panmi-coffee-shop-dubai-hills', 'restaurant-contractor-dubai-yoy-neo-bistro', 'roasters-palm-jumeirah-mall', 'kingdom_palace_doha', 'roasters-coffee-kiosk-dubai-mall', 'yoy-ukrainian-firecooking-restaurant-the-pointe-palm-jumeirah'],
  },
  {
    slug: 'commercial-fit-out-dubai',
    draft: true,
    title: 'Commercial Fit-Out in Dubai: Offices, Retail, Clinics',
    description: 'Office, retail, clinic and showroom fit-out in Dubai: design & build with landlord and authority approvals in DIFC, Dubai Mall, Bay Square, d3 and Dubai Hills.',
    heroLines: ['Commercial', 'fit-out'],
    h1: '— office, retail and clinic fit-out company in Dubai',
    heroProject: 'gary-tatintsian-gallery',
    intro: [
      'Offices, shops, clinics, galleries and studios — we design and build commercial spaces that represent your brand and work from day one. Our projects include Christie’s auction house and gallery office in DIFC, AMV Aesthetic Clinic in Bay Square, Gari Tatintsian Gallery in d3, LIVRICHY Real Estate in Dubai Hills, Fissman in Circle Mall and Mercure Gold Hotel.',
      'Every landlord and authority in Dubai has its own fit-out rules. We prepare the technical package, obtain the NOC and permits, and plan works around mall hours or occupied floors, so you hand over on the agreed date.',
    ],
    deliver: [
      'Space planning, interior design and 3D visuals',
      'Offices: partitions, glazing, acoustics, data and AV coordination',
      'Retail & malls: shopfronts, signage, display joinery, night-shift works',
      'Clinics: layouts to Dubai Health Authority (DHA) requirements and DHA inspection support',
      'Landlord NOC, Dubai Municipality, Civil Defence and DEWA approvals',
      'MEP, HVAC, fire-fighting, ceilings, flooring, finishes and lighting',
      'Handover with 1-year warranty',
    ],
    approvals: ['Emaar', 'Dubai Holding', 'TECOM / d3', 'DIFC', 'Nakheel Malls', 'Dubai Health Authority (DHA)', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA'],
    facts: [['200+', 'projects delivered'], ['DHA', 'clinic approvals handled'], ['2014', 'in business since'], ['1 year', 'warranty on works']],
    faq: [
      ['Do you get the landlord NOC and permits?', 'Yes. We prepare the drawings required by the landlord and authorities, submit them and follow up until permits and completion certificates are issued.'],
      ['Do you handle DHA approvals for clinics?', 'Yes. We design to DHA facility requirements and support the inspections until the facility licence is issued.'],
      ['Can you work while our office or mall is open?', 'Yes. We phase works and carry out noisy works at night or after hours as the building requires.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a site visit and a short brief we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['amv-aesthetic-clinic', 'christiess-ofiice-interior-design-dubai', 'livrichy-real-estates-office', 'gary-tatintsian-gallery', 'fissman-circle-mall-jvc-dubai', 'mercure-gold-hotel-interior-design', 'the-game-premium-lounge', 'self-space-studio-dubai'],
  },
  {
    slug: 'villa-interior-design-dubai',
    draft: true,
    title: 'Villa Interior Design & Fit-Out in Dubai | Crystal Fit',
    description: 'Luxury villa, penthouse and apartment interior design and fit-out in Dubai: Dubai Hills, Palm Jumeirah, Al Mizhar, Bluewaters. Design, approvals and turnkey build.',
    heroLines: ['Residential', 'interiors'],
    h1: '— villa and apartment interior design and fit-out in Dubai',
    heroProject: 'anantara-penthouse',
    intro: [
      'We design and build homes in Dubai Hills, Palm Jumeirah, Bluewaters, Al Mizhar, Nad Al Sheba, Jumeirah and Sharjah — from a 85 sqm apartment in Business Bay to a 2,170 sqm villa in Nad Al Sheba.',
      'Our team handles the community NOC, Dubai Municipality or Trakhees permits, procurement and construction, so you deal with one contact from the first sketch to moving in.',
    ],
    deliver: [
      'Interior design, 3D visuals and material boards',
      'Community / master-developer NOC and authority permits',
      'Renovation, extensions, MEP and smart-home works',
      'Bespoke joinery, kitchens, wardrobes and bathrooms',
      'Furniture, lighting and decor procurement',
      'Handover with 1-year warranty',
    ],
    approvals: ['Emaar Communities', 'Nakheel', 'Dubai Holding', 'Dubai Municipality', 'Trakhees', 'DEWA'],
    facts: [['20+', 'villas and apartments'], ['85–2,170', 'sqm project size'], ['2014', 'in business since'], ['1 year', 'warranty on works']],
    faq: [
      ['Do you handle the community NOC for villa renovation?', 'Yes. We prepare drawings for the master developer (Emaar, Nakheel, Dubai Holding) and the authority permits before works start.'],
      ['Can you only do the design?', 'Yes. We offer design-only packages, and turnkey design & build if you want one team for everything.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a site visit and a short brief we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['anantara-penthouse', 'luxury-fitout-dubai', 'gbl-villa-ar-dubai-hills', 'nad-al-sheba-villa-moderna-dubai', 'oth-villa-jumeirah-pearl', 'amr-villa-al-mizhar'],
  },
  {
    slug: 'interior-design-consultancy-dubai',
    draft: true,
    title: 'Interior Design & Fit-Out Consultancy Dubai | Crystal Fit',
    description: 'Interior design, space planning, technical drawings, landlord and authority approvals and project management consultancy for fit-outs in Dubai and the UAE.',
    heroLines: ['Design &', 'consultancy'],
    h1: '— interior design, approvals and fit-out consultancy in Dubai',
    heroProject: 'gary-tatintsian-gallery',
    heroImage: 'design-render-omakase.jpg', // Omakase restaurant concept render
    intro: [
      'Not every project needs a contractor from day one. We provide design and consultancy on its own: concept and interior design, space planning, technical and shop drawings for approvals, and project management on behalf of the owner.',
      'Ten years of Dubai fit-outs mean we know what landlords and authorities will ask for. Food & Beverage (F&B) operators, brands and investors use our team to check a unit before signing a lease, to prepare a design that passes approvals the first time, or to manage their contractor.',
    ],
    deliver: [
      'Concept and interior design, 3D visuals, material and furniture selection',
      'Space planning and test fits before you sign a lease',
      'Food & Beverage (F&B) technical consultancy: kitchen, bar and back-of-house layouts',
      'Technical, MEP and shop drawings for landlord and authority submissions',
      'Approvals management: landlord NOC, Dubai Municipality, Civil Defence, DEWA, DHA',
      'Construction project management, BOQ review and site supervision',
    ],
    approvals: ['Emaar', 'Dubai Holding', 'TECOM', 'Nakheel', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA', 'Trakhees', 'DHA'],
    facts: [['200+', 'projects designed & delivered'], ['2014', 'in business since'], ['Design', 'only or turnkey'], ['UAE', 'and GCC projects']],
    faq: [
      ['Can you do the design only, without the fit-out?', 'Yes. We deliver design and drawing packages that any contractor can build from, and can support you during tendering and construction.'],
      ['Can you check a unit before we sign the lease?', 'Yes. We review the landlord fit-out guide, services and layout and tell you what is feasible, the main risks and an indicative budget and timeline.'],
      ['Do you prepare drawings for authority approvals?', 'Yes — architectural, MEP, fire-fighting and shop drawings for landlord NOC, Dubai Municipality, Civil Defence, DEWA and DHA submissions.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a site visit and a short brief we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['gary-tatintsian-gallery', 'christiess-ofiice-interior-design-dubai', 'west-gate-cinema-interior-design', 'coxs-bazar-family-hotel-bg4roof', 'community-mall-dubai-al-khawaneej-2-dubai', 'mercure-gold-hotel-interior-design'],
  },
];
