Run with ui interface:

npx playwright test --ui

Run in headless mode:

npx playwright test tests/ui/scrape-products.spec.ts

# 🧪 QA Automation Challenge - UI & API (Playwright)

This project contains automated tests for two different challenges:

1. **UI Automation** for [Demoblaze](https://www.demoblaze.com) using Playwright.
2. **API Testing** for [Swagger Petstore](https://petstore.swagger.io) using Playwright's built-in API features.

💡 Technologies Used
Playwright

TypeScript

Node.js

### 📦 1. Clone the repository

```bash
git clone https://github.com/your-username/qa-automation-challenge.git
cd qa-automation-challenge

### 📥 2. Install dependencies

npm install

### 🛠️ 3. Install Playwright browsers

npx playwright install

### 🧪 Running the Tests
### UI Test 1: Scrape products (first 2 pages)

npx playwright test tests/ui/scrape-products.spec.ts

### UI Test 2: Purchase a product

npx playwright test tests/ui/purchase-product.spec.ts

### Run with ui interface:

npx playwright test --ui