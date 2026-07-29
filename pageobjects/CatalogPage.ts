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

export class CatalogPage {
  private static readonly L = {
    productsGrid: { strategy: 'css', value: '.products', actionKind: 'generic' as const },
    addToCartCroppedStayGroovy: { strategy: 'css', value: '.shelf-item:has-text("Cropped Stay Groovy off white") .shelf-item__buy-btn', actionKind: 'button' as const }
  } as const;

  constructor(private readonly page: Page) {}

  async clickProductsGrid(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CatalogPage.L.productsGrid));
  }

  async doubleClickProductsGrid(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CatalogPage.L.productsGrid));
  }

  async longPressProductsGrid(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CatalogPage.L.productsGrid));
  }

  async expectProductsGridVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CatalogPage.L.productsGrid), expected, timeoutMs);
  }

  async expectProductsGridContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CatalogPage.L.productsGrid), substring, timeoutMs);
  }

  async expectProductsGridValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CatalogPage.L.productsGrid), value, timeoutMs);
  }

  async expectProductsGridEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CatalogPage.L.productsGrid), timeoutMs);
  }

  async expectProductsGridCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CatalogPage.L.productsGrid), count, timeoutMs);
  }

  async scrollProductsGridIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CatalogPage.L.productsGrid));
  }

  async clickAddToCartCroppedStayGroovy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy));
  }

  async doubleClickAddToCartCroppedStayGroovy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy));
  }

  async longPressAddToCartCroppedStayGroovy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy));
  }

  async expectAddToCartCroppedStayGroovyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), expected, timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), substring, timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), value, timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), timeoutMs);
  }

  async expectAddToCartCroppedStayGroovyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy), count, timeoutMs);
  }

  async scrollAddToCartCroppedStayGroovyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CatalogPage.L.addToCartCroppedStayGroovy));
  }

}
