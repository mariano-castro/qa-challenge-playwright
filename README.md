# 🧪 QA Automation Challenge - UI & API (Playwright)

This project contains automated tests for two different challenges:

1. **UI Automation** for [Demoblaze](https://www.demoblaze.com) using Playwright.
2. **API Testing** for [Swagger Petstore](https://petstore.swagger.io) using Playwright's built-in API features.

💡 Technologies Used
Playwright

TypeScript

Node.js

```bash
 📦 1. Clone the repository

git clone https://github.com/your-username/qa-automation-challenge.git
cd qa-automation-challenge

 📥 2. Install dependencies

npm install

 🛠️ 3. Install Playwright browsers

npx playwright install

 🧪 4. Running the Tests (UI)
 UI Test 1: Scrape products (first 2 pages)

npx playwright test --project=UI

RUN with ui interface:

npx playwright test --ui

🧪 5. Running the Tests (API)

npx playwright test --project=API