// Service landing pages (/<slug>/). draft: true = not in sitemap, noindex, "DRAFT" banner, not linked from the menu.
// Text marked [CONFIRM …] must be checked by Crystal Fit before publishing.

export interface Service {
  slug: string;
  draft: boolean;
  title: string;        // <title>, max 60 chars
  description: string;  // meta description, max 160 chars
  heroLines: string[];
  h1: string;           // added to the hero heading for search engines
  heroProject: string;  // project whose cover is the hero photo
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
    heroLines: ['Cafe & restaurant', 'fit-out'],
    h1: '— cafe, coffee shop and restaurant fit-out company in Dubai',
    heroProject: 'roasters-dubai-hills',
    intro: [
      'Food & beverage is our strongest field. Since 2014 we have designed and built specialty coffee shops, kiosks, bistros and restaurants in Dubai’s main malls and communities — including nine Roasters Specialty Coffee branches, WALA Coffee & Roastery, YOY Neo Bistro at Shangri-La and Panmi Coffee in Dubai Hills.',
      'An F&B opening in Dubai is a race against the rent-free period. Landlord design reviews, Dubai Municipality food-safety layout, Civil Defence, kitchen exhaust and gas approvals all have to move in parallel with construction. We run them as one programme, so the doors open on the agreed date.',
    ],
    deliver: [
      'Concept, 3D visuals and full F&B layout (bar, kitchen, storage, seating)',
      'Kitchen and bar equipment coordination with your suppliers',
      'Landlord NOC and authority approvals: Dubai Municipality (food & public health), Civil Defence, DEWA, Trakhees where needed',
      'MEP, HVAC, kitchen exhaust, fire-fighting and drainage works',
      'Bespoke joinery, counters, signage and decorative lighting',
      'Inspections, completion certificates and handover, 1-year warranty',
    ],
    approvals: ['Emaar Malls & Communities', 'Dubai Holding', 'Nakheel', 'TECOM / d3', 'Sobha', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA', 'Trakhees'],
    facts: [['20+', 'F&B projects delivered'], ['9', 'Roasters coffee shops'], ['1.5–4', 'months, typical build'], ['10+', 'years in UAE fit-out']],
    faq: [
      ['How long does a cafe fit-out take in Dubai?', 'A small kiosk or coffee shop (40–80 sqm) usually takes 6–8 weeks of works; a 200–350 sqm cafe or restaurant 3–4 months. Example: WALA Coffee & Roastery, 70 sqm — 1.5 months; Roasters Dubai Hills, 360 sqm — 4 months. Approvals typically add 2–6 weeks before works start.'],
      ['How much does a cafe or restaurant fit-out cost in Dubai?', '[CONFIRM price range] The cost depends on size, kitchen scope and finishes. As a guide, a shell & core cafe fit-out in Dubai is typically between AED [___] and AED [___] per sq ft. We give a fixed BOQ after the site visit and concept.'],
      ['Do you handle Dubai Municipality and Civil Defence approvals?', 'Yes. We prepare the drawings and submit landlord NOC, Dubai Municipality food & public-health layout, Civil Defence and DEWA approvals, and attend all inspections until the completion certificate.'],
      ['Which landlords have you worked with?', 'Emaar (Dubai Mall, Dubai Hills, Downtown, Creek Harbour), Dubai Holding (Bay Square, Nad Al Sheba Mall), Nakheel (Palm Jumeirah), TECOM (d3), Sobha Hartland and others.'],
      ['Can you work with our own brand designer?', 'Yes. We can build from your designer’s concept and produce the technical and shop drawings needed for approvals, or deliver the full design ourselves.'],
    ],
    projects: ['wala-coffee-roastery', 'roasters-dubai-hills', 'panmi-coffee-shop-dubai-hills', 'restaurant-contractor-dubai-yoy-neo-bistro', 'roasters-palm-jumeirah-mall', 'kingdom_palace_doha', 'roasters-coffee-kiosk-dubai-mall', 'yoy-ukrainian-firecooking-restaurant-the-pointe-palm-jumeirah'],
  },
  {
    slug: 'office-fit-out-dubai',
    draft: true,
    title: 'Office Fit-Out Company in Dubai | Crystal Fit',
    description: 'Office fit-out and interior design in Dubai: space planning, design & build, landlord and authority approvals in DIFC, Dubai Hills, Business Bay and TECOM.',
    heroLines: ['Office', 'fit-out'],
    h1: '— office fit-out and interior design company in Dubai',
    heroProject: 'livrichy-real-estates-office',
    intro: [
      'We design and build offices that work for the people in them: clear zoning, good acoustics and lighting, durable finishes and a reception that represents your brand. From Christie’s auction house and gallery office in DIFC to LIVRICHY Real Estate in Dubai Hills, our team handles the full scope from space plan to handover.',
      'Offices in Dubai towers have strict landlord fit-out rules and building-management requirements. We prepare the technical package, get the NOC and permits, and work around occupied floors with minimum disruption.',
    ],
    deliver: [
      'Space planning and test fits for new leases',
      'Interior design, 3D visuals, furniture and finishes selection',
      'Landlord NOC, Dubai Municipality / Trakhees / DDA permits and Civil Defence approvals',
      'Partitions, glazing, ceilings, flooring, joinery and acoustic treatment',
      'MEP, HVAC, lighting, data and AV coordination',
      'Furniture supply and installation, handover with 1-year warranty',
    ],
    approvals: ['DIFC', 'Dubai Holding', 'TECOM', 'Emaar', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA'],
    facts: [['200+', 'projects delivered'], ['2014', 'in business since'], ['1', 'team from design to handover'], ['1 year', 'warranty on works']],
    faq: [
      ['How long does an office fit-out take?', 'A 200–300 sqm office usually takes 8–12 weeks of works after approvals. Larger or multi-floor offices are planned in phases. [CONFIRM typical timeline]'],
      ['How much does an office fit-out cost in Dubai?', '[CONFIRM price range] It depends on the level of finishes and MEP changes; typically AED [___] – [___] per sq ft for a Category B fit-out. We provide a detailed BOQ after the site visit.'],
      ['Do you get the landlord NOC and permits?', 'Yes. We prepare the drawings required by the building management and authorities, submit them and follow up until permits are issued.'],
      ['Can you fit out our office while we keep working?', 'Yes. We can phase works, work after hours and keep noisy works outside office time where the building allows it.'],
    ],
    projects: ['livrichy-real-estates-office', 'christiess-ofiice-interior-design-dubai', 'gary-tatintsian-gallery', 'muha-music-fine-arts'],
  },
  {
    slug: 'retail-fit-out-dubai',
    draft: true,
    title: 'Retail & Shop Fit-Out in Dubai Malls | Crystal Fit',
    description: 'Retail shop, kiosk and showroom fit-out in Dubai malls: design, mall approvals with Emaar, Nakheel and Dubai Holding, construction and on-time handover.',
    heroLines: ['Retail & mall', 'fit-out'],
    h1: '— retail shop, kiosk and showroom fit-out in Dubai malls',
    heroProject: 'fissman-circle-mall-jvc-dubai',
    intro: [
      'A retail unit has to sell from the first day, and mall handover dates do not move. We have delivered shops, kiosks and boutiques in The Dubai Mall, Circle Mall, Nad Al Sheba Mall, Palm Jumeirah Mall, Dubai Hills Mall and community centres across Dubai.',
      'We know the mall fit-out manuals, design review stages and inspection routines, and we build to them from the first drawing — so approvals come back without repeated comments.',
    ],
    deliver: [
      'Store design, visual merchandising layout and shop drawings',
      'Mall design approval, NOC and authority permits',
      'Shopfronts, signage, display joinery and lighting',
      'MEP, fire-fighting and HVAC modifications',
      'Night-shift works as required by the mall',
      'Inspections, snagging and handover',
    ],
    approvals: ['Emaar Malls', 'Nakheel Malls', 'Dubai Holding', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA'],
    facts: [['12 sqm+', 'kiosks to flagship stores'], ['10+', 'malls and community centres'], ['On time', 'mall handover dates'], ['1 year', 'warranty on works']],
    faq: [
      ['How long does a shop fit-out in a Dubai mall take?', 'Kiosks typically 4–6 weeks; shops of 50–150 sqm 6–10 weeks of works, plus the mall design-approval period. [CONFIRM]'],
      ['Do you work at night in malls?', 'Yes. Most malls require noisy and heavy works at night; we plan crews and deliveries accordingly.'],
      ['Can you build a portable or temporary kiosk?', 'Yes — for example the Beacon Coffee portable kiosk in DIFC (12 sqm) and the Roasters kiosk in The Dubai Mall.'],
    ],
    projects: ['fissman-circle-mall-jvc-dubai', 'roasters-coffee-kiosk-dubai-mall', 'hanah-chocolate', 'studio-paper-al-safa-park-complex', 'community-mall-dubai-al-khawaneej-2-dubai', 'roasters-specialty-coffee-dubai-mall-island'],
  },
  {
    slug: 'clinic-fit-out-dubai',
    draft: true,
    title: 'Clinic & Medical Fit-Out in Dubai, DHA | Crystal Fit',
    description: 'Clinic, aesthetic and medical centre fit-out in Dubai: design to DHA requirements, landlord approvals, MEP and medical gases, inspections and DHA licensing support.',
    heroLines: ['Clinic & wellness', 'fit-out'],
    h1: '— clinic, aesthetic and wellness centre fit-out in Dubai',
    heroProject: 'amv-aesthetic-clinic',
    intro: [
      'Healthcare interiors in Dubai must pass Dubai Health Authority (DHA) facility requirements as well as landlord and Civil Defence approvals. We delivered AMV Aesthetic Clinic in Bay Square (Dubai Holding) on a full turnkey basis — concept design, approvals, construction and DHA inspections — in 3.5 months.',
      'We also design wellness and studio spaces such as In the Pink stretching studio & cafe in Dubai Hills and the SELF.SPACE self-portrait studio in Al Quoz.',
    ],
    deliver: [
      'Clinic layout to DHA facility guidelines (treatment rooms, sterilisation, waiting, staff areas)',
      'Landlord NOC, Dubai Municipality and Civil Defence approvals',
      'DHA inspection support until the facility licence',
      'MEP, HVAC with required air changes, medical-grade finishes',
      'Reception, joinery, lighting and branding',
      'Handover with 1-year warranty',
    ],
    approvals: ['Dubai Health Authority (DHA)', 'Dubai Holding', 'Emaar', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA'],
    facts: [['3.5', 'months — AMV Clinic, 180 sqm'], ['DHA', 'inspections handled'], ['Turnkey', 'design to licence'], ['1 year', 'warranty on works']],
    faq: [
      ['Do you handle DHA approvals for a new clinic?', 'Yes. We design to DHA facility requirements and support the inspections until the facility licence is issued, together with the landlord and Civil Defence approvals.'],
      ['How long does a clinic fit-out take?', 'For a 150–250 sqm clinic about 3–4 months including approvals. AMV Aesthetic Clinic (180 sqm) took 3.5 months.'],
      ['How much does a clinic fit-out cost in Dubai?', '[CONFIRM price range] Typically AED [___] – [___] per sq ft depending on medical MEP and equipment. We give a fixed BOQ after the concept.'],
    ],
    projects: ['amv-aesthetic-clinic', 'in-the-pink-stretching-studio-cafe', 'self-space-studio-dubai', 'the-game-premium-lounge'],
  },
  {
    slug: 'villa-interior-design-dubai',
    draft: true,
    title: 'Villa Interior Design & Fit-Out in Dubai | Crystal Fit',
    description: 'Luxury villa, penthouse and apartment interior design and fit-out in Dubai: Dubai Hills, Palm Jumeirah, Al Mizhar, Bluewaters. Design, approvals and turnkey build.',
    heroLines: ['Villa & residential', 'interiors'],
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
      ['How long does a villa renovation take?', 'Depending on scope, 3–6 months for a full interior renovation of a 400–700 sqm villa. [CONFIRM]'],
      ['Can you only do the design?', 'Yes. We offer design-only packages, and turnkey design & build if you want one team for everything.'],
    ],
    projects: ['anantara-penthouse', 'luxury-fitout-dubai', 'gbl-villa-ar-dubai-hills', 'nad-al-sheba-villa-moderna-dubai', 'oth-villa-jumeirah-pearl', 'amr-villa-al-mizhar'],
  },
];
