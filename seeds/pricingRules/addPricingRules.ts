import { PricingRule } from "../../src/services/pricingRules/PricingRules";
import { OfferName } from "../../src/types/enums/OfferName";
import { Sku } from "../../src/types/enums/Sku";
import { BulkDiscountOnXItem, BuyXforYItem } from "../../src/types/Offer";

export function initializePricingRules(): PricingRule {
  const p1: BuyXforYItem = {
    offerName: OfferName.BuyXforYItem,
    sku: Sku.atv,
    x: 3,
    y: 2,
  };
  const p2: BulkDiscountOnXItem = {
    offerName: OfferName.BulkDiscountOnXItem,
    sku: Sku.ipd,
    x: 4,
    discount: 50,
  };

  const pricingRule = new PricingRule();

  pricingRule.addPricingRule(p1);
  pricingRule.addPricingRule(p2);
  return pricingRule;
}
