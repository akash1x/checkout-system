import { CreateAndFetchProducts } from "../src/services/products/CreateAndFetchProducts";
import { ProductSchema } from "../src/types/Product";

describe("ProductService", () => {
  const productService: CreateAndFetchProducts =
    CreateAndFetchProducts.getInstance();

  describe("addProduct", () => {
    it("Should add the product to the products list", () => {
      const p1: ProductSchema = {
        sku: "ipd",
        name: "Super iPad",
        price: 549.99,
      };
      productService.addProduct(p1);
      expect(productService.getProducts()["ipd"]).toEqual(p1);
    });
  });

  describe("getProducts", () => {
    it("Should return entire list of products", () => {
      const p1: ProductSchema = {
        sku: "ipd",
        name: "Super iPad",
        price: 549.99,
      };
      productService.addProduct(p1);
      expect(productService.getProducts()["ipd"]).toEqual(p1);
    });
  });

  describe("getInstance", () => {
    it("Should return instance of productService", () => {
      expect(CreateAndFetchProducts.getInstance()).toEqual(productService);
    });
  });
});
