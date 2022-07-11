export interface Offer {
  offerName: string;
  sku: string;
}

export interface BuyXforYItem extends Offer {
  x: number;
  y: number;
}

export interface BulkDiscountOnXItem extends Offer {
  x: number;
  discount: number;
}
