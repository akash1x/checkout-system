export type ProductSchema = {
  sku: string;
  name: string;
  price: number;
};

export interface ProductListInfo {
  [sku: string]: ProductSchema;
}
