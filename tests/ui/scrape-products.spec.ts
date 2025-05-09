import { test, expect } from '@playwright/test';
import { DemoblazePage } from '@pages/demoblaze.page';
import * as fs from 'fs';
import * as path from 'path';

test('Scrapear productos de las primeras dos páginas', async ({ page }) => {
  const tienda = new DemoblazePage(page);
  await tienda.navigate();

  const todosLosProductos: { name: string; price: string; link: string }[] = [];

  const productosPagina1 = await tienda.getProductElements();
  todosLosProductos.push(...productosPagina1);

  await tienda.goToNextPage();
  const productosPagina2 = await tienda.getProductElements();
  todosLosProductos.push(...productosPagina2);

  const dataFile = path.join(__dirname, '../../data/productos.txt');
  const contenido = todosLosProductos
    .map(p => `Nombre: ${p.name}\nPrecio: ${p.price}\nLink: ${p.link}\n---`)
    .join('\n');

  fs.writeFileSync(dataFile, contenido);

  expect(todosLosProductos.length).toBeGreaterThan(0);
});
