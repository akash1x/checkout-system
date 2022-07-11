import { Checkout } from "../src/services/checkout/Checkout";
import { PricingRule } from "../src/services/pricingRules/PricingRules";
import { initializePricingRules } from "../seeds/pricingRules/addPricingRules";
import { initializeProducts } from "../seeds/products/addProducts";

describe("Checkout Service", () => {
  const pricingRules: PricingRule = initializePricingRules();
  let checkout: Checkout;

  beforeEach(() => {
    checkout = new Checkout(pricingRules);
  });

  describe("Scan SKUs", () => {
    it("Should add sku to the map", () => {
      checkout.scan("atv");
      expect(checkout.skuMap.get("atv")).toBe(1);
    });
  });

  describe("Total Cart Value", () => {
    initializeProducts();

    it("Should return the total cart value of $2718.95", () => {
      checkout.scan("atv");
      checkout.scan("ipd");
      checkout.scan("ipd");
      checkout.scan("atv");
      checkout.scan("ipd");
      checkout.scan("ipd");
      checkout.scan("ipd");
      expect(checkout.total()).toBe("2718.95");
    });

    it("Should return the total cart value of $249.00", () => {
      checkout.scan("atv");
      checkout.scan("atv");
      checkout.scan("atv");
      checkout.scan("vga");
      expect(checkout.total()).toBe("249.00");
    });
  });
});
