import {Product, Offer} from './types'
import {ProductService} from './ProductService'



export class CheckoutService{
    productService : ProductService;
    skuList : string[];

    constructor(productService: ProductService){
        this.productService= productService;
        this.skuList=[];
    }

    scan(sku: string): void{
        this.skuList.push(sku);
    }

    total(): number{
        let products : Product[]=this.productService.getProducts();
        let total:number=0;
        
        for(let i=0;i<this.skuList.length;i++){
            for(let j=0;j<products.length;j++){
                if(this.skuList[i]==products[j].sku){
                    total+=products[j].price;
                }
            }
        }
        let offer:Offer=this.checkForOffers();

        if(offer.isAtvOfferValid|| offer.isIpdOfferValid){
           total= this.adjustTotal(total,offer,products);
        }
       return total;
    }
    

    checkForOffers():Offer{
        let appleTvCount:number=0;
        let superIpadCount:number=0;
        let offers:Offer={
            atvUnits:0,
            ipdUnits:0,
            ipdOfferPrice:0,
            isAtvOfferValid:false,
            isIpdOfferValid:false,
        };
       
        for(let i=0;i<this.skuList.length;i++){
            if(this.skuList[i]==="atv"){
                appleTvCount++;
            }
            if(this.skuList[i]==="ipd"){
                superIpadCount++;
            }
        }
        //Offer 1
        if(appleTvCount>=3){
            offers.isAtvOfferValid=true;
            offers.atvUnits=Math.floor(appleTvCount/3);
        }
        //Offer 2
        if(superIpadCount>4){
            offers.ipdUnits=superIpadCount;
            offers.ipdOfferPrice=499.99;
            offers.isIpdOfferValid=true;
        }
        return offers;
    }

  

    adjustTotal(total:number,offer:Offer,products:Product[]): number{
        let atvCost:number=0;
        let ipdCost:number=0;
        let diff:number=0;
        if(offer.isAtvOfferValid){
            for(let i=0;i<products.length;i++){
                if(products[i].sku=="atv"){
                    atvCost=products[i].price;
                    break;
                }
            }

            total-= offer.atvUnits*atvCost;
        }
       
        if(offer.isIpdOfferValid){
            for(let i=0;i<products.length;i++){
                if(products[i].sku=="ipd"){
                    ipdCost=products[i].price;
                    break;
                }
            }
            diff= ipdCost-offer.ipdOfferPrice;
            total-= offer.ipdUnits*diff;
          
        }
        
        return total;
    }
   
}



