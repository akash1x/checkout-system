import { initializePricingRules } from "./seeds/pricingRules/addPricingRules";
import { initializeProducts } from "./seeds/products/addProducts";
import { Checkout } from "./src/services/checkout/Checkout";

initializeProducts();
const pricingRules = initializePricingRules();
const checkout: Checkout = new Checkout(pricingRules);

// CASE 1
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("vga");

//CASE 2
// checkout.scan("atv");
// checkout.scan("ipd");
// checkout.scan("ipd");
// checkout.scan("atv");
// checkout.scan("ipd");
// checkout.scan("ipd");
// checkout.scan("ipd");

const cartTotal = checkout.total();
console.log(cartTotal);
