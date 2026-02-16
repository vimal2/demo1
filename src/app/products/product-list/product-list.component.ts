import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from 'src/app/model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent { // Child list component

  // @Input() products: Product[] = [];
    products: Product[] = [];
  @Output() productSelected = new EventEmitter<number>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Load products from the service when the component initializes
    this.products = this.productService.getProducts();
  }

  viewProduct(id: any) {
    console.log('View product with ID:', id);
    this.productSelected.emit(id);
  }
}
