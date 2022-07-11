import { ProductListInfo, ProductSchema } from "../../types/Product";
import { IProducts } from "./Base";

export class CreateAndFetchProducts implements IProducts {
  static _instance: CreateAndFetchProducts;
  products: ProductListInfo;

  constructor() {
    this.products = {};
  }

  addProduct(product: ProductSchema): void {
    this.products[`${product.sku}`] = product;
  }

  getProducts(): ProductListInfo {
    return this.products;
  }

  static getInstance() {
    if (!CreateAndFetchProducts._instance) {
      CreateAndFetchProducts._instance = new CreateAndFetchProducts();
    }
    return CreateAndFetchProducts._instance;
  }
}
