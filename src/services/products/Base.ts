import { ProductListInfo, ProductSchema } from "../../types/Product";

export interface IProducts {
  products: ProductListInfo;

  addProduct(product: ProductSchema): void;
  getProducts(): ProductListInfo;
}
