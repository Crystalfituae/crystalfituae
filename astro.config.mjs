// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crystalfituae.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  image: {
    // responsive widths used by <Picture>/<Image> srcset
    breakpoints: [360, 480, 640, 800, 1080, 1280, 1600, 1920],
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
