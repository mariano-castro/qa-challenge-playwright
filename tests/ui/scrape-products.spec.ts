import { test, expect } from '@playwright/test';
import { DemoblazePage } from '@pages/demoblaze.page';
import * as fs from 'fs';
import * as path from 'path';

test('Scrape products from first two pages', async ({ page }) => {
  const tienda = new DemoblazePage(page);
  await tienda.navigate();

  const allProducts: { name: string; price: string; link: string }[] = [];

  const productsPage1 = await tienda.getProductElements();
  allProducts.push(...productsPage1);

  await tienda.goToNextPage();
  const productsPage2 = await tienda.getProductElements();
  allProducts.push(...productsPage2);

  const dataFile = path.join(__dirname, '../../data/productos.txt');
  const contenido = allProducts
    .map(p => `Nombre: ${p.name}\nPrecio: ${p.price}\nLink: ${p.link}\n---`)
    .join('\n');

  fs.writeFileSync(dataFile, contenido);

  expect(allProducts.length).toBeGreaterThan(0);
});

