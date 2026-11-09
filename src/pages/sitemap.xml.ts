import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects');
  const paths = ['/', '/about-us/', '/services/', '/portfolio/', '/contact/', '/privacy-policy/', '/terms/',
    '/featured-projects_category/commercial/', '/featured-projects_category/fb/', '/featured-projects_category/residential/',
    ...projects.map((p) => `/featured-projects/${p.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
