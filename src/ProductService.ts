import {Product} from './types'

export class ProductService{
    products :Product[];
    constructor(){
        this.products=[];
    }
    addProduct(product:Product):void{
        this.products.push(product);
    }
    getProducts(): Product[]{
        return this.products;
    }
}