// export type Offer1={
//     atvUnits:number;
//     ipdUnits:number;
//     ipdOfferPrice:number;
//     isAtvOfferValid:boolean;
//     isIpdOfferValid:boolean;
// }

export interface Offer{
    offerName:string;
    sku:string;
}

export interface BuyXforYItem extends Offer{
    x:number;
    y:number;
}

export interface BulkDiscountOnXItem extends Offer{
    x:number;
    discount:number;
}