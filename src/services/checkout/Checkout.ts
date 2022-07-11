import { OfferName } from "../../types/enums/OfferName";
import { Offer, BuyXforYItem, BulkDiscountOnXItem } from "../../types/Offer";
import { ProductListInfo } from "../../types/Product";
import { PricingRule } from "../pricingRules/PricingRules";
import { CreateAndFetchProducts } from "../products/CreateAndFetchProducts";
import { ICheckout } from "./Base";

export class Checkout implements ICheckout {
  productService: CreateAndFetchProducts;
  skuMap: Map<string, number>;
  pricingRules: Offer[];
  cartTotal: number;

  constructor(pricingRules: PricingRule) {
    this.productService = CreateAndFetchProducts.getInstance();
    this.pricingRules = pricingRules.getPricingRules();
    this.skuMap = new Map<string, number>();
    this.cartTotal = 0;
  }
  scan(sku: string): void {
    if (this.skuMap.has(sku)) {
      const skuFreq: number = <number>this.skuMap.get(sku);
      this.skuMap.set(sku, skuFreq + 1);
    } else {
      this.skuMap.set(sku, 1);
    }
  }

  total(): string {
    const products: ProductListInfo = this.productService.getProducts();
    for (const sku of this.skuMap.entries()) {
      this.cartTotal += products[sku[0]].price * sku[1];
    }
    this.checkForOffers();
    return this.getTotal().toFixed(2);
  }

  private getTotal(): number {
    return this.cartTotal;
  }

  private checkForOffers(): void {
    if (this.pricingRules.length > 0) {
      for (let i = 0; i < this.pricingRules.length; i++) {
        this.adjustTotal(this.pricingRules[i]);
      }
    }
  }

  private adjustTotal(offer: Offer): void {
    const products: ProductListInfo = this.productService.getProducts();
    let offerDetails;
    let skuCount = 0;

    switch (offer.offerName) {
      case OfferName.BuyXforYItem:
        offerDetails = <BuyXforYItem>offer;
        skuCount = this.skuMap.get(offerDetails.sku);
        if (skuCount >= offerDetails.x) {
          const a = Math.floor(skuCount / offerDetails.x);
          const b = offerDetails.x - offerDetails.y;
          this.cartTotal -= products[offerDetails.sku].price * a * b;
        }
        break;
      case OfferName.BulkDiscountOnXItem:
        offerDetails = <BulkDiscountOnXItem>offer;
        skuCount = this.skuMap.get(offerDetails.sku);
        if (skuCount >= offerDetails.x) {
          this.cartTotal -= skuCount * offerDetails.discount;
        }
        break;
    }
  }
}
