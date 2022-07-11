import { PricingRule } from "../src/services/pricingRules/PricingRules";
import { BulkDiscountOnXItem } from "../src/types/Offer";
import { Sku } from "../src/types/enums/Sku";

describe("Pricing Rule Service", () => {
  const pricingRule = new PricingRule();

  describe("addPricingRule", () => {
    it("Should add Ricing Rule", () => {
      const offer: BulkDiscountOnXItem = {
        offerName: "BulkDiscountOnXItem",
        sku: Sku.ipd,
        x: 4,
        discount: 50,
      };
      expect(pricingRule.addPricingRule(offer)).toBe(1);
    });
  });

  describe("getPricingRules", () => {
    it("Should get Pricing Rules", () => {
      const offer: BulkDiscountOnXItem = {
        offerName: "BulkDiscountOnXItem",
        sku: Sku.ipd,
        x: 4,
        discount: 50,
      };
      pricingRule.addPricingRule(offer);
      expect(pricingRule.getPricingRules()).toContain(offer);
    });
  });
});
