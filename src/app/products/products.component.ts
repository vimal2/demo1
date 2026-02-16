import { Component } from '@angular/core';
import Product from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent { //Parent Component for Product Manager
  
  products: Product[] = [];
  selectedProduct!: Product;

  onProductAdded(newProduct: Product) {
    console.log('Product added to parent component:', newProduct);
    this.products.push({
      ...newProduct,
      id: this.products.length + 1 // Simple ID generation for demo purposes
    });
  }

  onProductSelected(productId: number) {
    console.log('Product selected with ID:', productId);

    const selectedProduct = this.products.find(p => p.id === productId);
    if (selectedProduct) {
      this.selectedProduct = selectedProduct;
    }
  }

}
