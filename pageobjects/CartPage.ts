import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class CartPage {
  private static readonly L = {
    cartDrawerContent: { strategy: 'css', value: '.float-cart__content', actionKind: 'generic' as const },
    cartLineItems: { strategy: 'css', value: '.float-cart .shelf-item', actionKind: 'generic' as const },
    cartContainer: { strategy: 'css', value: '.float-cart', actionKind: 'generic' as const },
    subtotalValue: { strategy: 'css', value: '.float-cart .sub-price__val', actionKind: 'generic' as const },
    checkoutButton: { strategy: 'css', value: '.float-cart .buy-btn', actionKind: 'button' as const },
    cartBadgeQuantity: { strategy: 'css', value: '.bag__quantity', actionKind: 'generic' as const }
  } as const;

  constructor(private readonly page: Page) {}

  async clickCartDrawerContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartDrawerContent));
  }

  async doubleClickCartDrawerContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartDrawerContent));
  }

  async longPressCartDrawerContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartDrawerContent));
  }

  async expectCartDrawerContentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartDrawerContent), expected, timeoutMs);
  }

  async expectCartDrawerContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartDrawerContent), substring, timeoutMs);
  }

  async expectCartDrawerContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartDrawerContent), value, timeoutMs);
  }

  async expectCartDrawerContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartDrawerContent), timeoutMs);
  }

  async expectCartDrawerContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartDrawerContent), count, timeoutMs);
  }

  async scrollCartDrawerContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartDrawerContent));
  }

  async clickCartLineItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartLineItems));
  }

  async doubleClickCartLineItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartLineItems));
  }

  async longPressCartLineItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartLineItems));
  }

  async expectCartLineItemsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartLineItems), expected, timeoutMs);
  }

  async expectCartLineItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartLineItems), substring, timeoutMs);
  }

  async expectCartLineItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartLineItems), value, timeoutMs);
  }

  async expectCartLineItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartLineItems), timeoutMs);
  }

  async expectCartLineItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartLineItems), count, timeoutMs);
  }

  async scrollCartLineItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartLineItems));
  }

  async clickCartContainer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartContainer));
  }

  async doubleClickCartContainer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartContainer));
  }

  async longPressCartContainer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartContainer));
  }

  async expectCartContainerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartContainer), expected, timeoutMs);
  }

  async expectCartContainerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartContainer), substring, timeoutMs);
  }

  async expectCartContainerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartContainer), value, timeoutMs);
  }

  async expectCartContainerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartContainer), timeoutMs);
  }

  async expectCartContainerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartContainer), count, timeoutMs);
  }

  async scrollCartContainerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartContainer));
  }

  async clickSubtotalValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.subtotalValue));
  }

  async doubleClickSubtotalValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.subtotalValue));
  }

  async longPressSubtotalValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.subtotalValue));
  }

  async expectSubtotalValueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.subtotalValue), expected, timeoutMs);
  }

  async expectSubtotalValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.subtotalValue), substring, timeoutMs);
  }

  async expectSubtotalValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.subtotalValue), value, timeoutMs);
  }

  async expectSubtotalValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.subtotalValue), timeoutMs);
  }

  async expectSubtotalValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.subtotalValue), count, timeoutMs);
  }

  async scrollSubtotalValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.subtotalValue));
  }

  async clickCheckoutButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.checkoutButton));
  }

  async doubleClickCheckoutButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.checkoutButton));
  }

  async longPressCheckoutButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.checkoutButton));
  }

  async expectCheckoutButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.checkoutButton), expected, timeoutMs);
  }

  async expectCheckoutButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.checkoutButton), substring, timeoutMs);
  }

  async expectCheckoutButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.checkoutButton), value, timeoutMs);
  }

  async expectCheckoutButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.checkoutButton), timeoutMs);
  }

  async expectCheckoutButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.checkoutButton), count, timeoutMs);
  }

  async scrollCheckoutButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.checkoutButton));
  }

  async clickCartBadgeQuantity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartBadgeQuantity));
  }

  async doubleClickCartBadgeQuantity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartBadgeQuantity));
  }

  async longPressCartBadgeQuantity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartBadgeQuantity));
  }

  async expectCartBadgeQuantityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartBadgeQuantity), expected, timeoutMs);
  }

  async expectCartBadgeQuantityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartBadgeQuantity), substring, timeoutMs);
  }

  async expectCartBadgeQuantityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartBadgeQuantity), value, timeoutMs);
  }

  async expectCartBadgeQuantityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartBadgeQuantity), timeoutMs);
  }

  async expectCartBadgeQuantityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartBadgeQuantity), count, timeoutMs);
  }

  async scrollCartBadgeQuantityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartBadgeQuantity));
  }

}
