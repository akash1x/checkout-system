import { Offer } from "../../types/Offer";

export interface IPricingRule {
  offers: Offer[];
  addPricingRule(pricingRule: Offer): number;
  getPricingRules(): Offer[];
}
