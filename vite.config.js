import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from '@sentry/vite-plugin'

// Vite configuration
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN, // Use environment variable for auth token
      org: 'afilo', // Your Sentry organization slug
      project: 'techsci-ai-summarizer', // Your Sentry project slug
      release: 'ai-summarizer@1.0.0', // Your project release version
      setCommits: {
        auto: true // Automatically associate commits with the release
      },
      telemetry: false // Optional: Disable telemetry if desired
    })
  ],
  build: {
    sourcemap: true // Ensure source maps are enabled for Sentry
  }
})
