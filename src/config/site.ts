/**
 * Content model for Huntington Solar Co (LI lead-gen phantom).
 * Services + areas are surfaced on the homepage cards AND drive the
 * /services/[slug] and /locations/[slug] static page generation.
 */
export type ServicePage = {
  slug: string;
  title: string;
  description: string;
};

export type AreaPage = {
  slug: string;
  title: string;
};

export const services: ServicePage[] = [
  {
    slug: 'residential-solar-installation',
    title: 'Residential Solar Installation',
    description:
      'Roof-mounted panel systems sized to your usage. Federal 30% tax credit plus NY state incentives. Free in-home assessment with payback math before you sign.',
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    description:
      'Warehouse, retail, and multi-family installs across Suffolk and Nassau. Power purchase agreements (PPA), direct purchase, or lease structures available.',
  },
  {
    slug: 'battery-storage',
    title: 'Battery Storage (Powerwall)',
    description:
      'Tesla Powerwall and Enphase IQ Battery systems. Keep the lights on during PSEG outages, store excess solar for evening use, eligible for additional NY rebates.',
  },
  {
    slug: 'solar-repair-maintenance',
    title: 'Repair & Maintenance',
    description:
      'Inverter replacements, panel re-seating, monitoring system fixes, and post-storm inspections. We service systems we did NOT install — flat-rate diagnostics.',
  },
  {
    slug: 'free-solar-quote',
    title: 'Free Solar Quote',
    description:
      "Tell us your average LIPA bill and roof orientation — we'll send back a system size, projected savings, and payback period. No salesperson visit required to get the number.",
  },
];

export const areas: AreaPage[] = [
  { slug: 'huntington', title: 'Huntington' },
  { slug: 'huntington-station', title: 'Huntington Station' },
  { slug: 'greenlawn', title: 'Greenlawn' },
  { slug: 'northport', title: 'Northport' },
  { slug: 'cold-spring-harbor', title: 'Cold Spring Harbor' },
  { slug: 'centerport', title: 'Centerport' },
];
