import { Product } from "./types";
export class ProductService{
    static _instance: ProductService;
    products :Product[];

    constructor(){
        this.products=[];
    }
    addProduct(product:Product):number{
        return this.products.push(product);
      
    }
    getProducts(): Product[]{
        return this.products;
    }

    static getInstance(){
        if(!ProductService._instance){
            ProductService._instance=new ProductService();
        }
        return ProductService._instance;
    }
}