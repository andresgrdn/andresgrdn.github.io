import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Repository is `andresgrdn.github.io`, so the site is served from the root
  // of `https://andresgrdn.github.io` and no `base` is required.
  site: 'https://andresgrdn.github.io',
});
