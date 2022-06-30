import { PriceMapping } from "./types/PriceMapping";
export class PriceMappingService{
    static _instance: PriceMappingService;
    productsPricing :PriceMapping[];

    constructor(){
        this.productsPricing=[];
    }
    addProductPricing(productPrice:PriceMapping):number{
        return this.productsPricing.push(productPrice);
    }
    getProductsPricings(): PriceMapping[]{
        return this.productsPricing;
    }

    static getInstance(){
        if(!PriceMappingService._instance){
            PriceMappingService._instance=new PriceMappingService();
        }
        return PriceMappingService._instance;
    }
}