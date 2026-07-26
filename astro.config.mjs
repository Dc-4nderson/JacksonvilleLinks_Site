import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://jacksonvillelinksinc.org',
  compressHTML: true,
  vite: {
    resolve: {
      // @formspree/ajax's package.json "browser" field points at a
      // global-script build with no named exports, which Vite prefers
      // over the ESM "module" build by default. Alias to the ESM build
      // directly so `import { initForm } from '@formspree/ajax'` resolves
      // to the module with real exports (and keeps TS types working via
      // the package's own "types" field, unlike importing the dist path
      // directly in application code).
      alias: {
        '@formspree/ajax': fileURLToPath(new URL('./node_modules/@formspree/ajax/dist/index.mjs', import.meta.url)),
      },
    },
  },
});
