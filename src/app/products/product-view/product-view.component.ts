import { Component, Input, SimpleChanges } from '@angular/core';
import Product from 'src/app/model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  // @Input() product: Product  = {
  //   id: 0,
  //   title: '',
  //   price: 0,
  //   description: ''
  // };

  product: Product  = {
    id: 0,
    title: '',
    price: 0,
    description: ''
  };

  @Input() id: number = 0;

  constructor(private productService: ProductService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ProductViewComponent received new ID:', this.id);
    const product = this.productService.getProductById(this.id);
    if (product) {
      this.product = product;
    } else {
      // If no product found for the given ID, reset to default empty product
      this.product = {
        id: 0,
        title: '',
        price: 0,
        description: ''
      };
    }
  }

}
