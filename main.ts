import { CheckoutService} from './src/CheckoutService'
import {ProductService} from './src/ProductService'
import {Product} from './src/types/'

let productService: ProductService = new ProductService();
let p1:Product={
    sku:"ipd",
    name:"Super iPad",
    price:549.99
}
let p2:Product={
    sku:"mbp",
    name:"MacBook Pro",
    price:1399.99
}
let p3:Product={
    sku:"atv",
    name:"Apple TV",
    price:109.50
}
let p4:Product={
    sku:"vga",
    name:"VGA adapter",
    price:30.00
}
productService.addProduct(p1);
productService.addProduct(p2);
productService.addProduct(p3);
productService.addProduct(p4);

const checkoutService: CheckoutService= new CheckoutService(productService);

//Example 1

// checkoutService.scan("atv");
// checkoutService.scan("atv");
// checkoutService.scan("atv");
// checkoutService.scan("vga");

//Example 2

checkoutService.scan("atv");
checkoutService.scan("ipd");
checkoutService.scan("ipd");
checkoutService.scan("atv");
checkoutService.scan("ipd");
checkoutService.scan("ipd");
checkoutService.scan("ipd");


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