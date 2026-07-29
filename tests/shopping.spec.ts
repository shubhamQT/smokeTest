import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Add the $10.90 product to cart and validate cart details', { tag: ["@e2e","@regression","@P0","@case-74a6f898-2ba4-4a72-808b-322ba5ba85d2"] }, async ({ page, catalogPage, cartPage }) => {
  await test.step('Open — Navigate to Shopping Cart app', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Product grid is visible', async () => {
    await catalogPage.expectProductsGridVisible();
  });

  await test.step('Assert contains — Confirm $10.90 price is present in product grid', async () => {
    await catalogPage.expectProductsGridContainsText('$10.90');
  });

  await test.step("Click — Tap 'Add to cart' on the product priced $10.90", async () => {
    await catalogPage.clickAddToCartCroppedStayGroovy();
  });

  await test.step('Assert visible — Cart drawer auto-opens after adding', async () => {
    await cartPage.expectCartDrawerVisible();
  });

  await test.step('Assert count — Cart contains exactly one line item', async () => {
    await cartPage.expectCartItemCount(1);
  });

  await test.step('Assert contains — Selected product name is displayed in cart', async () => {
    await cartPage.expectCartContainsText('Cropped Stay Groovy off white');
  });

  await test.step('Assert contains — Cart item price is $10.90', async () => {
    await cartPage.expectCartContainsText('$10.90');
  });

  await test.step('Assert contains — Quantity defaults to 1', async () => {
    await cartPage.expectCartContainsText('1');
  });

  await test.step('Assert contains — Cart subtotal equals $10.90', async () => {
    await cartPage.expectSubtotalContainsText('$10.90');
  });

  await test.step('Assert visible — Checkout button is visible', async () => {
    await cartPage.expectCheckoutVisible();
  });

  await test.step('Assert enabled — Checkout button is enabled', async () => {
    await cartPage.expectCheckoutEnabled();
  });

  await test.step('Assert contains — Cart badge shows 1 item', async () => {
    await cartPage.expectCartBadgeContainsText('1');
  });
});
