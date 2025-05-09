import { test, expect } from '@playwright/test';
import { DemoblazePage } from '@pages/demoblaze.page';

test('Successful product purchase', async ({ page }) => {
    const store = new DemoblazePage(page);

    await store.navigate();
    await store.selectFirstProduct();

    page.once('dialog', async (dialog) => await dialog.accept());

    await store.addToCart();
    await store.goToCart();
    await store.placeOrder('QA Tester', '1234-5678-9999-0000');

    const confirmationMessage = await store.getConfirmationMessage();
    expect(confirmationMessage.toLowerCase()).toContain('thank you');
});
