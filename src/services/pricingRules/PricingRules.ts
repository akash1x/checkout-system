import { Offer } from "../../types/Offer";
import { IPricingRule } from "./Base";

export class PricingRule implements IPricingRule {
  offers: Offer[];
  constructor() {
    this.offers = [];
  }

  addPricingRule(offer: Offer): number {
    return this.offers.push(offer);
  }

  getPricingRules(): Offer[] {
    return this.offers;
  }
}
