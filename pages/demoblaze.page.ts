import { Page } from '@playwright/test';

export class DemoblazePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async getProductElements() {
    await this.page.waitForSelector('.card');
    const products = this.page.locator('.card');

    const count = await products.count();
    const data = [];

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);
      const name = await product.locator('.card-title').textContent();
      const price = await product.locator('.card-block h5').textContent();
      const link = await product.locator('.hrefch').getAttribute('href');

      data.push({
        name: name?.trim() || '',
        price: price?.trim() || '',
        link: `https://www.demoblaze.com/${link}`,
      });
    }

    return data;
  }

  async goToNextPage() {
    const currentFirst = await this.page.locator('.card .card-title').first().textContent();

    await this.page.locator('#next2').click();

    await this.page.waitForFunction(
      (firstName) => {
        const el = document.querySelector('.card .card-title');
        return el && el.textContent !== firstName;
      },
      currentFirst,
      { timeout: 5000 }
    );
  }
  async selectFirstProduct() {
    await this.page.locator('.hrefch').first().click();
  }

  async addToCart() {
    await this.page.locator('a.btn.btn-success.btn-lg').click();
  }

  async goToCart() {
    await this.page.locator('#cartur').click();
  }

  async placeOrder(name: string, cardNumber: string) {
    await this.page.locator('button.btn.btn-success').click(); 

    await this.page.fill('#name', name);
    await this.page.fill('#card', cardNumber);

    await this.page.locator('button[onclick="purchaseOrder()"]').click();
  }

  async getConfirmationMessage(): Promise<string> {
    const confirmModal = this.page.locator('.sweet-alert h2');
    return (await confirmModal.textContent())?.trim() || '';
  }


}