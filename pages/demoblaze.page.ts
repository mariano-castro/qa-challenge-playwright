import { Page } from '@playwright/test';

export class DemoblazePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async getProductElements(): Promise<{ name: string; price: string; link: string }[]> {
    const products = await this.page.locator('.card').all();

    return Promise.all(
      products.map(async (product) => {
        const name = await product.locator('.card-title').textContent();
        const price = await product.locator('.card-block h5').textContent();
        const link = await product.locator('.hrefch').getAttribute('href');

        return {
          name: name?.trim() || '',
          price: price?.trim() || '',
          link: link ? `https://www.demoblaze.com/${link}` : ''
        };
      })
    );
  }

  async goToNextPage() {
    await this.page.locator('button#next2').click();
    await this.page.waitForTimeout(1000); 
  }

  

}