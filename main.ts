import { CheckoutService} from './src/CheckoutService'
import { PriceMappingService } from './src/PriceMappingService';
import { ProductService } from './src/ProductService';
import {BulkDiscountOnXItem, BuyXforYItem, Offer, Product} from './src/types/'
import { PriceMapping } from './src/types/PriceMapping';

let productService: ProductService = ProductService.getInstance();
let priceMappingService: PriceMappingService= PriceMappingService.getInstance();
let m1:PriceMapping={
    sku:"ipd",
    price:549.99
}
let m2:PriceMapping={
    sku:"mbp",
    price:1399.99
}
let m3:PriceMapping={
    sku:"atv",
    price:109.50
}
let m4:PriceMapping={
    sku:"vga",
    price:30.00
}

priceMappingService.addProductPricing(m1);
priceMappingService.addProductPricing(m2);
priceMappingService.addProductPricing(m3);
priceMappingService.addProductPricing(m4);

let p1:Product={
    sku:"ipd",
    name:"Super iPad",

}
let p2:Product={
    sku:"mbp",
    name:"MacBook Pro",
  
}
let p3:Product={
    sku:"atv",
    name:"Apple TV",
 
}
let p4:Product={
    sku:"vga",
    name:"VGA adapter",
  
}

productService.addProduct(p1);
productService.addProduct(p2);
productService.addProduct(p3);
productService.addProduct(p4);

const offer1:BuyXforYItem={
    offerName:"BuyXforYItem",
    sku:"atv",
    x: 3,
    y: 2
}

const offer2:BulkDiscountOnXItem={
    offerName:"BulkDiscountOnXItem",
    sku:"ipd",
    x: 4,
    discount:50
}

const pricingRules: Offer[]=[offer1,offer2]

const checkoutService: CheckoutService= new CheckoutService(pricingRules);

//Example 1

checkoutService.scan("atv");
checkoutService.scan("atv");
checkoutService.scan("atv");
checkoutService.scan("vga");

//Example 2

// checkoutService.scan("atv");
// checkoutService.scan("ipd");
// checkoutService.scan("ipd");
// checkoutService.scan("atv");
// checkoutService.scan("ipd");
// checkoutService.scan("ipd");
// checkoutService.scan("ipd");


//Example Testing 

// checkoutService.scan("ipd");
// checkoutService.scan("ipd");
// checkoutService.scan("ipd");
// checkoutService.scan("ipd");
// checkoutService.scan("ipd");
// checkoutService.scan("mbp");
// checkoutService.scan("vga");
// checkoutService.scan("atv");
// checkoutService.scan("atv");
// checkoutService.scan("atv");
// checkoutService.scan("atv");
// checkoutService.scan("atv");
// checkoutService.scan("atv");

console.log(`$ ${checkoutService.total().toFixed(2)}`);