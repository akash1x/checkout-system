import {Product, Offer,BuyXforYItem,BulkDiscountOnXItem} from './types'
import {ProductService} from './ProductService'
import { PriceMappingService } from './PriceMappingService';
import { PriceMapping } from './types/PriceMapping';

export class CheckoutService{
    productService : ProductService;
    priceMappingService: PriceMappingService
    skuMap:Map<string,number>;
    pricingRules: Offer[];
    cartTotal:number;

    constructor( pricingRules:Offer[]){
        this.productService= ProductService.getInstance();
        this.priceMappingService= PriceMappingService.getInstance();
        this.pricingRules=pricingRules;
        this.skuMap=new Map<string,number>();
        this.cartTotal=0;
    }

    scan(sku: string): void{
        if(this.skuMap.has(sku)){
            let skuFreq:number= <number>this.skuMap.get(sku);
            this.skuMap.set(sku,skuFreq+1);
        }else{
            this.skuMap.set(sku,1);
        }
    }

    total(): number{
        let productsPricings : PriceMapping[]=this.priceMappingService.getProductsPricings();
 
        for (let sku of this.skuMap.entries()) {
            for(let j=0;j<productsPricings.length;j++){
                if(sku[0]==productsPricings[j].sku){
                    this.cartTotal+=productsPricings[j].price*sku[1];
                }
            }
        }
        this.checkForOffers();
        return this.getTotal();
    }
    getTotal():number{
        return this.cartTotal;
    }

    checkForOffers():void{
        if(this.pricingRules.length>0){
            for(let i=0;i<this.pricingRules.length;i++){
                this.adjustTotal(this.pricingRules[i]);
            }
        }
    }

    adjustTotal(offer:Offer):void{
        //Adjust cost based on the offer
        let productsPricings : PriceMapping[]=this.priceMappingService.getProductsPricings();
        if(offer.offerName==="BuyXforYItem"){
            const offerDetails :BuyXforYItem= <BuyXforYItem>offer;
            let skuCount=0;
            for(let sku of this.skuMap.entries()){
                if(offerDetails.sku===sku[0]){
                    skuCount=sku[1];
                    break;
                }
            }
            let skuPrice=0;
            for(let i=0;i<productsPricings.length;i++){
                if(offerDetails.sku===productsPricings[i].sku){
                    skuPrice=productsPricings[i].price;
                    break;
                }
            }
            if(skuCount>=offerDetails.x){
                let a = Math.floor(skuCount/offerDetails.x);
                let b = offerDetails.x-offerDetails.y;
                this.cartTotal-=skuPrice*a*b;
            }
        }

        if(offer.offerName==="BulkDiscountOnXItem"){
            const offerDetails :BulkDiscountOnXItem= <BulkDiscountOnXItem>offer;
            let skuCount=0;
            for(let sku of this.skuMap.entries()){
                if(offerDetails.sku===sku[0]){
                    skuCount=sku[1];
                    break;
                }
            }
           
            let skuPrice=0;
            for(let i=0;i<productsPricings.length;i++){
                if(offerDetails.sku===productsPricings[i].sku){
                    skuPrice=productsPricings[i].price;
                    break;
                }
            }
            if(skuCount>=offerDetails.x){
                this.cartTotal-=skuCount*offerDetails.discount;
            }
        }
    }
   
}



