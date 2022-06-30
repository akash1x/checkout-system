import {ProductService} from "../src/ProductService"
import {Product} from "../src/types"

describe('ProductService',()=>{
    let productService : ProductService=ProductService.getInstance();
    describe('addProduct',()=>{
        it(' should add the product to the products list',()=>{
            let p1:Product={
                sku:"ipd",
                name:"Super iPad",
            
            }
            expect(productService.addProduct(p1)).toBe(1)
        })
    })

    describe('getProducts',()=>{
        it(' should return entire list of products',()=>{
            let p1:Product={
                sku:"ipd",
                name:"Super iPad",
            
            }
            productService.addProduct(p1);
            expect(productService.getProducts()).toContain(p1);
        })
    })

    describe('getInstance',()=>{
        it(' should return instance of productService',()=>{
            expect(ProductService.getInstance()).toEqual(productService);
        })
    })

    
})