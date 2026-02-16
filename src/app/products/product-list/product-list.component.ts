import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent { // Child list component
  @Input() products: Product[] = [];
  @Output() productSelected = new EventEmitter<number>();

  viewProduct(id: any) {
    console.log('View product with ID:', id);
    this.productSelected.emit(id);
  }
}
