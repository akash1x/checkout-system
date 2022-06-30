import { CheckoutService } from "../src/CheckoutService"
import {PriceMappingService} from "../src/PriceMappingService"
import {BuyXforYItem,BulkDiscountOnXItem,Offer,PriceMapping} from '../src/types'

describe('ProductMappingService',()=>{
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
  
    let checkoutService: CheckoutService = new CheckoutService(pricingRules)

    describe('scan',()=>{
        it(' should add sku to the map',()=>{
            checkoutService.scan("atv");
            expect(checkoutService.skuMap.get("atv")).toBe(1)
        })
    })

    describe('total',()=>{
        let priceMappingService: PriceMappingService= PriceMappingService.getInstance();
        let m1:PriceMapping={
            sku:"ipd",
            price:549.99
        }
        priceMappingService.addProductPricing(m1);
        it(' should return the total cart value',()=>{
            checkoutService.scan("ipd");
            expect(checkoutService.total()).toBe(549.99)
        })
    })
    
})