import { test as base, expect } from "@playwright/test";
import { CartPage } from "../pageobjects/CartPage";
import { CatalogPage } from "../pageobjects/CatalogPage";

type AppFixtures = {
  cartPage: CartPage;
  catalogPage: CatalogPage;
};

export const test = base.extend<AppFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  catalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },
});

export { expect };
