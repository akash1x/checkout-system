import { Offer } from "../../types/Offer";
import { CreateAndFetchProducts } from "../products/CreateAndFetchProducts";

export interface ICheckout {
  productService: CreateAndFetchProducts;
  skuMap: Map<string, number>;
  pricingRules: Offer[];
  cartTotal: number;

  scan(sku: string): void;
  total(): string;
}
