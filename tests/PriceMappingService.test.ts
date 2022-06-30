import {PriceMappingService} from "../src/PriceMappingService"
import { PriceMapping } from "../src/types/";

describe('ProductMappingService',()=>{
    let priceMappingService : PriceMappingService=PriceMappingService.getInstance();
    describe('addProductPricing',()=>{
        it(' should add the product pricing to the product pricing list',()=>{
            let m1:PriceMapping={
                sku:"ipd",
                price:549.99
            }
            expect(priceMappingService.addProductPricing(m1)).toBe(1)
        })
    })

    describe('getProductsPricings',()=>{
        it(' should return entire list of products pricing',()=>{
            let m1:PriceMapping={
                sku:"ipd",
                price:549.99
            }
            priceMappingService.addProductPricing(m1);
            expect(priceMappingService.getProductsPricings()).toContain(m1);
        })
    })

    describe('getInstance',()=>{
        it(' should return instance of productService',()=>{
            expect(PriceMappingService.getInstance()).toEqual(priceMappingService);
        })
    })

    
})