import { Component, EventEmitter, Output } from '@angular/core';
import Product from 'src/app/model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  title: string = '';
  price: number = 0;
  description: string = '';

  // @Output() productAdded = new EventEmitter<Product>();
  constructor(private productService: ProductService) { }

  addProduct() {
    console.log('Adding product:', this.title, this.price, this.description);

    // this.productAdded.emit({
    //   title: this.title,
    //   price: this.price,
    //   description: this.description
    // });

    this.productService.addProduct({
      title: this.title,
      price: this.price,
      description: this.description
    });

    // For this demo, we'll just reset the form fields
    this.title = '';
    this.price = 0;
    this.description = '';
  }

}
