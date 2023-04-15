import { defineConfig } from 'cypress'

export default defineConfig(
  {
    e2e: {
      baseUrl: "http://127.0.0.1:8000",
      supportFile: false,
      specPattern: "cypress/**/*.spec.js",
      video: false
    }
  }
)

