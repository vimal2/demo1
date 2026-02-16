import { Injectable } from '@angular/core';
import Product from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, title: 'Laptop', price: 999.99, description: 'A high-performance laptop for work and play.' },
    { id: 2, title: 'Smartphone', price: 499.99, description: 'A sleek smartphone with the latest features.' },
    { id: 3, title: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones for immersive sound.' }
  ]

  constructor() { }

  addProduct(product: Product) {
    this.products.push({
      ...product,
      id: this.products.length + 1 // Simple ID generation for demo purposes
    });
  }

  getProducts(): Product[] {
    //get products from REST API in real application, here we return the local array for demo
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

}
