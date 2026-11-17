// Service landing pages (/<slug>/). draft: true = not in sitemap, noindex, "DRAFT" banner, not linked from the menu.
// No prices or timelines on the site (owner's decision).

export interface Service {
  slug: string;
  draft: boolean;
  off?: boolean;        // not built at all (owner switched the page off)
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
  deliverGroups?: [string, string[]][]; // optional: "What we deliver" split into titled columns
  process?: [string, string][];         // optional: own "How we work" steps (default: serviceProcess)
  introBlock?: { kicker: string; title: string; image: string; paras: string[] }; // optional: intro in the /services/ section style (text + photo)
  // owner's service-page template (2026-11-16): 1 intro white (photo left) / 2 deliver black (photo right) / 3 approvals white (photo left) / 4 steps black (Our story style)
  deliverImage?: string;
  deliverImages?: string[]; // one photo per deliverGroups entry -> each group becomes its own 'X: what we deliver' block
  deliverParas?: string[][]; // optional text paragraphs per deliverGroups entry (shown above the list)
  approvalsBlock?: { image: string; paras: string[] };
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
    // DRAFT reference (2026-11-16): separate page for the "Interior & MEP Design" service, same content as /services/#consultancy, expanded
    slug: 'interior-design-mep-dubai',
    draft: false,
    title: 'Interior Design & MEP Engineering in Dubai | Crystal Fit',
    description: 'Interior design drawings and MEP engineering with HVAC, electrical, plumbing and fire-fighting calculations. Approval-ready packages for DM, DCD and DEWA.',
    heroLines: ['Interior design', '& MEP'],
    h1: '— interior design and MEP engineering in Dubai',
    heroProject: 'gary-tatintsian-gallery',
    heroImage: 'hero-services-retouched.jpg', // same banner as /services/
    intro: [],
    // same text and photo as the live /services/#consultancy section
    introBlock: {
      kicker: 'Interior Design & MEP',
      title: 'Interior Design & MEP Engineering in Dubai',
      image: 'planning.jpg',
      paras: [
        'Every successful fit-out starts with a complete design package. Crystal Fit provides <strong>interior design and MEP engineering in Dubai</strong> — all drawings and calculations needed for landlord and authority approval, and for construction.',
        '<strong>Interior design:</strong> space planning, concept and 3D visuals, material and FF&amp;E specifications, layout, ceiling, flooring and elevation drawings, joinery details and shop drawings.',
        '<strong>MEP design:</strong> HVAC heat-load and ventilation calculations, electrical load schedules and lighting layouts, plumbing and drainage, fire-fighting and fire-alarm design — <strong>submission drawings for Dubai Municipality, Civil Defence and DEWA</strong>.',
        'Our interior designers and MEP engineers work in one office, so ceilings, lighting, ducts, sprinklers and joinery are coordinated on paper — not discovered on site. Fire-fighting and fire-alarm design is done in-house.',
        'The package is ready for <strong>landlord NOC and authority submission</strong> — Dubai Municipality, Dubai Civil Defence and DEWA — and for tender, with a BOQ any contractor can price.',
        'Design only or design and build — either works, with a BOQ for tender.',
      ],
    },
    deliver: [],
    deliverGroups: [
      ['Interior design', [
        'Concept, moodboards and 3D visuals',
        'Space planning and test fits before you sign a lease',
        'Material, finishes and FF&amp;E specifications',
        'Layout, ceiling, flooring, lighting and elevation drawings',
        'Joinery details and shop drawings',
      ]],
      ['MEP design', [
        'HVAC heat-load and ventilation calculations, AC and duct layouts',
        'Electrical load schedules, DB schedules, power and lighting layouts',
        'Plumbing, water supply and drainage design',
        'Fire-fighting and fire-alarm design',
        'Kitchen exhaust and services coordination for Food &amp; Beverage (F&amp;B)',
      ]],
      ['Project management', [
        'Programme and milestones agreed before works start',
        'Approvals, inspections and completion certificates',
        'Procurement and long-lead items ordered on time',
        'Coordination of designers, contractors and suppliers',
        'Site quality, safety, budget and variations',
        'Weekly reports on progress, approvals and costs',
      ]],
    ],
    deliverImages: ['svc-imd-design-omakase25.jpg', 'svc-mep-drainage-mahojer.png', 'turnkey.jpg'], // PM = former approvals photo (owner) // MEP = HVAC ducting drawing, Roasters Science Park GF
    deliverParas: [[
      'Every design project follows the same sequence. We start with the brief, a site survey and the landlord fit-out guide, develop the <strong>concept and 3D visuals</strong> until you approve the direction, and sign off the <strong>material samples</strong>.',
      'Next comes the <strong>detailed design</strong>: the full drawing set, joinery details and MEP calculations, coordinated between interior and engineering. We prepare the <strong>authority submissions</strong>, answer every comment until approval and hand over a <strong>BOQ for tender</strong> — or build it ourselves.',
    ], [
      'Our MEP engineers design every system in-house and back each drawing with <strong>calculations</strong>: HVAC heat-load and fresh-air ventilation, electrical load schedules and DB schedules, water supply, drainage and fire-fighting hydraulics. The result is equipment that is sized right — not oversized to be safe, and not too small to pass inspection.',
      'For Food &amp; Beverage (F&amp;B) units we coordinate the kitchen layout with your <strong>kitchen consultant</strong> and do the calculations ourselves — kitchen exhaust, fresh air, drainage and grease trap. <strong>Fire-fighting is designed in-house</strong>; <strong>gas (LPG)</strong> is designed together with our specialist consultants. As the <strong>main contractor</strong>, we coordinate all disciplines — interior, MEP, kitchen, gas and joinery — and prepare every package for <strong>Dubai Municipality, Dubai Civil Defence and DEWA</strong>, answering every authority comment until approval.',
    ], [
      'Designers, contractors, landlords, authorities, suppliers — a fit-out has many parties and one deadline. We provide <strong>construction project management</strong> with one accountable point of contact from the first drawing to handover: programme, approvals and inspections, procurement, contractor coordination, quality, budget and variations.',
      'Already have a design and a contractor? We can step in as your <strong>project manager</strong> — we have also taken over projects after previous contractors could not finish them or obtain approvals.',
    ]],
    approvalsBlock: {
      image: 'svc-imd-approvals-tfc-yoga.jpg', // owner: TFC Yoga_2 render
      paras: [
        'Every fit-out in Dubai needs two sets of approvals: the <strong>landlord NOC</strong> from the developer or mall, and <strong>authority permits</strong> from Dubai Municipality, Dubai Civil Defence and DEWA.',
        'We prepare the submission drawings and calculations, submit them, answer every comment and attend the inspections — so approvals are part of the schedule, not a delay.',
      ],
    },
    approvals: ['Emaar', 'Dubai Holding', 'TECOM', 'Nakheel', 'IDAMA', 'Dubai Municipality', 'DM Food & Safety', 'Dubai Civil Defence', 'DEWA'],
    facts: [],
    process: [
      ['Brief & Site Survey', 'We visit the site, measure it, read the landlord fit-out guide and agree the brief, scope and budget with you.'],
      ['Concept Design & 3D Visuals', 'Moodboards, layout options and 3D visuals until you approve the design direction and the materials.'],
      ['Concept Drawings', 'Layout, ceiling and elevation drawings for the landlord design review and your sign-off before the detailed design.'],
      ['Detailed Arch. & MEP', 'Full architectural and MEP drawing set with HVAC, electrical, plumbing and fire-fighting calculations — ready for approvals and tender.'],
      ['Fit-out', 'We build it ourselves as the main contractor — or support your contractor and manage the project until handover.'],
    ],
    faq: [
      ['Do I need approved drawings before a fit-out in Dubai?', 'Yes. Almost every fit-out needs a landlord NOC and authority approvals — Dubai Municipality, Dubai Civil Defence and DEWA — before works start. That requires a full set of interior and MEP drawings with calculations, which is exactly what we prepare.'],
      ['What is included in your interior design and MEP package?', 'Concept and 3D visuals, layout, ceiling, flooring and elevation drawings, joinery details, material and FF&E schedules, and MEP design with HVAC, electrical, plumbing, drainage and fire-fighting calculations — ready for approvals and for tender.'],
      ['Can you do the design only, without the fit-out?', 'Yes. We deliver complete packages that any contractor can build from, with a BOQ for tender. If you wish, we then build it ourselves or manage your contractor.'],
      ['Do you do MEP design in-house?', 'Yes. Our engineers design HVAC, electrical, plumbing, drainage and fire-fighting in-house and do all calculations themselves. Gas (LPG) is designed together with our specialist consultants.'],
      ['How long do design and approvals take?', 'It depends on the size of the space, the landlord and the authorities involved. We agree a design and submission programme at the start and answer every comment quickly, so approvals do not hold up your opening.'],
      ['Will the design stay within my budget?', 'We develop the BOQ together with the design, so you see the cost of each decision before it is drawn in detail — and we suggest alternatives where the budget needs it.'],
      ['Can you check a unit before we sign the lease?', 'Yes. We review the landlord fit-out guide, the available power, drainage and ventilation, and the layout, and tell you what is feasible and where the main risks are.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a free consultation and site visit we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['wala-coffee-roastery', 'roasters-science-park-dubai', 'panmi-coffee-shop-dubai-hills', 'gary-tatintsian-gallery', 'amv-aesthetic-clinic', 'christiess-ofiice-interior-design-dubai', 'anantara-penthouse', 'rad-villa-dubai-hills'],
  },
  {
    // DRAFT (2026-11-16): F&B service page on the owner's template
    slug: 'cafe-restaurant-fit-out-dubai',
    draft: false,
    title: 'Restaurant & Café Fit-Out in Dubai | Crystal Fit',
    description: 'Restaurant, café and coffee shop design and fit-out in Dubai: concept, landlord NOC, Dubai Municipality, Civil Defence and DEWA approvals, MEP, joinery, handover.',
    heroLines: ['F&B design', '& build'],
    h1: '— restaurant, café and coffee shop fit-out company in Dubai',
    heroProject: 'roasters-dubai-hills',
    heroImage: 'hero-fnb-yoy-firecooking.jpg',
    intro: [],
    introBlock: {
      kicker: 'F&B Design & Build',
      title: 'Restaurant & Café Fit-Out in Dubai',
      image: 'fnb.jpg',
      paras: [
        'Opening a restaurant, café or coffee shop in Dubai means landlord design codes, authority approvals, kitchen requirements and a fixed opening date — all at once. Crystal Fit delivers <strong>Food &amp; Beverage (F&amp;B) fit-out</strong> from concept to opening day: design, approvals, fit-out, MEP and custom joinery under one contract.',
        '<strong>What’s included:</strong> interior design, landlord submissions and NOCs, <strong>Dubai Municipality food safety, Civil Defence (DCD) and DEWA approvals</strong>, MEP and kitchen coordination with your supplier, bar counters and joinery built for your menu, and handover with all completion certificates.',
        '<strong>Built for service, not just for photos.</strong> We plan guest flow, bar and kitchen workflow, storage and seating capacity with your operations team, and coordinate the exhaust, grease trap, gas and fire-suppression details inspectors check before you open. Finishes are chosen to survive daily cleaning and heavy traffic.',
        'Already have a designer or a brand book? We turn your drawings into an approved, buildable project. Send us the unit location and concept — we’ll come back with the scope and approval route.',
      ],
    },
    deliver: [],
    deliverGroups: [
      ['F&B fit-out', [
        'Civil works, partitions, ceilings, flooring and finishes',
        'MEP and HVAC, kitchen exhaust, fresh air and drainage',
        'Grease trap, gas (LPG) and fire-suppression coordination',
        'Bar counters, display units and bespoke joinery from our workshop',
        'Signage, decorative lighting and final styling before opening',
      ]],
      ['F&B design', [
        // owner's list (2026-11-16)
        'Concept architectural design with 3D visuals and drawings',
        'Detailed architectural design as per landlord requirements',
        'Detailed MEP design',
        'Dubai Municipality (DM) food safety drawings',
        'Kitchen and bar detail drawings (in coordination with the kitchen consultant)',
        'Material, lighting and FF&amp;E schedule',
        'Joinery details',
        'Guidance through all steps',
        'Forms, registrations and AMC support',
        'BOQ template and fit-out tender process',
      ]],
    ],
    deliverImages: ['svc-fnb-fitout-8825.jpg', 'svc-fnb-design.jpg'], // IMG_8825 Wala site; owner will send a version with safety shoes // owner: Fit-out block before Design
    deliverParas: [[
      'Every Food &amp; Beverage (F&amp;B) project follows the same sequence. It starts with a detailed <strong>BOQ and one signed agreement</strong> for the whole scope. Before anything is ordered, you approve and sign the <strong>material samples</strong> — finishes, colours and fixtures.',
      'Our team then verifies every project detail on site — measurements, existing services and the landlord’s requirements — and prepares the <strong>authority submissions</strong>: landlord NOC, Dubai Municipality food safety, Civil Defence and DEWA. <strong>Fit-out works start</strong> under one programme with weekly progress reports and finish with <strong>final inspections and snagging</strong>, completion certificates and handover before your opening day.',
    ], []],
    approvalsBlock: {
      image: 'svc-fnb-approvals.jpg',
      paras: [
        'A Food &amp; Beverage (F&amp;B) unit cannot open without the <strong>landlord NOC</strong> and the <strong>authority permits</strong>: Dubai Municipality food safety and building permit, Dubai Civil Defence for fire-fighting and gas, and DEWA for the power load.',
        'We prepare every submission, answer the comments and attend the inspections, running approvals in parallel with the works — so the doors open within the rent-free period.',
      ],
    },
    approvals: ['Emaar', 'Dubai Holding', 'Nakheel', 'IDAMA', 'TECOM', 'Meraas', 'Dubai Municipality', 'DM Food & Safety', 'Dubai Civil Defence', 'DEWA', 'Trakhees'],
    facts: [],
    process: [
      ['BOQ & Agreement', 'We agree the scope and a detailed BOQ with you, and sign one agreement for the whole project.'],
      ['Material Approvals', 'You approve the finishes, materials and colours on physical samples — nothing is ordered without your signature.'],
      ['On-site Verification', 'We verify all project details on site: measurements, existing services and the landlord’s requirements.'],
      ['Authority Approvals', 'Landlord NOC, Dubai Municipality food safety, Civil Defence and DEWA — submitted and followed up until approval.'],
      ['Fit-out Works', 'Civil, MEP, kitchen exhaust, joinery and finishes — one team, one programme, weekly progress reports.'],
      ['Inspections & Snagging', 'Authority and landlord inspections, snagging, completion certificates and handover before your opening day.'],
    ],
    faq: [
      ['How much does a restaurant or café fit-out cost in Dubai?', 'It depends on the size, the condition of the unit (shell & core or previous fit-out), the kitchen, the MEP works and the finishes. After a site visit we prepare a detailed BOQ, so you see every cost before you sign.'],
      ['How long does a restaurant fit-out take in Dubai?', 'It depends on the size, the kitchen and the approvals. We agree the programme in the contract, run approvals in parallel with the works, and take financial responsibility for delays caused by us.'],
      ['Which approvals do I need to open a restaurant or café in Dubai?', 'Usually the landlord NOC, a Dubai Municipality building permit and food-safety approval, Dubai Civil Defence for fire-fighting and gas, and DEWA for the power load. We prepare and follow up all of them until the completion certificates.'],
      ['Can you open before our rent-free period ends?', 'That is how we plan it: design, approvals and long-lead items run in parallel, and kitchen equipment is coordinated early, so the fit-out does not wait for paperwork.'],
      ['Do you handle the kitchen exhaust, grease trap and gas?', 'Yes. We coordinate the kitchen layout with your kitchen consultant and do the exhaust, fresh-air, drainage and grease-trap calculations ourselves; gas (LPG) is designed with our specialist consultants.'],
      ['Can you work with our own brand designer?', 'Yes. We build from your designer’s concept and produce the technical drawings needed for approvals — or deliver the full design ourselves.'],
      ['Do you give a warranty after handover?', 'Yes. Our fit-out works come with a standard 1-year warranty, and we can offer a maintenance package after that.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a free consultation and site visit we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['wala-coffee-roastery', 'roasters-science-park-dubai', 'panmi-coffee-shop-dubai-hills', 'roasters-dubai-hills', 'restaurant-contractor-dubai-yoy-neo-bistro', 'yoy-ukrainian-firecooking-restaurant-the-pointe-palm-jumeirah', 'roasters-palm-jumeirah-mall', 'roasters-coffee-kiosk-dubai-mall'],
  },
  {
    // DRAFT (2026-11-16): Commercial service page on the owner's template
    slug: 'commercial-fit-out-dubai',
    draft: false,
    title: 'Office, Retail & Clinic Fit-Out in Dubai | Crystal Fit',
    description: 'Commercial fit-out in Dubai for offices, retail stores, clinics and galleries: design, landlord NOC and authority approvals, MEP, joinery and handover.',
    heroLines: ['Commercial', 'fit-outs'],
    h1: '— office, retail and clinic fit-out company in Dubai',
    heroProject: 'gary-tatintsian-gallery',
    heroImage: 'hero-commercial-selfspace.jpg',
    intro: [],
    introBlock: {
      kicker: 'Commercial Fit-Outs',
      title: 'Commercial, Office & Retail Fit-Out in Dubai',
      image: 'retail.jpg',
      paras: [
        'Your space is part of your brand. Crystal Fit is a <strong>commercial fit-out contractor in Dubai</strong> for <strong>offices, retail stores, clinics, galleries, studios and hotels</strong> — designed around how your customers and staff use it, and built to open on time.',
        '<strong>What’s included:</strong> space planning and design, landlord and mall approvals, <strong>TECOM, Dubai Holding, Emaar, Dubai Municipality and Civil Defence permits</strong>, partitions, ceilings, MEP, lighting, flooring and custom joinery.',
        'For offices we plan workstations, meeting rooms and acoustics; for retail, a storefront and layout that guide people through your products; for clinics, treatment rooms and patient flow that meet authority requirements.',
        'Clinics and medical spaces are a field of their own. For <strong>AMV Aesthetic Clinic in Bay Square</strong> we delivered the design and fit-out through <strong>Dubai Health Authority (DHA) approval</strong> — treatment rooms, patient flow, hygienic finishes and the services DHA inspectors check before the facility licence is issued.',
        'Every commercial project is run by one team: our designers, MEP engineers and <strong>in-house skilled labour</strong> work to one programme, so landlord rules, authority comments and site works never wait for each other.',
        'Tell us your unit size and location — we’ll advise on layout and approvals.',
      ],
    },
    deliver: [],
    deliverGroups: [
      ['Commercial fit-out', [
        'Civil works, partitions, glass walls, ceilings, flooring and finishes',
        'MEP and HVAC, power, data and lighting',
        'Fire-fighting and fire-alarm works to Civil Defence requirements',
        'Reception desks, display units and bespoke joinery from our workshop',
        'Clinics: treatment rooms, hygienic finishes and medical services to DHA requirements',
        'Night-shift and phased works in malls and occupied buildings',
      ]],
      ['Commercial design', [
        'Concept architectural design with 3D visuals and drawings',
        'Detailed architectural design as per landlord requirements',
        'Detailed MEP design',
        'Space planning and test fits before you sign a lease',
        'Clinic layouts and drawings for Dubai Health Authority (DHA) approval',
        'Material, lighting and FF&amp;E schedule',
        'Joinery details',
        'Guidance through all steps',
        'BOQ template and fit-out tender process',
      ]],
    ],
    deliverImages: ['svc-com-fitout-6083.jpg', 'svc-com-design.jpg'], // IMG_6083 office site (Elena) // owner: design photo from Self.Space or Wala (renders OK in design blocks), not Livrichy
    deliverParas: [[
      'Every commercial project follows the same sequence. It starts with a detailed <strong>BOQ and one signed agreement</strong> for the whole scope. Before anything is ordered, you approve and sign the <strong>material samples</strong> — finishes, colours and fixtures.',
      'Our team then verifies every project detail on site — measurements, existing services, building and landlord requirements — and prepares the <strong>authority submissions</strong>: landlord NOC, Dubai Municipality, Civil Defence, DEWA and, for clinics, the <strong>Dubai Health Authority (DHA)</strong>. <strong>Fit-out works start</strong> under one programme with weekly progress reports — phased around your business when the building is occupied — and finish with <strong>final inspections and snagging</strong>, completion certificates and handover.',
    ], []],
    approvalsBlock: {
      image: 'svc-com-clinics.jpg',
      paras: [
        'Every business district in Dubai has its own fit-out rules. We prepare the <strong>landlord NOC</strong> package for the developer or mall and the <strong>authority permits</strong> — Dubai Municipality, Dubai Civil Defence and DEWA.',
        'For clinics we also handle the <strong>Dubai Health Authority (DHA)</strong> route: layouts to DHA facility requirements, submissions and the inspections before the facility licence — as we did for AMV Aesthetic Clinic in Bay Square. We submit, answer every comment and attend every inspection until the completion certificate.',
      ],
    },
    approvals: ['Emaar', 'Dubai Holding', 'TECOM', 'DIFC', 'DDA', 'Nakheel', 'IDAMA', 'DHA', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA'],
    facts: [],
    process: [
      ['BOQ & Agreement', 'We agree the scope and a detailed BOQ with you, and sign one agreement for the whole project.'],
      ['Material Approvals', 'You approve the finishes, materials and colours on physical samples — nothing is ordered without your signature.'],
      ['On-site Verification', 'We verify all project details on site: measurements, existing services and the landlord’s requirements.'],
      ['Authority Approvals', 'Landlord NOC, Dubai Municipality, Civil Defence, DEWA and, for clinics, DHA — submitted and followed up until approval.'],
      ['Fit-out Works', 'Partitions, ceilings, MEP, flooring, joinery and finishes — phased around your business when needed.'],
      ['Inspections & Snagging', 'Authority and landlord inspections, snagging, completion certificates and handover on the agreed date.'],
    ],
    faq: [
      ['How much does an office or retail fit-out cost in Dubai?', 'It depends on the size, whether the unit is shell & core or already fitted, the MEP changes and the finishes. After a site visit we prepare a detailed BOQ, so you see every cost before you sign.'],
      ['How long does a commercial fit-out take in Dubai?', 'It depends on the size, the landlord and the approvals. We agree the programme in the contract, plan approvals in parallel with the works and take financial responsibility for delays caused by us.'],
      ['Do you get the landlord NOC and authority permits?', 'Yes. We prepare the drawings required by the landlord and the authorities, submit them and follow up until permits and completion certificates are issued.'],
      ['Do you handle DHA approvals for clinics?', 'Yes. We design to Dubai Health Authority (DHA) facility requirements, prepare the submissions and support the inspections until the facility licence is issued — as for AMV Aesthetic Clinic in Bay Square.'],
      ['Can you work while our office or mall is open?', 'Yes. We phase the works and carry out noisy works at night or after hours as the building requires.'],
      ['Can you fit out a shell & core unit?', 'Yes. We take units from shell & core to a finished space — partitions, ceilings, MEP, fire-fighting, flooring, joinery and finishes — under one contract.'],
      ['Can you check a unit before we sign the lease?', 'Yes. We review the landlord fit-out guide, the services available and the layout, and tell you what is feasible and what the main risks are.'],
      ['How do I get a quotation?', 'Send us your floor plan or unit details through the form or WhatsApp. After a free consultation and site visit we prepare a detailed BOQ and a programme for your project.'],
    ],
    projects: ['amv-aesthetic-clinic', 'livrichy-real-estates-office', 'christiess-ofiice-interior-design-dubai', 'gary-tatintsian-gallery', 'self-space-studio-dubai', 'fissman-circle-mall-jvc-dubai', 'mercure-gold-hotel-interior-design', 'the-game-premium-lounge'],
  },
  {
    // DRAFT (2026-11-16): Residential service page on the owner's template
    slug: 'villa-interior-design-dubai',
    draft: false,
    title: 'Villa & Apartment Interior Design in Dubai | Crystal Fit',
    description: 'Villa, townhouse, penthouse and apartment interior design, renovation and fit-out in Dubai: community NOC, permits, MEP, kitchens and bespoke joinery.',
    heroLines: ['Residential', 'interiors'],
    h1: '— villa and apartment interior design and renovation in Dubai',
    heroProject: 'anantara-penthouse',
    heroImage: 'home-5.jpg', // owner: Bluewaters kitchen island with blue stone (former home carousel slide)
    intro: [],
    introBlock: {
      kicker: 'Residential Interiors',
      title: 'Villa & Apartment Interior Design and Renovation in Dubai',
      image: 'residential.jpg',
      paras: [
        'Crystal Fit designs and builds <strong>villa, townhouse, penthouse and apartment interiors in Dubai</strong> — from full renovation to bespoke finishing of a new home.',
        '<strong>What’s included:</strong> interior design and 3D visuals, layout changes, <strong>community and authority approvals</strong>, MEP, flooring, kitchens, wardrobes and joinery, procurement and supervision until you move in.',
        'We choose materials for Dubai’s heat, humidity and sun, so your home stays comfortable and easy to maintain. Living abroad or busy? One project manager handles drawings, approvals, purchasing, quality and budget for you.',
        'Most of our residential clients need the home finished by a fixed date — before the school year, a move from abroad or the end of a lease. One project manager runs drawings, community approvals, purchasing and site work, and you receive regular photo reports wherever you are.',
        'Our <strong>in-house skilled labour</strong> and joinery workshop build kitchens, wardrobes, doors and wall panelling to measure, so the finishes match the design and quality stays under our control.',
        'Share your floor plan and a few photos — we’ll suggest what’s possible.',
      ],
    },
    deliver: [],
    deliverGroups: [
      ['Residential fit-out', [
        'Demolition, layout changes and extensions',
        'MEP, AC, lighting and smart-home works',
        'Marble, parquet and stone flooring, wall finishes',
        'Kitchens, wardrobes and doors from our joinery workshop',
        'Furniture, lighting and decor procurement until move-in',
      ]],
      ['Residential design', [
        'Concept design with 3D visuals of every room',
        'Detailed layouts as per community requirements',
        'Detailed MEP design: AC, lighting, power and plumbing',
        'Kitchen, wardrobe and bathroom detail drawings',
        'Material, lighting and FF&amp;E schedule',
        'Joinery details',
        'Drawing set for the community NOC and authority permits',
        'Guidance through all steps',
      ]],
    ],
    deliverImages: ['svc-res-fitout-6045.jpg', 'svc-res-design.jpg'],
    deliverParas: [[
      'Every home follows the same sequence. It starts with a detailed <strong>BOQ and one signed agreement</strong> for the whole scope. Before anything is ordered, you approve and sign the <strong>material samples</strong> — marble, parquet, finishes and fittings.',
      'Our team then verifies every detail on site — measurements, existing services and the community rules — and prepares the <strong>community NOC and authority permits</strong>. <strong>Fit-out works start</strong> under one programme with regular photo reports and finish with <strong>final inspections and snagging</strong>, cleaning and handover — ready to move in.',
    ], []],
    approvalsBlock: {
      image: 'svc-res-approvals-kidsroom.jpg', // owner: render Radouane villa kids room (Copy of detskaja_0000 (1))
      paras: [
        'Most villa and apartment works in Dubai need a <strong>community NOC</strong> from the master developer — Emaar, Nakheel, Dubai Holding and others — and for structural or MEP changes a <strong>permit</strong> from Dubai Municipality or Trakhees.',
        'We prepare the drawings, submit them and handle the inspections and the DEWA connection, so works start legally and your security deposit is returned in full.',
      ],
    },
    approvals: ['Emaar', 'Nakheel', 'IDAMA', 'Dubai Holding', 'Meraas', 'Dubai Municipality', 'Trakhees', 'DEWA'],
    facts: [],
    process: [
      ['BOQ & Agreement', 'We agree the scope and a detailed BOQ with you, and sign one agreement for the whole project.'],
      ['Material Approvals', 'You approve marble, parquet, finishes and fittings on physical samples — nothing is ordered without your signature.'],
      ['On-site Verification', 'We verify measurements, existing services and the community rules before any work starts.'],
      ['Authority Approvals', 'Community NOC from the master developer and Dubai Municipality or Trakhees permits — submitted and followed up.'],
      ['Fit-out Works', 'Demolition, MEP, flooring, joinery and finishes by our in-house skilled labour, with regular photo reports.'],
      ['Inspections & Snagging', 'Snagging, cleaning, final inspection and handover — ready to move in.'],
    ],
    faq: [
      ['How much does a villa or apartment renovation cost in Dubai?', 'It depends on the scope — layout changes, MEP, kitchens, bathrooms, joinery — and on the materials you choose. After a visit we prepare a detailed BOQ, so you see every cost before you sign.'],
      ['Do I need a permit or NOC to renovate my villa in Dubai?', 'In most communities, yes: a community NOC from the master developer (Emaar, Nakheel, Dubai Holding and others) and, for structural or MEP changes, a permit from Dubai Municipality or Trakhees. We prepare and follow them up for you.'],
      ['How long does a villa renovation take?', 'It depends on the scope and the approvals. We agree the programme in the contract before works start and keep you updated with regular photo reports.'],
      ['Can we live in the house during the renovation?', 'For small works, often yes — we phase them room by room. For a full renovation we usually recommend moving out, which is safer and faster.'],
      ['Can you only do the design?', 'Yes. We offer design-only packages, and turnkey design and build if you want one team for everything.'],
      ['Can you renovate while we live abroad?', 'Yes. One project manager runs the project and sends you regular photo reports; every decision and variation is agreed with you in writing.'],
      ['Do you make kitchens and wardrobes yourselves?', 'Yes. Kitchens, wardrobes, doors and other joinery are made to measure and installed by our own team.'],
      ['Do you give a warranty after handover?', 'Yes. Our fit-out works come with a standard 1-year warranty, and we can offer a maintenance package after that.'],
    ],
    projects: ['anantara-penthouse', 'rad-villa-dubai-hills', 'luxury-fitout-dubai', 'springs-townhouse-dubai', 'nad-al-sheba-villa-moderna-dubai', 'gbl-villa-ar-dubai-hills', 'oth-villa-jumeirah-pearl', 'amr-villa-al-mizhar'],
  },
  {
    // DRAFT (2026-11-16): Project management service page on the owner's template
    slug: 'project-management-draft',
    draft: true,
    off: true, // owner 2026-11-16: no separate Project Management service page for now
    title: 'Turnkey Fit-Out & Project Management Dubai | Crystal Fit',
    description: 'Turnkey fit-out and construction project management in Dubai: programme, approvals, procurement, contractor coordination, quality, budget and handover.',
    heroLines: ['Project', 'management'],
    h1: '— turnkey fit-out and construction project management in Dubai',
    heroProject: 'nad-al-sheba-villa-moderna-dubai',
    heroImage: 'hero-services-retouched.jpg', // owner: PM cover = current Services banner (drawing on plans)
    intro: [],
    introBlock: {
      kicker: 'Project Management',
      title: 'Turnkey Fit-Out & Project Management in Dubai',
      image: 'turnkey.jpg',
      paras: [
        'Designers, contractors, landlords, authorities, suppliers — a fit-out has many parties and one deadline. Crystal Fit provides <strong>turnkey fit-out and construction project management in Dubai</strong>, with one accountable point of contact from the first drawing to handover.',
        '<strong>What we manage:</strong> programme, approvals and inspections, procurement and long-lead items, contractor coordination, site quality and safety, budget and variations, snagging and completion certificates.',
        'Our <strong>in-house skilled labour</strong> and selected suppliers keep quality under control. You always know the status of approvals, purchases, progress and costs; variations are agreed in writing before work starts.',
        'We have taken over projects after previous contractors could not finish them or obtain approvals — starting with a full technical review, a realistic programme and a clear list of what has to be fixed. Gari Tatintsian Gallery in Dubai Design District is one of them.',
        'Owners, brands and investors use us as their single point of responsibility: one programme, one budget report and one person who answers for approvals, quality and handover.',
        'Already have a design and a contractor? We can step in as your project manager.',
      ],
    },
    deliver: [],
    deliverGroups: [
      ['Turnkey fit-out', [
        'One contract from design to handover',
        'Our in-house skilled labour and joinery workshop',
        'Procurement and long-lead items ordered on time',
        'Variations agreed in writing before work starts',
        'Snagging, completion certificates and warranty',
      ]],
      ['Project management', [
        'Programme and milestones agreed before works start',
        'BOQ review, tender and contractor selection',
        'Coordination of designers, contractors and suppliers',
        'Site supervision, quality and safety checks',
        'Weekly reports on progress, approvals and costs',
      ]],
    ],
    deliverImages: ['svc-pm-turnkey-2088.jpg', 'svc-pm-manage-1907.jpg'],
    deliverParas: [[
      'Every turnkey project follows the same sequence. It starts with a detailed <strong>BOQ and one signed agreement</strong> for the whole scope. Before anything is ordered, you approve and sign the <strong>material samples</strong>.',
      'We then verify every project detail on site, prepare the <strong>authority submissions</strong> and order long-lead items so nothing waits. <strong>Fit-out works start</strong> under one programme with weekly reports on progress, approvals and costs, and finish with <strong>final inspections and snagging</strong>, completion certificates and handover.',
    ], []],
    approvalsBlock: {
      image: 'svc-pm-approvals.jpg',
      paras: [
        'Approvals are where most fit-out schedules slip. We manage the whole route: <strong>landlord NOC</strong>, Dubai Municipality building permit, Dubai Civil Defence, DEWA and the specialist authorities your project needs.',
        'Submissions, comments, inspections and completion certificates are planned in the programme from day one — not discovered at the end.',
      ],
    },
    approvals: ['Emaar', 'Dubai Holding', 'TECOM', 'Nakheel', 'DIFC', 'Dubai Municipality', 'Dubai Civil Defence', 'DEWA', 'Trakhees'],
    facts: [],
    process: [
      ['BOQ & Agreement', ''],
      ['Material Approvals', ''],
      ['On-site Verification', ''],
      ['Authority Approvals', ''],
      ['Fit-out Works', ''],
      ['Inspections & Snagging', ''],
    ],
    faq: [
      ['Can you manage a project designed by another company?', 'Yes. We can take over an existing design and contractor and manage the project on your behalf, or build it ourselves.'],
      ['How do you control the budget?', 'We review the BOQ before works start, agree every variation in writing and report costs weekly.'],
      ['Do you take over projects that are delayed?', 'Yes. We have completed projects after previous contractors could not finish them or obtain approvals — starting with a full technical review.'],
      ['Who is our contact during the project?', 'One project manager who is responsible for programme, approvals, quality and budget.'],
      ['How do I get a quotation?', 'Send us the project details through the form or WhatsApp. After a short brief we propose the scope of management or a turnkey contract.'],
    ],
    projects: ['gary-tatintsian-gallery', 'roasters-science-park-dubai', 'anantara-penthouse', 'christiess-ofiice-interior-design-dubai', 'wala-coffee-roastery', 'livrichy-real-estates-office', 'nad-al-sheba-villa-moderna-dubai', 'mercure-gold-hotel-interior-design'],
  },
];
