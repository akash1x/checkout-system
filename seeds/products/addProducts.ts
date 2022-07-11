import { CreateAndFetchProducts } from "../../src/services/products/CreateAndFetchProducts";
import { ProductSchema } from "../../src/types/Product";
import { Sku } from "../../src/types/enums/Sku";

export function initializeProducts(): void {
  const p1: ProductSchema = {
    sku: Sku.ipd,
    name: "Super iPad",
    price: 549.99,
  };
  const p2: ProductSchema = {
    sku: Sku.mbp,
    name: "MacBook Pro",
    price: 1399.99,
  };
  const p3: ProductSchema = {
    sku: Sku.atv,
    name: "Apple TV",
    price: 109.5,
  };
  const p4: ProductSchema = {
    sku: Sku.vga,
    name: "VGA adapter",
    price: 30.0,
  };

  const product: CreateAndFetchProducts = CreateAndFetchProducts.getInstance();

  product.addProduct(p1);
  product.addProduct(p2);
  product.addProduct(p3);
  product.addProduct(p4);
}
