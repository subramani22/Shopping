import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    new Product(1,'product 1','This is the product 1',100),
    new Product(2,'product 2','This is the product 1',100),
    new Product(3,'product 3','This is the product 1',100),
    new Product(4,'product 4','This is the product 1',100),
    new Product(5,'product 5','This is the product 1',100),
    new Product(6,'product 6','This is the product 1',100),
    new Product(7,'product 7','This is the product 1',100),
  ]

  constructor() { }
  getproducts():Product[]{
    return this.products
  }
}
