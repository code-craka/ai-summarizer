import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  // https://vitejs.dev/config/
  plugins: [ react(),
    // Put the Sentry vite plugin after all other plugins
    sentryVitePlugin({
      org: "afilo",
      project: "ai-summarizer",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
});
