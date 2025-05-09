import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'UI',
      testMatch: /.*ui\/.*\.spec\.ts/,
      use: {
        baseURL: 'https://www.demoblaze.com',
        headless: true,
      },
    },
    {
      name: 'API',
      testMatch: /.*api\/.*\.spec\.ts/,
      use: {
        baseURL: 'https://petstore.swagger.io',
      },
    },
  ],
});
